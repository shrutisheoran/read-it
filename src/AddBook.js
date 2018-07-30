import React, {Component } from 'react';
// import serializeForm from 'form-serialize'

class AddBook extends Component {
    handleChange = (e)=> {
        // const value = e.target.value;
    }
    getValues = (e)=> {
        e.preventDefault();
        console.log("g called");
        // const values = serializeForm(e.target, { hash:true } );
        this.props.addContact();
    }
    render() {
        return(
            <div className='add-book'>
                <form onSubmit={this.getValues}>
                    <label>Title:&ensp;&ensp;
                        <input name='title' 
                        type='text' 
                        onChange={this.handleChange}
                        required
                        />
                    </label>
                    <br/><br/>
                    <label>Subtitle: &ensp;&ensp;
                        <input name='subtitle' 
                        type='text' 
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/><br/>
                    <label>Authors: &ensp;&ensp;
                        <input name='authors' 
                        type='text' 
                        onChange={this.handleChange}
                        placeholder='More than one, separate by comma'
                        required
                        />
                    </label>
                    <br/><br/>
                    <label>Canonical Volume Link: &ensp;&ensp;
                        <input name='canonicalVolumeLink' 
                        type='text' 
                        onChange={this.handleChange}
                        />
                    </label>
                    <br/><br/>
                    <label>Info Link: &ensp;&ensp;
                        <input name='infoLink' 
                        type='text' 
                        onChange={this.handleChange}
                        required
                        />
                    </label>
                    <br/><br/>
                    <label>Categories: &ensp;&ensp;
                        <input name='categories' 
                        type='text'
                        onChange={this.handleChange}
                        placeholder='More than one, separate by comma'
                        required
                        />
                    </label>
                    <br/><br/>
                    <label>Shelf: &ensp;&ensp;
                        <select name='shelf' 
                        onChange={this.handleChange}
                        >
                            <option value='none' default>None</option>
                            <option value='currentlyReading'>CurrentlyReading</option>
                            <option value='wantToRead'>Want To Read</option>
                            <option value='read'>Read</option>
                        </select>
                    </label>
                    <br/><br/>
                    <label>Ratings: &ensp;&ensp;
                        <input name='ratings' 
                        type='text'
                        onChange={this.handleChange}
                        />
                    </label><br/><br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}
export default AddBook;