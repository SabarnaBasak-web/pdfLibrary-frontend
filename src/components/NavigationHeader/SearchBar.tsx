import "./navigationStyle.css";
import { useState } from "react";

const SearchBar = () => {
  const [inputSearchText, setInputSearchText] = useState("");

  return (
    <form>
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search by name / author "
        value={inputSearchText}
        className="form-input"
        onChange={(e) => setInputSearchText(e.target.value)}
      />
      <button className="form-button">Search</button>
    </form>
  );
};

export default SearchBar;
