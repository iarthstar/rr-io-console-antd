import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const Editor = (props) => {
  const {
    code, setCode
  } = props;
  return (
    <MonacoEditor
      width="90%"
      height="600"
      language="json"
      theme="vs-light"
      value={code}
      onChange={setCode}
    />
  );
}

export default Editor;