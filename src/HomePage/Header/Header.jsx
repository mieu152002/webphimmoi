import { memo, useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../ThemeContext"
import Search from "../../Button/ButtonSearch"
import HeaderBlock from "./HeaderBlock"

function Header() {
    const themeHeader = useContext(ThemeContext)
    const addClass = themeHeader.addClassHeader
    return (
        <header className="header">
            <div className="headerLeft">
                <Link className="logo" to="/">
                    <img src={require("../../abum/logo55.png")} alt="logo"></img>
                </Link>
                <Search
                    className = "headerSearch"
                    placeholder = "Tìm kiếm phim..."
                />
            </div>
            <div className="headerNav">
                <ul className="category">
                    <li className="categoryitem">
                    <Link className="categoryitemLink" to="/item" ref={themeHeader.childRef} onClick={themeHeader.hanldeChildren}>
                            Phim Bộ
                        </Link>
                    </li>
                    <li className="categoryitem">
                        <Link className="categoryitemLink" to="/item" ref={themeHeader.childRef2} onClick={themeHeader.hanldeChildren2}>
                            Phim Lẻ
                        </Link>
                    </li>
                    <li className="categoryitem">
                        <Link className="categoryitemLink" to="">
                            Shows
                        </Link>
                    </li>
                    <li className="categoryitem">
                        <Link className="categoryitemLink" to="">
                            Hoạt Hình
                        </Link>
                    </li>
                    <li ref={themeHeader.myRef} className="HeaderItem categoryitem" onClick={themeHeader.handleHeaderClick}>
                        Thể Loại
                       <i className="fa-solid fa-chevron-up fa-rotate-180 categoryIcon"></i>

                       {
                        themeHeader.hide 
                        && 
                        <HeaderBlock 
                            className="headerShow block active"
                            classItem="headerShowBlock"
                            listTypePhim={themeHeader.listTypePhim}
                       />}
                    </li>
                    <li className="HeaderItem categoryitem" onClick={themeHeader.handleHeaderClick1}><a>
                        Quốc Gia
                        </a>
                        <i className="fa-solid fa-chevron-up fa-rotate-180 categoryIcon"></i>

                        {
                        themeHeader.hide1 
                        && 
                        <HeaderBlock 
                            className="headerShow block active"
                            classItem="headerShowBlock"
                            nation = {themeHeader.moviNation}                            
                       />}
                    </li>
                    <li className="categoryitem"><a>
                        Sắp Chiếu
                        </a></li>
                    <li className="categoryItems categoryitem"><a>
                        Subteam
                        </a></li>
                </ul>
                <div className="headerLight">
                    <i className="fa-solid fa-moon"></i>
                </div>
            </div>
            
        </header>
    )
}

export default memo(Header)