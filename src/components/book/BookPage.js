// ./src/components/common/AboutPage.js
import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { Link } from 'react-router-dom';
import * as bookActions from '../../actions/bookActions';
import BookDetailsPage from './BookDetailsPage';
import { Tabs, Tab } from 'material-ui/Tabs';
import BookDialog from './BookDialog'
import FlatButton from 'material-ui/FlatButton';
import { Col, Row, Grid } from 'react-bootstrap'
let value = null;
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class Book extends React.Component {

  constructor(props) {
    super(props);

  }

  handleChange = (value) => {
    value = value;
  }

  submitBook(input) {
    this.props.createBook(input);
  }
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Books" value="books">
          <Grid>
            <Row className="show-grid">
              <Col md={3}>
              </Col>
              <Col md={6}>
                <Table className="table" showCheckboxes={this.state.showCheckboxes}>
                  <TableHeader displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}>
                    <TableRow>
                      <TableHeaderColumn>Title</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                    {Object.keys(this.props.books).map((b, i) =>
                      <TableRow key={i}>
                        <TableRowColumn>{this.props.books[b].title}</TableRowColumn>
                        <TableRowColumn><Link key={b} to={`/books/${b}`} ><FlatButton>View</FlatButton></Link></TableRowColumn>
                        <TableRowColumn><FlatButton  >Delete</FlatButton></TableRowColumn>

                      </TableRow>)}
                  </TableBody>
                </Table>
              </Col>
              <Col md={3}>
                <div className="button">
                  <BookDialog submitBook={this.submitBook.bind(this)} />
                </div>
              </Col>
            </Row>
          </Grid>
        </Tab>
        <Tab label="Add a New Book" value="newBook">
          <BookDialog submitBook={this.submitBook.bind(this)} />
        </Tab>
      </Tabs>

    );
  }
};
// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books,

  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book)),


  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);