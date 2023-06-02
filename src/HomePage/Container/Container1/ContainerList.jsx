function ContianerList({ className,name, year, state, nation, dingdang, times }) {
    return (
        <table className={className}>
            <tbody>
                <tr className="flex">
                    <th className="containerHeader containerHeaderItem">{name}</th>
                    <th className="containerHeader containerHeaderItem1">{year}</th>
                    <th className="containerHeader containerHeaderItem2">{state}</th>
                    <th className="containerHeader containerHeaderItem3">{dingdang}</th>
                    <th className="containerHeader containerHeaderItem4">{nation}</th>
                    <th className="containerHeader containerHeaderItem5">{times}</th>
                </tr>
            </tbody>
        </table>
    )
}

export default ContianerList