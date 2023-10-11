import React from "react";
import Shelf from "./BookShelf";


const Shelves = () => {

    const currentlyReading =[];
    const wantToRead = [];
    const read = [];


    return(
        <div>
            <Shelf title="Currently Reading" books={currentlyReading}/>
            <Shelf title="Want to Read" books={wantToRead}/>
            <Shelf title="Read" books={read}/>
        </div>
    )
}

export default Shelves;