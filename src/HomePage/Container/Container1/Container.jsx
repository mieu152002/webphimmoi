import { useContext } from "react"
import { ThemeContext } from "../../../ThemeContext"
import Slider from "./ContainerSlider"
import ContianerList from "./ContainerList"
import ContainerList1 from "./ContainerList1"
import ContainerList2 from "./ContainerList2"

function Container() {
    const price = useContext(ThemeContext)
    return (
        <div className="container">
            <div className="containerTitle">
                <p className="containerText">Dữ liệu phim miễn phí vĩnh viễn. Cập nhật nhanh, chất lượng cao, ổn định và lâu dài. Tốc độ phát cực nhanh với đường truyền băng thông cao, đảm bảo đáp ứng được lượng xem phim trực tuyến lớn. Đồng thời giúp nhà phát triển website phim giảm thiểu chi phí của các dịch vụ lưu trữ và stream.</p>
            </div>
            <div className="containerNav">
                <Slider 
                    className="containerSlider"
                    icon="fa-solid fa-film containerSliderColor"
                    number="1234"
                    text="Phim cập nhật hôm nay"
                    classSpan="sliderSpan containerSliderColor"
                />
                <Slider 
                    className="containerSlider"
                    icon="fa-solid fa-video"
                    number={price.apiMovi.totalItems}
                    text="Tổng số lượng phim"
                    classSpan="sliderSpan"
                />
                <Slider 
                    className="containerSlider "
                    icon="fa-brands fa-telegram containerSliderTele" 
                    text="Cộng đồng Ổ Phim"
                    classSpan="sliderSpan"
                />
                <Slider 
                    className="containerSlider"
                    icon="fa-solid fa-database"
                    icon2="fa-sharp fa-solid fa-computer"
                    text="Dành cho nhà phát triển"
                    classSpan="sliderSpan"
                />
            </div>
            <div className="containerList"> 
                <ContianerList 
                    className="containerItem"
                    name="TÊN"
                    year="NĂM"
                    state="TÌNH TRẠNG"
                    dingdang="ĐỊNH DẠNG"
                    nation="QUỐC GIA"
                    times="NGÀY CẬP NHẬT"
                />
                <ContainerList1 />
                <ContainerList2 
                    className="containerList2"
                    className2="containerListItem2"
                />
            </div>
        </div>
    )
}

export default Container