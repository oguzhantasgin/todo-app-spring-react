import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../../actions/userActions";
import classnames from "classnames";


class RegisterUser extends Component {

    constructor() {

        super();

        this.state = {

            username: "",
            password: "",
            errors: {}

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.errors) {

            this.setState({errors: nextProps.errors});


        }
    }

    onChange(e) {


        this.setState({[e.target.name]: e.target.value});
    }


    onSubmit(e) {


        e.preventDefault();

        const newApplicationUser = {

            username: this.state.username,
            password: this.state.password,


        };


        this.props.registerUser(newApplicationUser, this.props.history)

    }

    render() {

        const {errors} = this.state;
        return (

            <div className="registerUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <hr/>
                            <h3 className="display-5 text-center text-primary">Welcome the register page!</h3>
                            <br/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-sg", {
                                            "is-invalid": errors.username
                                        })}
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.username && (
                                            <div className="invalid-feedback">
                                                {errors.username}
                                            </div>
                                        )
                                    }

                                </div>
                                <div className="form-group">
                                     <input
                                         type = "password"
                                         className={classnames("form-control form-control-sg", {
                                             "is-invalid": errors.password
                                         })}
                                         placeholder="Password"
                                         name="password"
                                         value={this.state.password}
                                         onChange={this.onChange}
                                     />

                                    {
                                        errors.password && (
                                            <div className="invalid-feedback">
                                                {errors.password}
                                            </div>
                                        )
                                    }
                                </div>

                                <input type="submit" value = "Register" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

RegisterUser.propTypes = {

    RegisterUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

};


const mapStateToProps = state => ({


    errors: state.errors

});

export default connect(
    mapStateToProps,
    {registerUser}
)(RegisterUser);

