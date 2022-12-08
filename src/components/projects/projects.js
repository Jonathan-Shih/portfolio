import React, { useState } from "react";

const Work = () => {
    const [active, setActive] = useState("programming");
    return(
        <div className="work-wrapper d-flex flex-column align-items-start">
            <h3 className="sub-text section-header"> Projects </h3>
            <div className="d-flex select">
                <li className={`${active === "programming"? "list-item-active": "list-item"}`}
                type="button"
                onClick={()=>setActive("programming")}>
                    <h4>Programming</h4>
                </li>
                <li className={`${active === "design"? "list-item-active": "list-item"}`}
                type="button"
                onClick={()=>setActive("design")}>
                    <h4>Design</h4>
                </li>
            </div>
        </div>
    )
}

export default Work;