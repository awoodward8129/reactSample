// ./src/components/book/BookForm.js
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const style = {
  margin: 12,
};


const BookForm = (props) => {

  
    // Collector variables
    let titleInput, authorInput, priceInput, yearInput = null;
    return (
      <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            var input = {
              title: titleInput,
              author: authorInput,
              price: priceInput,
              year: yearInput
            };
            // Call method from parent component
            // to handle submission
            props.submitBook(input);
                props.state.open =false;
            // Reset form
            e.target.reset();
          }}
            className="form-horizontal"
      >
        <div className="input-group">
            <TextField
            floatingLabelText="Title"
            id="titleInput"
            hintText="The Lord of the Rings"
            onChange={(e, newValue) =>titleInput = newValue}
          />
        </div>
        <br/>
        <div className="input-group">

              <TextField
            floatingLabelText="Author"
            id="authorInput"
            hintText="Tolkien"
            onChange={(e, newValue) =>authorInput = newValue}
          />
      
        </div>
        <br/>
        <div className="input-group">

            <TextField type="number"
            floatingLabelText="Price"
            id="priceInput"
            hintText="123"
            onChange={(e, newValue) =>priceInput = newValue}
          />
        </div>
        <br/>
        <div className="input-group">
         
            <TextField 
            floatingLabelText="Year"
            id="yearInput"
            hintText="1960"
            onChange={(e, newValue) =>priceInput = newValue}
          />
        </div>
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <RaisedButton label="Submit"  type="submit" primary={true} style={style} />
  
          </div>
        </div>
      </form>
    );
};

export default BookForm;