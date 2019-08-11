import React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {logoutUser} from "../actions/userActions";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {

        this.props.logoutUser()
    }

    render() {
        let {isAuthenticated} = this.props.user;
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">ToDo Application</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {isAuthenticated ? (
                            <ul className="navbar-nav ml-auto">
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

export default connect(mapStateToProps, {logoutUser})(NavBar);