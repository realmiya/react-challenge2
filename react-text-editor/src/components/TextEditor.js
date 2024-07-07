import React, { useState } from "react";

const TextEditor = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    const handinput = (e) => {
        const input = e.target.value.trim();
        setInput(input);
    };

    const handappend = () => {
        setOutput([...output, input]);
        setInput(""); // Clear the input field after appending
    };

    const handundo = () => {
        setOutput(output.slice(0, -1)); // create a new array that includes all elements of the output array except the last one
    };

    return (
        <React.Fragment>
            <div className="controls">
                <input
                    className="word-input"
                    type="text"
                    data-testid="word-input"
                    onChange={handinput}
                    value={input}
                />

                <button data-testid="append-button" onClick={handappend}>
                    Append
                </button>
                <button data-testid="undo-button" onClick={handundo}>
                    Undo
                </button>
            </div>

            <div className="text-field" data-testid="text-field">
                {output.join(" ")}
            </div>
        </React.Fragment>
    );
};

export default TextEditor;
