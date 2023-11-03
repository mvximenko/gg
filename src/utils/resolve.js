const resolve = (item, path) => {
  return path.split('.').reduce((p, c) => p?.[c] || null, item);
};

export default resolve;
