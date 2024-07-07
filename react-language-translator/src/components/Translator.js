import React, { useEffect, useState } from "react";

export default function Translator({ translations }) {
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const handleChange = (e) => {
        const userInput = e.target.value;
        setText(userInput);
    };

useEffect(()=>{        
  if(translations.get(text)){
  setText2(translations.get(text))
}else{
  setText2('')
}},[text]) //注意useeffect后面跟着括号

    return (
        <div>
            <div className="controls">
                <div className="input-container">
                    <span>input:</span>
                    <input
                        type="text"
                        className="text-input"
                        data-testid="text-input"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <span>output:</span>
                        <input
                            type="text"
                            className="text-output"
                            data-testid="text-output"
                            readOnly //!!!!!!!
                            value={text2}
                        />
                </div>
            </div>
        </div>
    );
}
