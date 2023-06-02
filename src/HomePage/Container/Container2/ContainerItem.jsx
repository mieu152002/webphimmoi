import { useContext } from "react"
import Filter from "../../../Filter/Filter"
import ContianerList from "../Container1/ContainerList"
import ContainerList1 from "../Container1/ContainerList1"
import ContainerList2 from "../Container1/ContainerList2"
import PageHere from "./PageHere"
import { ThemeContext } from "../../../ThemeContext"

function ContainerItem() {
    const title = useContext(ThemeContext)
    return (
    <div className="container">
        <PageHere />
        <h1 className="titleHere">{title.childHere.toUpperCase()}</h1>
        <Filter />
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

export default ContainerItem