import React from "react";
import "./navigationStyle.css";
import SearchBar from "./SearchBar";
function NavigationHeader() {
  return (
    <div className="container">
      <h4>Ebook Library</h4>
      <SearchBar />
      {/* Dark Mode */}
    </div>
  );
}

export default NavigationHeader;
