import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../../ThemeContext"

function PageHere() {
    const childHere = useContext(ThemeContext)
    return (
        <div className="pageHere">
            <div className="pageHereItems ">
                <Link className="pageHereHome" to="/"><i className="fa-solid fa-house"></i></Link>
            </div>
            <div className="pageHereItems ">
                <Link className="pageHereLink" to="/">Trang Chủ</Link>
            </div>
            <span className="pageHereRight"><i className="fa-solid fa-angle-right"></i></span>
            <div className="pageHereItems ">
                <Link className="pageHereLink" to="/item">
                    {childHere.childHere}
                </Link>
            </div>
            <span className="pageHereRight"><i className="fa-solid fa-angle-right"></i></span>
            <div className="pageHereItems  pageHereItem">
                <span>
                    Trang 1
                </span>
            </div>
            
        </div>
    )
}

export default PageHere