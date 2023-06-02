import { memo } from "react";

function HeaderBlock({ className, classItem, nation, listTypePhim }) {
  return (
    <div className={className}>
      <div className={classItem}>
        {nation &&
          nation.map((item, index) => {
            return (
              <button className="headerShowItems" key={index}>
                <a>{item}</a>
              </button>
            );
          })}
        {listTypePhim &&
          listTypePhim.map((item, index) => {
            return (
              <button className="headerShowItems" key={index}>
                <a>{item}</a>
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default memo(HeaderBlock);
