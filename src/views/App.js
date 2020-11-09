import React from "react";
import style from "./App.scss";
import BookSearch from "../components/BookSearch/BookSearch.component"
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
