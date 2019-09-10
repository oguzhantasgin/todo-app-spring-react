import React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {logoutUser,getCurrentUser} from "../actions/userActions";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.getUserName = this.getUserName.bind(this);
    }
    handleLogout() {
        this.props.logoutUser()
    }
    getUserName(){
        this.props.getCurrentUser(this.props.user.token);
    }

    render() {
        let {isAuthenticated} = this.props.user;

        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">ToDo Application</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {isAuthenticated ? (
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Welcome {this.getUserName()}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/todo">My ToDoS</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.handleLogout}>Logout</a>
                                </li>
                            </ul>) : (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sign-in">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sign-up">Register</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        );
    }

}


const mapStateToProps = state => ({
    user: state.user,

});

export default connect(mapStateToProps, {logoutUser,getCurrentUser})(NavBar);