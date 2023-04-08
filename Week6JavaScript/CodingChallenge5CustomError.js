function divide(a,b)
{
    if(typeof a === 'number' && typeof b=== 'number' && b>0)
    return a/b;
    else
    throw new Error("Only Numbers are allowed and divisor should begreater than 0 ")
}
try
{
    var a=40;
    var b=4;
    console.log("Answer after dividing ",a," by ",b ,"Will give :",divide(a,b));
}
catch(error)
{
    console.log(error.message);
}
