const parseArgs = () => {
  const args = process.argv;
  let result = '';

  for (let i = 2; i < args.length; i += 2) {
      const propName = args[i].slice(2);
      const propValue = args[i + 1];
      result += `, ${propName} is ${propValue}`;
  }
  console.log(result.slice(2));
};

parseArgs();
