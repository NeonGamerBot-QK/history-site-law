// my ac history work
export const text = [
  `Text for 1st icon (why no talk tuah)`,
  `Text for 2nd icon (email)`,
  `Text for 3rd icon (funnel)`,
  `Text for 4th icon (marker)`,
  `Text for 5th icon (bill)`,
  `Text for 6th icon (congress)`,
  `Text for 7th icon (law)`,
];

// map all the strs above to jsx
export const jsxVersions = text.map((str, i) => {
  return <p key={i}> {str} </p>;
});
