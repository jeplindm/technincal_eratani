const data = [8, 2, 20, -7, 25, -1, 5];

const sortedByAscending = (param) => {
  const result = param.sort((a, b) => {
    if (a < b) return -1;

    if (a > b) return 1;

    return 0;
  });

  return result;
};

const sortedByDescending = (param) => {
  const result = param.sort((a, b) => {
    if (b < a) return -1;

    if (b > a) return 1;

    return 0;
  });

  return result;
};

sortedByAscending(data);
sortedByDescending(data);
