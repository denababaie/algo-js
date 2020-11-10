function factorial(n){ 
    if(n > 0 && n<= 1) {
        return 1;
}
else { 
    return n * factorial(n-1);
}
}
// if n is 5 output --> 120 
// if n is 4 output --> 24
