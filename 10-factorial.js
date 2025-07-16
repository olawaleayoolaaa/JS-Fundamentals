const inp = parseInt(process.argv[2]);

function factorial(num){
    if (num === NaN){
        console.log("1")
    }

    else{
    let i=num
    let j=1;
    while (i>0){
    j*=i
    i--
    }
    console.log(j)
    }
}

factorial(inp);