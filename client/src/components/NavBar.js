import React from "react";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">ToDo Application</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sign-up">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/todo">My ToDoS</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}
