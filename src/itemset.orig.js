import React from 'react';

const ItemSet = (({ id, title, content, imageUrl, link }) => {
  return (
  	<div className="item-set" id={ "setId" + (id || "") }>
      <h1>{ title || "No Title" }</h1>
      <div className="thumb"><a href={ link }><img src={ imageUrl || "no-picture.jpg" } alt={title} /></a></div>
      <p>{ content || "No content" }</p>
      { link ?
        <div><a href={ link }>More Information</a></div> : ""
      }
    </div>
  );
});

export {ItemSet};
