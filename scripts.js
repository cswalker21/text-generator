const verbs = [
  "drill down",
  "impact",
  "empower",
  "leverage",
  "tee up",
  "crowd source",
];
const nouns = [
  "best practices",
  "core competencies",
  "corporate values",
  "tiger team",
  "synergy",
];
const phrases = [
  "beat the bushes",
  "boil the ocean",
  "crush it",
  "shift the paradigm",
  "make it pop",
  "open the kimono",
  "peel the onion",
  "raise the bar",
];
const adjectives = [
  "authentic",
  "bleeding edge",
  "best in class",
  "buzzworthy",
  "game-changing",
  "robust",
  "vertical",
];

const getTerm = (array) => {
  const ind = Math.floor(Math.random() * array.length);
  return array[ind];
};

const generate = () =>
  `Our mission is to ${getTerm(verbs)} our ${getTerm(adjectives)} ${getTerm(
    nouns
  )} and really ${getTerm(phrases)}.`;
