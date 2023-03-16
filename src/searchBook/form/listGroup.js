import React, { useState } from "react";
import Items from "./items";



function ListGroup() {

    const [lists, setLists] = useState( {list:['item 1', 'item 2', 'item 3', 'item 4']});
    function addItem(e) {
        e.preventDefault();
        const addInput = document.querySelector('.addInput');
        lists.list.push(addInput.value);
        setLists( { list:lists.list} )
        addInput.value = '';
    }
    function clickRemove(e) {
        if (e.target.classList.contains('delete')) {
            e.target.parentNode.remove();
        }
    }
    return (
        <div>
            <form id="addForm" onSubmit={addItem} className="form-inline mb-3">
                <input type="text" required className="form-control addInput mr-2" id="item"></input>
                <input type="submit"  className="btn btn-dark" value="Add"></input>
            </form>
            <h2 className="title">Items</h2>
            <ul id="items" onClick={clickRemove} className="list-group">
                {lists.list.map(item=> (<Items name={item}/>))}
            </ul>
        </div>
    )
}

export default ListGroup;



