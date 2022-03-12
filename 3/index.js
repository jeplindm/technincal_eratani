const data = [
  "Danawi Liam",
  "Tarjaya",
  "Daruna",
  "Warsoni",
  "John Wick",
  "Hadi PS",
  "Derian Lekso",
];

const input = "wick";

const search = (input, array) => {
  const result = array.filter((el) => el.toLowerCase().includes(input.toLowerCase()));
  return result;
};

search(input, data);
