import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';
let id = null;
class BookUpdateForm extends Component {
    constructor(props) {
        super(props);
        id = props.id;
    }

    componentDidMount() {
      const initData = {
 
        "title": this.props.book.title,
        "price": this.props.book.price,
        "year": this.props.book.year,
        }
      this.props.initialize(initData);
    }

    handleFormSubmit(formProps) {
        var input = {
              title: formProps.title,
              price: formProps.price,
              year: formProps.year
            };
     this.props.updateBook(input, this.props.id);
    }

    render(){
    const { handleSubmit } = this.props;
    return (
    <form  onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <Field name="title" type="text" component={renderField} label="Title"/>
      <Field name="price" type="number" component={renderField} label="Price"/>
      <Field name="year" type="text" component={renderField} label="Year"/>
      <button action="submit">Save changes</button>
    </form>
    );
  }
}

const renderField = field => (
    <div>
      <label>{field.label}</label>
      <input {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);


function mapStateToProps(state) {
  return {
    book: state.book
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    updateBook: book => dispatch(bookActions.updateBook(book,id))
  }
};
   

const form = reduxForm({
  form: 'BookUpdateForm'
});
export default connect(mapStateToProps, mapDispatchToProps)(form(BookUpdateForm));
