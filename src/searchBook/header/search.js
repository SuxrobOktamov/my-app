import React from "react";

function search(){
    function searchs(e) {
        const listItem = document.querySelectorAll('.list-group-item');
        let sear = e.target.value.toLowerCase();
        listItem.forEach((item)=>{
            let type = item.firstChild.textContent.toLowerCase();
            if(type.indexOf(sear) === 0){
                item.style.display = 'block'
            }else{
                item.style.display = 'none'
            }
        })
        
    }
    return(
        <div className="col-md-6 align-self-center">
            <input type="text" onChange={searchs} className="form-control" id="filter" placeholder="Search Item..."></input>
        </div>
    )
};

export default search;