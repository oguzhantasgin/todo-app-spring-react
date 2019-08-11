import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteToDo} from "../../actions/toDoActions";


class ToDoItem extends Component {


    onDeleteClick(td_id){

    this.props.deleteToDo(td_id,this.props.user.token,this.props.history);


    };
    render() {

        const {to_do} = this.props;
        return (
            <div className="card mb-1 bg-light ">
                <div className="card-header text-center ">To-Do {to_do.id}</div>
                <div className="card-body bg-light">
                    <h6 className="card-title text-dark" >{to_do.description}</h6>
                    <p className="card-text text-dark ">{to_do.acceptanceCriteria}</p>
                    <Link to = {`updateToDo/${to_do.id}`}  className="btn btn-primary">View / Update</Link>
                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, to_do.id)} >Delete</button>
                </div>
            </div>
        );
    }
}

ToDoItem.propTypes = {

  deleteToDo: PropTypes.func.isRequired

};

const mapStateToProps = state => ({

    user: state.user

});

export default  connect(mapStateToProps, {deleteToDo}) (ToDoItem);