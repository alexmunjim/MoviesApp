import React from "react";
import NavigationButton from "./NavigationButton.jsx";

export default function Header({handleClick}){
    return (<>
    <div className="container">
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><NavigationButton handleClick={handleClick}>Popular movies</NavigationButton></li>
        <li className="nav-item"><NavigationButton handleClick={handleClick}>Search by name</NavigationButton></li>
      </ul>
    </header>
  </div>
    </>)
}