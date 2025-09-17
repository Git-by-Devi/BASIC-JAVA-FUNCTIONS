let string = "SHE IS VERY BEAUTIFUL";
let ch = string.toLowerCase();
let count = 0;

for (let i = 0; i < ch.length; i++) {
  if (
    ch[i] === "a" ||
    ch[i] === "e" ||
    ch[i] === "i" ||
    ch[i] === "o" ||
    ch[i] === "u"
  ) {
    count++;
  }
}

console.log(count);
