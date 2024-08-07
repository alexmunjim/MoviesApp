import React from "react";

export default function NavigationButton({children, handleClick}) {
    let pageId;
    if (children === 'Popular movies'){
        pageId = 1;
        console.log("Page 1")
    } if (children === 'Search by name') {
        pageId = 2;
        console.log("Page 2")
    }
    return(<>
        <button className="btn btn-link" onClick={() => handleClick(pageId)}>{children}</button>
    </>);
}