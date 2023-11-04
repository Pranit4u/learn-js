import { React } from 'react';

const Console = ({ outputs, clearTerminal }) => {
    return (
        <div id="console">
            <div id="header" className={"pointer"}>
                <div id="header-title">
                    Console:
                </div>
                <div className="clear-terminal">
                    <svg onClick={clearTerminal} fill="#919191" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path>
                    </svg>
                </div>
            </div>
            <div id="output">
                {outputs.map((output, ind) => {
                    return (
                        <p key={ind}>{output}</p>
                    )
                })}
            </div>
        </div>
    )

}

export default Console