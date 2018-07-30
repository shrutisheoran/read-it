import React, { Component } from 'react';
import Book from './Book'; 

class CurrentlyReading extends Component  {
    render() {
        return(
            <div className='section-content'>
                {this.props.books.map((book)=><Book key={book.id} content={book} handleChange={this.props.handleChange}/>)}
            </div>
        )
    }
}

export default CurrentlyReading;