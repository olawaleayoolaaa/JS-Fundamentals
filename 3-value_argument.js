const args = process.argv.slice(1);
if (args.length === 0) {
  console.log("No argument");
} 
 else {
  console.log(...args);
}