function capitalize(word) {
  if (word.length == 0) {
    return "";
  } else {
    let string = word[0].toUpperCase() + word.substring(1);
    return string;
  }
}
console.log(capitalize("devi"));
