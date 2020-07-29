import React from 'react'
import ReactDOM from 'react-dom'


let books =  [
  
  {"title": "Silmarilion", "author": "JRR Tolkien", "pages": 534},
  {"title": "Peace Talks", "author": "Jim Butcher", "pages": 223},
  {"title": "Levathain Awakes", "author": "James SA Corey", "pages": 455},
  {"title": "Les Miserables", "author": "Victor Hugo", "pages": 800},
]

//Can set default values for things objects which do not have values given.
// Good idea to do so just so you can see the UI work as intended, without having to worry about the data. 

// JSX component based structure. 
// Nesting of components


// Data that is not a string must be passed via the JSX expression inside of curly braces

//PropTypes allows for changing the type of data.

ReactDOM.render(
<Library books={books}/>,
  document.getElementById('root')
)