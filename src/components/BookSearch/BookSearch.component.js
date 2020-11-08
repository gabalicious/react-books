import React, { useState } from "react";
import BookTable from "../BookTable/BookTable.component"
import style from "./BookSearch.scss";
import axios from "axios"
import { ButtonGroup, Button, TextField } from '@material-ui/core';

const BookSearch = () => {
  const [value, setValue] = useState("");
  const [api, setApi] = useState("");
  const [results, setResults] = useState([])
  const [page, setPage] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value)
    setApi(`https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=${page}&maxResults=20`)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(api)
      .then((response) => {
        console.log(response.data)
        setResults(response.data.items)
      })
  }

  return (
    <>
      <form className={style.BookSearch} onSubmit={handleSubmit}>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">

          <TextField value={value} onChange={handleChange} />
          <Button variant="contained" color="primary" type="submit">Search</Button>
        </ButtonGroup>

      </form>
      <BookTable results={results} />
    </>);
};

export default BookSearch;
