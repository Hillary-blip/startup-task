import React, { useState } from "react";
import Header from "../components/Header";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import RunButton from "../components/RunButton";
import Output from "../components/Output";
import { mockServer } from "../mocks/mockServer";

const HomePage = () => {
    const [language, setLanguage] = useState("javascript");
    const [code, setCode] = useState("");
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleRunCode = async () => {
        setResult(null);
        setError(null);
        const response = await mockServer(language, code);
        if (response.status === "success") {
            setResult(response.output ?? null);
        } else {
            setError(response.error ?? null);
        }
    };


    return (
        <div className="">
            <div className="container">
                <Header />
                <LanguageSelector selectedLanguage={language} onLanguageChange={setLanguage} />
                <CodeEditor code={code} language={language} onCodeChange={setCode} />
                <RunButton onRun={handleRunCode} />
                <Output result={result} error={error} />
            </div>
        </div>
    );
}

export default HomePage;