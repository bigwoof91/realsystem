const makeTokenScale = <T = Record<string, any>>(
  scale: T
): Record<string, any> => {
  const tokenScale = {};
  Object.keys(scale).forEach((key, i) => {
    tokenScale[key] = scale[key];
    tokenScale[i] = scale[key];
  });
  return tokenScale;
};

export { makeTokenScale };
