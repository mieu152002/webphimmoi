import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

function ContainerList2({ className, className2 }) {
  const pageNumber = useContext(ThemeContext);
//   console.log(pageNumber.currentPage);
  return (
    <div className={className}>
      <div>
        <span className="containerList2Item">
          Trang <span>{pageNumber.apiMovi.currentPage}</span> /{" "}
          <span>{pageNumber.apiMovi.totalPages} </span>Tổng{" "}
          <span>{pageNumber.apiMovi.totalItems}</span> Kết quả
        </span>
      </div>
      <div className={className2} ref={pageNumber.sliderRef}>
        {pageNumber.currentPage !== 1 && <div className="pageNumber2" onClick={pageNumber.handlePreviousPage}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </div>}
        {pageNumber.renderPages()}
        <div className="pageNumber1" onClick={pageNumber.pageEnd}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
      </div>
    </div>
  );
}

export default ContainerList2;
