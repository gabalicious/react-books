import React from "react";
import style from "./App.scss";
import BookSearch from "../components/BookSearch/BookSearch.component"
import BookTable from "../components/BookTable/BookTable.component"
console.log(style)
const App = () => {
  return (
    <div className={style.App}>
      <header>
        <h1>Welcome to Google Books API Search</h1>
      </header>
      <main>
        <BookSearch></BookSearch>
      </main>
    </div>
  );
};

export default App;
