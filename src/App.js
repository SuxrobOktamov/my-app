
import React, { useState } from 'react';
import './App.css'


function App() {
    const [state, setState] = useState({count: 0});

    function MouseDown(e) {e.target.style.transform = 'translateY(5px)'}
    function MouseUp(e) {e.target.style.transform = 'translateY(0px)'}

    function minus() {setState({count: state.count - 1})}
    function plus() {setState({count: state.count + 1})}
    function reset() {setState({count: 0})}

    return(
        <div className='container'>
            <div className='number'>
                <span>{state.count}</span>
            </div>
            <div className='reset'>
                <span onClick={plus} onMouseDown={MouseDown} onMouseUp={MouseUp}>+</span>
                <span onClick={minus} onMouseDown={MouseDown} onMouseUp={MouseUp}>-</span>
                <span onClick={reset} onMouseDown={MouseDown} onMouseUp={MouseUp}>Reset</span>
            </div>
        </div>
    )
}

export default App;