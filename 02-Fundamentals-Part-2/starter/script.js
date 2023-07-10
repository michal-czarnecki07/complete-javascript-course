console.log("cos")
const vovels = ['a', 'A', 'o', 'O', 'i', 'I', 'e', 'E'];
str = "pooolskaaA";
str = str.split("").filter(element => !vovels.includes(element)).join("");

console.log(str);