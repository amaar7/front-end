import React from "react";

const SearchForm = ({ handleSubmit, text, setText }) => {
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto" autoComplete="off">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a dog / breed"
        className="search-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
