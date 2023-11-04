import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

function CodeEditor({code,setCode}) {

    const onChange = (val) => {
        setCode(val)
    }

    return  (
        <CodeMirror value={code}
                className="code-mirror"
                autoSave="true"
                extensions={[javascript({ jsx: true })]} 
                onChange={onChange}
                theme={vscodeDark}
            />
    );
    
}
export default CodeEditor;