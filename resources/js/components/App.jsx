import React from "react";
import { Link } from "react-router-dom";
import Table from "./employeeList/Table";

const App = () => {
    return (
        <div>
            <h2>Employee List</h2>
            <Link to="/create" className="btn btn-success float-right">Create</Link>
            <Table />
        </div>
    );
};

export default App;
