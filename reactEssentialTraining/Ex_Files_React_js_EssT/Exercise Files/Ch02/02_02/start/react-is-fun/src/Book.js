import React from 'react'

export const Book = ({title='No titel given', author='No Author given', pages=0, freeBookmark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages}</p>
        <p>Free Bookmark Today: {freeBookmark ? 'Yes' : 'No'} </p>
      </section>
    )
    
  }