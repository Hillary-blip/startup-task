import React, { FC } from "react";

interface LanguageSelectorProps {
    selectedLanguage: string;
    onLanguageChange: (language: string) => void;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({
    selectedLanguage,
    onLanguageChange,
}) => (
    <div style={styles.container}>
        <label htmlFor="language" style={styles.label}>
            Choose Language:
        </label>
        <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            style={styles.select}
        >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
        </select>
    </div>
);

const styles = {
    container: {
        marginBottom: "1rem",
    },
    label: {
        marginRight: "0.5rem",
        fontWeight: "bold",
    },
    select: {
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
};

export default LanguageSelector;
