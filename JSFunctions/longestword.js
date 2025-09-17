function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    let currentWordLength = words[i].length;
    let longestWordLength = longest.length;

    if (currentWordLength > longestWordLength) {
      longest = words[i];
    }
  }

  return longest;
}
console.log(longestWord("I am beautiful"));
