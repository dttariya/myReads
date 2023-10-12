import React, { useState, useEffect } from 'react'
import * as BooksAPI from '../BooksAPI'




export default function searchBook(query) {

    const [searchBooks, setSearchBooks] = useState([]);
   

    useEffect(() => {

        let isActive = true;
        if (query) {
            BooksAPI.search(query).then(data => {
                if (data.error) {
                    setSearchBooks([])
                } else {
                    if (isActive) {
                        setSearchBooks(data);
                    }
                }
            })
        }

        return () => {
            isActive = false;
            setSearchBooks([])
        }

    }, [query])


    return [searchBooks, setSearchBooks];

}