import React from "react";

export default function(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="image/add.png"
        alt="add"
        onClick={ props.onAdd }
      />
    </main>
  )
}