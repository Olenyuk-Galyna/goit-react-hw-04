import React from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.search.value;
    if (!value) {
      toast.error("Поле немає бути порожнє!");
      return;
    }
    onSubmit(value);
  };

  return (
    <div>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
