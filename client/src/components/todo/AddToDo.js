import React, {Component} from 'react';

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addToDo} from "../../actions/toDoActions";
import classnames from "classnames";

class AddToDo extends Component {

    constructor() {

        super();

        this.state = {

            description: "",
            acceptanceCriteria: "",
            status: "",
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

        const newToDo = {
            description: this.state.description,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
        };

        this.props.addToDo(newToDo, this.props.user.token, this.props.history)
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="addToDo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <h3 className="display-5 text-center text-black-50">Add new TO-DO</h3>
                            <br/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {

                                            "is-invalid": errors.description


                                        })}
                                        name="description"
                                        placeholder="Description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.description &&(

                                            <div className="invalid-feedback">

                                                {errors.description}

                                            </div>
                                        )
                                    }

                                </div>
                                <div className="form-group">
                                     <textarea
                                         className="form-control form-control-lg"
                                         placeholder="Acceptance Criteria"
                                         name="acceptanceCriteria"
                                         value={this.state.acceptanceCriteria}
                                         onChange={this.onChange}
                                     />
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO-DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddToDo.propTypes = {

    AddToDo: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user,

});

export default connect(
    mapStateToProps,
    {addToDo}
)(AddToDo);