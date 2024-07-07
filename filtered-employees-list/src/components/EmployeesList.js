import { useState } from "react";
import React from "react";

const EmployeesList = ({ employees }) => {
    const [search, setSearch] = useState("");
    const handsearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <div>EmployeesList</div>

            <div className="controls">
                <input
                    type="text"
                    className="filter-input"
                    data-testid="filter-input"
                    onChange={handsearch}
                />
            </div>
            <ul ul className="employees-list">
                {employees.map((i, idx) => {
                    return (
                        <div>
                            {i.name.toLowerCase().includes(search) && (
                                <li key={idx} data-testid="employee">
                                    {i.name}
                                </li>
                            )}
                            {/* 注意此处的&&和return的写法，return后面一定假的是圆括号 */}
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};
export default EmployeesList;
