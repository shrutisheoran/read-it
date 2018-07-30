import React , { Component } from 'react';

class Book extends Component {
    state = {
        currentRead: this.props.content.shelf==='currentlyReading',
        wantRead: this.props.content.shelf==='wantToRead',
        Read: this.props.content.shelf==='read'
    }
    handleChange = (e)=> {
        const target = e.target;
        this.props.handleChange(this.props.content, target.value);
        this.setState({
            currentRead: this.props.content.shelf==='currentlyReading',
            wantRead: this.props.content.shelf==='wantToRead',
            Read: this.props.content.shelf==='read'
        });
    }
    render() {
        return(
            <div>
                <div className='book-box'>
                    <div className='book-cover'
                        style={{
                            backgroundImage: `url(${this.props.content.imageLinks.smallThumbnail})`
                        }}
                    >
                    <i className = 'options'></i>
                    </div>
                    <div className='book-info'>
                        <p><b>{this.props.content.title}</b></p>
                        {this.props.content.authors.map((author, index)=>(<i key={index}>{author}<br/></i>))}
                    </div>
                    <div className='book-shelf'><hr/></div>
                </div>
                <div className='book-category'>
                    <input 
                    type='radio' 
                    value='currentlyReading'
                    id = 'category'
                    checked = {this.state.currentRead}
                    onChange = {this.handleChange}
                    /> CurrentlyReading<br/><hr/>
                    <input 
                    type='radio' 
                    value='wantToRead'
                    id = 'category'
                    checked = {this.state.wantRead}
                    onChange = {this.handleChange}
                    /> WantToRead<br/><hr/>
                    <input 
                    type='radio' 
                    value='read'
                    id = 'category'
                    checked = {this.state.Read}
                    onChange = {this.handleChange}
                    /> Read<br/><hr/>
                </div>
            </div>
        )
    }
}
export default Book;