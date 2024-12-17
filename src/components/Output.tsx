import React, { FC } from "react";

interface OutputProps {
    result: string | null;
    error: string | null;
}

const Output: FC<OutputProps> = ({ result, error }) => (
    <div style={styles.output}>
        {result && <pre style={styles.result}>{result}</pre>}
        {error && <pre style={styles.error}>{error}</pre>}
    </div>
);

const styles = {
    output: {
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "1px solid #ddd",
        minHeight: "100px",
    },
    result: {
        color: "green",
    },
    error: {
        color: "red",
    },
};

export default Output;
