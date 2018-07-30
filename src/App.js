import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BookAPI from './utils/BookAPI';
import Section from './Section';
import AddBook from './AddBook';
import Search from './Search';
import './App.css';

class App extends Component {
  state = {
    books : [],
  }
  componentDidMount() {
    BookAPI.getAll().then((books)=>{
    this.setState({books});
    console.log(this.state.books);
    })
  }
  handleChanges = (book,shelf) => {
    this.setState({
      books: this.state.books.map((preStateBook)=>{
            if(book.id===preStateBook.id)
              preStateBook.shelf = shelf;
            return preStateBook;
          })
      })
    BookAPI.update(book, shelf);
  }

  render() {
    return (
        <div>
          <Route exact path="/" render={()=>(
            <div>
              <Link to='/search'>Search</Link><br/>
              <Link to='/add'>Add</Link>
              <div className='section'>
                <h1>Currently Reading</h1><hr/>
                <Section 
                  handleChange = {this.handleChanges}
                  books={this.state.books.filter((book,index)=>book.shelf==='currentlyReading')}
                />
              </div>
              <div className='section'>
                <h1>Want to Read</h1><hr/>
                <Section 
                  handleChange = {this.handleChanges}
                  books={this.state.books.filter((book,index)=>book.shelf==='wantToRead')}
                />
              </div>
              <div className='section'>
                <h1>Read</h1><hr/>
                <Section 
                  handleChange = {this.handleChanges}
                  books={this.state.books.filter((book,index)=>book.shelf==='read')}
                />
              </div>
            </div>
          )}/>
          <Route path='/search' render={()=>(
            <Search books={this.state.books} handleChange={this.handleChanges}/>
          )}/>
          <Route path='/add' render={()=>(
            <AddBook/>
          )}/>
        </div>
    );
  }
}

export default App;
