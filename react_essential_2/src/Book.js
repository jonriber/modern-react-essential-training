import React from 'react';

//passing to Book component some props and state(freeBookmark) -> component function
export const Book = ({title='No title provided',author='No title provided',pages=0,freeBookmark}) => {
    return (
      <section>
        <h1>Title: {title}</h1>
        <h3>Author: {author}</h3>
        <p>pages: {pages}</p>
        <p>Free Bookmark today: {freeBookmark ? 'yes' : 'no'}</p>
      </section>
    )
  }

