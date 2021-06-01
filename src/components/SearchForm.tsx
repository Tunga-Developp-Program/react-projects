import React from "react";
import logo from "../assets/images/logo.svg";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const SearchForm = (props: any) => {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    props.setSearchUrl(SEARCHAPI + search);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <header>
      <img src={logo} />
      <form id="form" onSubmit={handleSearch}>
        <input
          type="text"
          id="search"
          onChange={handleChange}
          placeholder="Search"
          className="search"
        />
      </form>
    </header>
  );
};

export default SearchForm;
