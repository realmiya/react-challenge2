import React, { Component } from "react";
import "./App.css";

import EmployeesList from "./components/EmployeesList.js";
const employees = [
    {
        name: "Parker Green",
    },
    {
        name: "Jordan Richards",
    },
    {
        name: "Alex Stevens",
    },
    {
        name: "Avery Scott",
    },
    {
        name: "Riley Miller",
    },
    {
        name: "Charlie Green",
    },
];

class App extends Component {
    render() {
        console.log(employees);
        return (
            <div className="App">
                <EmployeesList employees={employees} />
            </div>
        );
    }
}

export default App;
