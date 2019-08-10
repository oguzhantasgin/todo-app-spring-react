import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getToDo, addToDo} from "../../actions/toDoActions";
import classnames from "classnames";

class UpdateToDo extends Component {


    constructor() {

        super();

        this.state = {

            id: ",",
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

        const {id, description, acceptanceCriteria, status} = nextProps.to_do;

        this.setState({
            id,
            description,
            acceptanceCriteria,
            status
        });
    }

    componentDidMount() {

        const {td_id} = this.props.match.params;
        this.props.getToDo(td_id);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {

        e.preventDefault();
        const updatedToDo = {
            id: this.state.id,
            description: this.state.description,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        };

        this.props.addToDo(updatedToDo, this.props.history);
    }

    render() {
       const {errors} = this.state;
        return (

            <div className="addProjectTask">

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <a href="/" className="btn btn-light">
                                Back to List
                            </a>
                            <hr/>
                            <h3 className="display-5 text-center text-black-50">Update TO-DO</h3>
                            <br/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {


                                            "is-invalid":errors.description
                                        })}
                                        name="description"
                                        placeholder="Description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                    {errors.description && (
                                        <div className="invalid-feedback">{errors.description}</div>
                                    )}
                                </div>

                                <div className="form-group">
                        <textarea
                            className="form-control form-control-lg"
                            placeholder="Acceptance Criteria"
                            name="acceptanceCriteria"
                            value={this.state.acceptanceCriteria}
                            onChange={this.onChange}
                        >

                        </textarea>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
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


UpdateToDo.propTypes = {
    to_do: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getToDo: PropTypes.func.isRequired,
    addToDo: PropTypes.func.isRequired
};

const mapStateProps = state => ({

    to_do: state.to_do.to_do,
    errors: state.errors

});

export default connect(mapStateProps, {getToDo, addToDo})(UpdateToDo);