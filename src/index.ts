function prepend(numSpaces: number, inputString: string) {
  let spaces = "";
  for (let i = 0; i < numSpaces; i++) {
    spaces += " ";
  }
  return spaces + inputString;
}

// 10 spaces before "Hello World" is printed out
console.log(prepend(10, "Hello World")); 