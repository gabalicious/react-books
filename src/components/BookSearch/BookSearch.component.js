import React, { useState } from "react";
import BookTable from "../BookTable/BookTable.component"
import style from "./BookSearch.scss";
import axios from "axios"
import { Button, TextField } from '@material-ui/core';


const BookSearch = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const handleChange = (e) => {
    setValue(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=${page - 1}&maxResults=10`)
      .then((response) => {
        console.log(response.data)
        setResults(response.data.items)
        setPage(1)

        setTotalItems(response.data.totalItems)
      })
  }

  return (
    <>
      <form className={style.BookSearch} onSubmit={handleSubmit}>
        <div className={style.BookSearch__group}>
          <TextField label="Search..." variant="outlined" value={value} onChange={handleChange} />
          <Button variant="contained" color="primary" type="submit">Search</Button>
        </div>
      </form>
      <BookTable currentPage={page} totalItems={totalItems} setPage={setPage} results={results} />
    </>);
};

export default BookSearch;
