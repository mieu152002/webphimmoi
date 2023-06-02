import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";

function ContainerList1() {
  const apis = useContext(ThemeContext);
  return (
      <table className="containerItem">
      <tbody>
        {apis.apis.map((api) => {
          return (
            <tr key={api._id} className="flex">
              <td className="containerHeader containerHeaderItem containerForm ">
                <div className="containerCategari">
                  <img
                    className="containerHeaderImg"
                    src={api.img}
                    alt={api.name}
                  />
                  <div className="containerName">
                    <h2><a href="">{api.name}</a></h2>
                    <h3><a href="">({api.origin_name})</a></h3>
                  </div>
                </div>
              </td>
              <td className="containerHeader containerHeaderItem1">
                <h3>{api.year}</h3>
              </td>
              <td className="containerHeader containerHeaderItem2">
                <span>{api.state}</span>
              </td>
              <td className="containerHeader containerHeaderItem3 ">
                <span>{api.type}</span>
              </td>
              <td className="containerHeader containerHeaderItem4">
                <span>{api.nation}</span>
              </td>
              <td className="containerHeader containerHeaderItem5">
                <span>{api.modified.time}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ContainerList1;
