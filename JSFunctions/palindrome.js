function reverseString(str) {
  let abc = "";
  for (let i = str.length - 1; i >= 0; i--) {
    abc = abc + str[i];
  }
  return abc;
}
let str1 = "hello";
let str2 = reverseString(str1);
console.log(str2);
if (str2 == str1) {
  console.log("palindrome");
} else {
  console.log("Notpalindrome");
}
