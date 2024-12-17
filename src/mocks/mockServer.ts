export const mockServer = (language: string, code: string): Promise<{ status: string; output?: string; error?: string }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (language === "javascript") {
                try {
                    const result = eval(code);
                    resolve({ status: "success", output: String(result) });
                } catch (err) {
                    resolve({ status: "error", error: String(err) });
                }
            } else if (language === "python") {
                resolve({ status: "success", output: "Python execution not supported in real-time." });
            } else {
                resolve({ status: "error", error: "Unsupported language." });
            }
        }, 1000);
    });
};
