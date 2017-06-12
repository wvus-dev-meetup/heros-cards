import React from 'react';

const Card = (({ id, title, content, imageUrl, link, handleEdit, handleDelete }) => {
  return (
  	<div className="item-set" id={ "setId" + (id || "") }>
      <h1>{ title || "No Title" }</h1>
      <div className="thumb"><a href={ link }><img src={ imageUrl || "no-picture.jpg" } alt={title} /></a></div>
      <p>{ content || "No content" }</p>
      { link ?
        <div><a href={ link }>More Information</a></div> : ""
      }
      <div>
        <button onClick={() => handleEdit(id)}>Edit</button> <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
});
export {Card};
