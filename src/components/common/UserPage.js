import React from 'react'
import * as userActions from '../../actions/userActions';
import { connect } from 'react-redux';
class UserPage extends React.Component {
 
  constructor(props) {
    super(props);

  }

  componentDidMount(){
      this.props.fetchCurrentUser();
  }

  render(){
      return(
        <div>
           {this.props.user.email}
         </div>
      )
  }


}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.user
    user: state.user,
    
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    fetchCurrentUser: user => dispatch(userActions.fetchCurrentUser()),

    
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);