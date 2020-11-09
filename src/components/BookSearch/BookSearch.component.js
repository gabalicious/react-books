import React, { useState } from "react";
import BookTable from "../BookTable/BookTable.component"
import style from "./BookSearch.scss";
import { Button, TextField } from '@material-ui/core';
import { fetchBooks } from '../../api'

const BookSearch = () => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem("searchParams")) || "");
  const [results, setResults] = useState(JSON.parse(localStorage.getItem("results")) || [])
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const handleChange = (e) => {
    setValue(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchBooks(value)
      .then((response) => {
        setResults(response.data.items)
        setPage(1)
        setTotalItems(response.data.totalItems)
      })
  }

  return (
    <>
      <form className={style.BookSearch} onSubmit={handleSubmit}>
        <div className={style.BookSearch__group}>
          <label htmlFor="Search Input">
            <TextField label="Search Input" variant="outlined" value={value} onChange={handleChange} />
          </label>
          <label htmlFor="Search Button">
            <Button label="Search Button" variant="contained" color="primary" type="submit">Search</Button>
          </label>
        </div>
      </form>
      <BookTable currentPage={page} totalItems={totalItems} setPage={setPage} results={results} />
    </>);
};

export default BookSearch;
