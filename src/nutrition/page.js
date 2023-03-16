import React from "react";


function Page() {
    return(
        <div className="page">
          <div className="page-div">
            <p>Rows per page:</p>
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <p> <span id="rate">1</span> - <span id="rate1">5</span> of 13</p>
            <span id="left" className="material-symbols-outlined" >chevron_left</span>
            <span id="right" className="material-symbols-outlined" >chevron_right</span>
          </div>
        </div>
    )
}

export default Page;