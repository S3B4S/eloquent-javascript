var output = "";

for (i = 0; i < 7; i++) {
  output += "#";

  if (output.length === i) {
    output += "\n";
  }
  console.log(output);
}
