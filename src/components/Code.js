import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const Code = ({code}) => {
  return (
    <CodeMirror value={code}
                autoSave="true"
                className="code-area"
                extensions={[javascript({ jsx: true })]} 
                theme={vscodeDark}
                readOnly="true"
            />
  )
}

export default Code