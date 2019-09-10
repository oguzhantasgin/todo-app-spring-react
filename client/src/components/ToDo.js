import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ToDoItem from "../components/todo/ToDoItem";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBackLog} from "../actions/toDoActions";

class ToDo extends Component {

    componentDidMount() {
        this.props.getBackLog(this.props.user.token, this.props.history);
    }
    render() {
        const {to_dos} = this.props.to_dos;
        let ListContent;
        let toDoItems = [];
        let inProgressItems = [];
        let doneItems = [];

        const ListAlgorithm = to_do => {
            if (to_do.length < 1) {
                return (<div className="alert alert-warning text-center" role="alert">
                    Empty list</div>)

            } else {
                const toDos = to_dos.map(to_do => (
                    <ToDoItem key={to_do.id} to_do={to_do}/>
                    ));
                for (let i = 0; i < toDos.length; i++) {

                    if (toDos[i].props.to_do.status === "TO_DO") {
                        toDoItems.push(toDos[i]);
                    }
                    if (toDos[i].props.to_do.status === "IN_PROGRESS") {
                        inProgressItems.push(toDos[i]);
                    }
                    if (toDos[i].props.to_do.status === "DONE") {
                        doneItems.push(toDos[i]);
                    }
                }

                return (
                    <React.Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-primary text-white">
                                            <h5>TO-DO</h5>
                                        </div>
                                    </div>
                                    {toDoItems}
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-warning text-white">
                                            <h5>In Progress</h5>
                                        </div>
                                    </div>
                                    {inProgressItems}
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-success text-white">
                                            <h5>Done</h5>
                                        </div>
                                    </div>
                                    {doneItems}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}};

        ListContent = ListAlgorithm(to_dos);

        return (
            <div className="container">
                <br/>
                <Link to="/addToDo" className=" btn btn-success ">
                    <i className="far fa-calendar-check"> Create a New TO-DO</i>
                </Link>
                <br/>
                <hr/>
                {ListContent}
            </div>
        );
    }
}

ToDo.propTypes = {
    getBackLog: PropTypes.func.isRequired,
    to_dos: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    to_dos: state.to_do,
    user: state.user
});

export default connect(mapStateToProps, {getBackLog})(ToDo);