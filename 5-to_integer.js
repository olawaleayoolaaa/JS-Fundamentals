const args = process.argv.slice(2);
if (Number.parseInt(args[0])){
    console.log(`My number: ${Number.parseInt(args[0])}`)
}
else{
    console.log("Not a number")
}