/* eslint no-eval: 0 */
import {React, useState, useEffect} from 'react';
import CodeEditor from './CodeEditor';
import Console from './Console';

function CodeRunner({coderunner}) {
  const [code, setCode] = useState(coderunner)
  const [outputs, setOutputs] = useState([]);

  const captureConsoleLog = (message) => {
    if (typeof message === 'undefined'){
      message = "undefined";
    }
    setOutputs((prevOutput) => [...prevOutput,message]);
  }

  useEffect(() => {
    // Intercept and capture console.log messages
    const originalConsoleLog = console.log;
    console.log = captureConsoleLog;

    // Restore the original console.log when the component unmounts
    return () => {
      console.log = originalConsoleLog;
    }
  }, [code]);

  useEffect(() => {
    setOutputs([])
    try {
      // Use eval to execute the code
      eval(code)
    } catch (error) {
      setOutputs([error.toString()]);
    }
  }, [code]);

  const clearTerminal = () => {
    setOutputs([])
  }

  return (
    <div className="code-runner-row">
      <CodeEditor code={code} setCode={setCode} />
      <Console outputs={outputs} clearTerminal={clearTerminal} />
    </div>
  );
}

export default CodeRunner;
