import React, { FC } from "react";

const Header: FC = () => (
    <header style={styles.header}>
        <h1 style={styles.title}>Code Editor</h1>
        <p style={styles.subtitle}>Write, Run, and Test your Code Online</p>
    </header>
);

const styles = {
    header: {
        textAlign: "center" as const,
        padding: "1rem",
        backgroundColor: "#282c34",
        color: "#fff",
        borderRadius: "8px",
        marginBottom: "1rem",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "0.5rem",
    },
    subtitle: {
        fontSize: "1rem",
        opacity: 0.8,
    },
};

export default Header;
