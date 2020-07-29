import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let books =  [
  
  {"title": "Silmarilion", "author": "JRR Tolkien", "pages": 534},
  {"title": "Peace Talks", "author": "Jim Butcher", "pages": 223},
  {"title": "Levathain Awakes", "author": "James SA Corey", "pages": 455},
  {"title": "Les Miserables", "author": "Victor Hugo", "pages": 800},
]

const Hiring = () => 
  <div>
    <p>We are hiring! Go to www.jobsforyou.com</p>
  </div>

const NotHiring = () => <div><p>We are not hiring at the moment</p></div>

//Can set default values for things objects which do not have values given.
// Good idea to do so just so you can see the UI work as intended, without having to worry about the data. 
const Book = ({title='No titel given', author='No Author given', pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
      <p>Free Bookmark Today: {freeBookmark ? 'Yes' : 'No'} </p>
    </section>
  )
  
}

class Library extends React.Component {
static defaultProps = {
    books: [
      {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
    ]
}

  state = { 
    open: true,
    freeBookmark: true,
    hiring: false,
    loading: false,
    data: []
    
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data=> data.json())
      .then(data=> this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("Compenent Updates")
  }

  // State should always be on the root element. 
  // State can be "Source of truth"
  toggleOpen = () => {
    this.setState(prevState =>({
      open: !prevState.open
    }))

  }

  render() {
    console.log(this.state)
    const { books } = this.props  

    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading 
          ? "Loading.." 
          : <div>
              {this.state.data.map(product => {
                return(
                  <div key={product.id}>
                    <h2>Product of the Week!</h2>
                    <h4>{product.name}</h4>
                    <img src={product.image} alt={product.image_title} height={100}></img>
                  </div>
                )
              })}
            </div>
            }
        <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpen}>Open The Library</button>
        {books.map(
          (book, i) => <Book 
                    key={i}
                    title={book.title} 
                    author={book.author} 
                    pages={book.pages}
                    freeBookmark={this.state.freeBookmark} />
        )}
        
      </div>
  
    )
  }
}
  

  


// JSX component based structure. 
// Nesting of components


// Data that is not a string must be passed via the JSX expression inside of curly braces

//PropTypes allows for changing the type of data.

Library.propTypes = {
  books: PropTypes.array
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool

}




ReactDOM.render(
<Library books={books}/>,
  document.getElementById('root')
)