import React from "react";
import Form from "./form/form";
import Header from "./header/header";

import './searchBook.css';

function SearchBook() {
    return (
        <div>
            <header id="main-header" className="bg-success text-white p-4 mb-3">
                <Header />
            </header>
            <div className="container">
                <Form />
            </div>
        </div>
    )
}

export default SearchBook;