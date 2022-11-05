const comments = [
  { comment: 'A' },
  { comment: 'B' },
  { comment: 'C' },
  { comment: 'D' },
];

const commentCounter = () => comments.length;

const getData = () => comments.length;

module.exports = commentCounter();
module.exports = getData();