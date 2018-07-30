import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Section from './Section';

class Search extends Component {
    state = {
        query: ""
    }
    queryUpdate = (e)=> {
       this.setState({query: e.target.value.trim()})
    }
    render() {
        let searchedBooks;
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            searchedBooks = this.props.books.filter((book)=>match.test(book.title));
        } else {
            searchedBooks = this.props.books;
        }
        searchedBooks.sort(sortBy('title'));

        return(
            <div className='search-page'>
                <div className='search-box'>
                    <label>Search
                        <input type='text' value={this.state.query} onChange={this.queryUpdate}/>
                    </label>
                    <div className='search-icon'></div>
                </div>
                <Section 
                  handleChange = {this.props.handleChange}
                  books={searchedBooks}
                />
            </div>
        )
    }
}
export default Search;