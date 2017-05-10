import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';



class BookUpdateForm extends Component {

    

  render() {
    const { handleSubmit, book } = this.props;
 
    
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Title</label>
          <input type="text"  />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number"  />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}



export default reduxForm({
  form: 'initializing',

},

    // mapDispatchToProps (will bind action creator to dispatch)
)(BookUpdateForm)
