import { createContext, useCallback, useEffect, useRef, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [apis, setApis] = useState([]);
  const [moviNation, setMoviNation] = useState([]);
  const [pageHistory, setPageHistory] = useState([]);
  const [apiMovi, setapiMovi] = useState({});
  const [quantity, setQuantity] = useState();
  const [childHere, setChildHere] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const currentRef = useRef(5);
  const sliderRef = useRef(null);
  const childRef = useRef(null);
  const childRef2 = useRef(null);

  const handleHeaderClick = useCallback(() => {
    setHide1(false);
    setHide((prevHide) => !prevHide);
  }, []);

  const handleHeaderClick1 = useCallback(() => {
    setHide(false);
    setHide1((prevHide1) => !prevHide1);
  }, []);
  
  const hanldeChildren = useCallback(() => {
    setChildHere(childRef.current.textContent);
  }, [childHere])  
  const hanldeChildren2 = useCallback(() => {
    setChildHere(childRef2.current.textContent);
  }, [childHere])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const positionResponse = await fetch(
          `https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${currentPage}`
        );
        const positionData = await positionResponse.json();

        setapiMovi(positionData.pagination);
        setQuantity(positionData.pagination.totalPages);

        const newData = positionData.items.map(
          ({ modified, _id, name, origin_name, year, slug }) => ({
            modified,
            _id,
            name,
            origin_name,
            year,
            slug,
            img: null,
            type: null,
            nation: null,
            state: null,
          })
        );

        const fetchMovieData = async (element) => {
          const movieResponse = await fetch(
            `https://ophim1.com/phim/${element.slug}`
          );
          const movieData = await movieResponse.json();

          element.img = movieData.movie.thumb_url;
          element.type = movieData.movie.category[0].name;
          element.nation = movieData.movie.country[0].name;
          element.state = movieData.movie.episode_current;
        };

        await Promise.all([
          fetchMovieData(newData[0]),
          ...newData.slice(1).map(fetchMovieData),
        ]);

        setApis(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const pageEnd = useCallback(() => {
    setCurrentPage(quantity);
  }, [quantity]);

  const handlePageClick = useCallback(
    (page) => {
      setPageHistory((prevPageHistory) => [...prevPageHistory, currentPage]);
      setCurrentPage(page);
      setStartIndex(page - 1);
      scrollToSlider();
    },
    [currentPage]
  );

  const scrollToSlider = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  const handlePreviousPage = useCallback(() => {
    if (pageHistory.length > 0) {
      const previousPage = pageHistory[pageHistory.length - 1];
      setPageHistory((prevPageHistory) =>
        prevPageHistory.slice(0, prevPageHistory.length - 1)
      );
      setCurrentPage(previousPage);
      setStartIndex(previousPage - 1);
      scrollToSlider();
    }
  }, [pageHistory, scrollToSlider]);

  const renderPages = useCallback(() => {
    const pages = [];

    for (let i = startIndex; i < startIndex + currentRef.current; i++) {
      if (i < quantity) {
        pages.push(
          <div
            key={i + 1}
            className={`pageNumber ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </div>
        );
      }
    }

    return pages;
  }, [currentPage, handlePageClick, quantity, startIndex]);

  useEffect(() => {
    const updatedMoviNation = apis.map((api) => api.nation);
    const uniqueMoviNation = [...new Set(updatedMoviNation)];
    setMoviNation(uniqueMoviNation);
  }, [apis]);

  const listTypePhim = [
    "Hành Động",
    "Tình Cảm",
    "Hài Hước",
    "Cổ Trang",
    "Tâm Lý",
    "Hình Sự",
    "Chiến Tranh",
    "Thể Thao",
    "Võ Thuật",
    "Viễn Tưởng",
    "Phiêu Lưu",
    "Khoa Học",
    "Kinh Dị",
    "Âm Nhạc",
    "Thần Thoại",
    "Tài Liệu",
    "Gia Đình",
    "Chính kịch",
    "Bí ẩn",
    "Học Đường",
    "Kinh Điển",
    "Phim 70+",
  ];

  const value = {
    hide,
    hide1,
    listTypePhim,
    apis,
    moviNation,
    apiMovi,
    currentPage,
    childHere,
    sliderRef,
    childRef,
    childRef2,
    hanldeChildren,
    hanldeChildren2,
    renderPages,
    handleHeaderClick,
    handleHeaderClick1,
    handlePreviousPage,
    handlePageClick,
    pageEnd,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
