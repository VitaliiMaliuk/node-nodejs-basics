const parseEnv = () => {
    const prefix = "RSS_";
    const variables = [];
    for (const key in process.env) {
        if (key.startsWith(prefix)) {
            const name = key.substring(prefix.length);
            const value = process.env[key];
            variables.push(`RSS_${name}=${value}`);
        }
    }
    const output = variables.join("; ");
    console.log(output);
};

parseEnv();