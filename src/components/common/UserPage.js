import React from 'react'
import * as userActions from '../../actions/userActions';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserPage extends React.Component {
 
  constructor(props) {
    super(props);

  }

  componentDidMount(){
      //this.props.fetchCurrentUser();
  }

  render(){
      let emailInput, passwordInput = null;
      return(
        <div>
            <form onSubmit={e => {
            e.preventDefault();
            // Assemble data into object
            var input = {
              email: emailInput,
              password: passwordInput,
            
            };
            // Call method from parent component
            // to handle submission
            this.props.signIn(input);
              
            // Reset form
            e.target.reset();
          }}
            className="form-horizontal"
      >
        <div className="input-group">
            <TextField
            floatingLabelText="Email"
            id="emailInput"
            hintText="abc@123.com"
            onChange={(e, newValue) =>emailInput = newValue}
          />
        </div>
        <br/>
        <div className="input-group">

              <TextField
            floatingLabelText="password"
            id="passwordInput"
            type="password"
            hintText="abc"
            onChange={(e, newValue) =>passwordInput = newValue}
          />
      
        </div>
       
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <RaisedButton label="Sign In"  type="submit" primary={true}  />
  
          </div>
        </div>
      </form>

      
            <RaisedButton label="Sign Out" onTouchTap={this.props.signOut} />
            <div >
                     {this.props.user.email}
            </div>
      
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
    fetchCurrentUser: dispatch(userActions.fetchCurrentUser()),
   // createUser:  dispatch(userActions.createUser()),
    signOut: user => dispatch(userActions.signOut()),
    signIn: user => dispatch(userActions.signIn(user))

    
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);