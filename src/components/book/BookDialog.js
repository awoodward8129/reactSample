import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import BookForm from './BookForm';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
const customContentStyle = {
  width: '25%',
  maxWidth: 'none',
};
export default class BookDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add A New Book" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          contentStyle={customContentStyle}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
            <BookForm submitBook={this.props.submitBook.bind(this)} state={this.state}  />
        </Dialog>
      </div>
    );
  }
}