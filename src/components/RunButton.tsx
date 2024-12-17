import React, { FC } from "react";


interface RunButtonProps {
    onRun: () => void;
}

const RunButton: FC<RunButtonProps> = ({ onRun }) => (
    <button style={styles.button} onClick={onRun}>
        Run Code
    </button>
);

const styles = {
    button: {
        padding: "0.75rem 1.5rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        cursor: "pointer",
        marginTop: "1rem",
    },
};

export default RunButton;
