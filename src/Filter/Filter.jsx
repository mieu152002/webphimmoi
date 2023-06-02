import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

function Filter() {
    const nations = useContext(ThemeContext)
    // console.log(nations.moviNation);
    return (
        <div className="fillter">
            <div className="fillterItem">
                Lọc Phim
            </div>
            <div className="fillterItems">
                <div className="fillterBox">
                    <select className="fillterCartegory" name="category" id="">
                        <option value="">Phim mới nhất</option>
                        <option value="">Thời gian cập nhật</option>
                        <option value="">Năm xản suất</option>
                    </select>
                </div>
                <div className="fillterBox">
                    <select className="fillterCartegory">
                        <option value="">Phim Bộ</option>
                        <option value="">Phim Lẻ</option>
                        <option value="">Phim Mới</option>
                        <option value="">TV Shows</option>
                        <option value="">Hoạt Hình</option>
                        <option value="">Phim VietSub</option>
                        <option value="">Phim Thuyết Minh</option>
                        <option value="">Phim Lồng Tiếng</option>
                        <option value="">Phim Sắp Chiếu</option>
                        <option value="">Phim Trọn Bộ</option>
                        <option value="">Phim Bộ Đang Chiếu</option>
                    </select>
                </div>
                <div className="fillterBox">
                    <select className="fillterCartegory" name="" id="">
                        <option className="fillterCartegoryItem" value="">Toàn Bộ Thể Loại</option>
                        {nations.listTypePhim.map((list) => (
                            <option key={list}>{list}</option> 
                        ))}
                    </select>
                </div>
                <div className="fillterBox">
                    <select className="fillterCartegory" name="" id="">
                        <option className="fillterCartegoryItem" value="">Toàn Bộ Quốc Gia</option>
                        {nations.moviNation.map(nation => (
                            <option key={nation}>{nation}</option>
                        ))}
                    </select>
                </div>
                <div className="fillterBox">
                    <select className="fillterCartegory" name="" id="">
                        <option value="">Toàn Bộ Năm</option>
                        <option value="">2023</option>
                        <option value="">2022</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                    </select>
                </div>
                <div className="fillterBox">
                    <button className="fillterCartegory fillterBoxSubmit">
                        <span className="fillterCartegorychild"></span>
                        Duyệt phim</button>
                </div>
            </div>
        </div>
    )
}

export default Filter