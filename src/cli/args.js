const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArguments = {};

  for (let i = 0; i < args.length; i += 2) {
    const propertyName = args[i].substring(2);
    const propertyValue = args[i + 1];
    parsedArguments[propertyName] = propertyValue;
  }

  for (const key in parsedArguments) {
    const value = parsedArguments[key];
    console.log(`${key} is ${value}`);
  }
};

parseArgs();
