import PropTypes from 'prop-types'
import React from 'react'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

export class Library extends React.Component {
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

    Library.propTypes = {
        books: PropTypes.array
      }
      
      Book.propTypes = {
        title: PropTypes.string,
        author: PropTypes.string,
        pages: PropTypes.number,
        freeBookmark: PropTypes.bool
      
      }
      