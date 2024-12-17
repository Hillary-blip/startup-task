import MonacoEditor from "@monaco-editor/react";
import React, { FC } from "react";

interface CodeEditorProps {
    code: string;
    language: string;
    onCodeChange: (code: string) => void;
}

const CodeEditor: FC<CodeEditorProps> = ({ code, language, onCodeChange }) => (
    <div style={styles.container}>
        <MonacoEditor
            width="100%"
            height="400px"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(newValue) => onCodeChange(newValue || "")}
        />
    </div>
);

const styles = {
    container: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
    },
};

export default CodeEditor;
