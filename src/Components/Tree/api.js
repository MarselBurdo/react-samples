const api = {
  root: [
    {
      key: "monkey",
      title: "Monkey",
    },
    {
      key: "fish",
      title: "Fish",
    },
    {
      key: "rabbit",
      title: "Rabbit",
      isLeaf: true,
    },
  ],
  fish: [
    {
      key: "tuna",
      title: "Tuna",
      isLeaf: true,
    },
    {
      key: "flounder",
      title: "Flounder",
      isLeaf: true,
    },
    {
      key: "mackerel",
      title: "Mackerel",
      isLeaf: true,
    },
  ],
  monkey: [
    {
      key: "human",
      title: "Human",
    },
    {
      key: "gorilla",
      title: "Gorilla",
      isLeaf: true,
    },
    {
      key: "chimpanzee",
      title: "Chimpanzee",
      isLeaf: true,
    },
  ],
  human: [
    {
      key: "chineese",
      title: "Chineese",
      isLeaf: true,
    },
    {
      key: "russian",
      title: "Russian",
      isLeaf: true,
    },
    {
      key: "american",
      title: "American",
      isLeaf: true,
    },
  ],
};

const fetch = (key) =>
  new Promise((resolve) => setTimeout(() => resolve(api[key]), 1000));

export default { fetch };
