const parseEnv = () => {
  const prefix = 'RSS_';
  const envVariables = process.env;
  let result = '';

  Object.keys(envVariables).forEach((key) => {
      if (key.startsWith(prefix)) {
          result += `; ${key}=${envVariables[key]}`;
      }
  });
  console.log(result.slice(2))
};
parseEnv();

