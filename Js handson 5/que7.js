var Palin_Check = (str) => {
    let rev = "";
    for (let i=str.length-1; i>=0; i--){
        rev += str[i];
    }
    if (rev == str){
        return "True";
    }
    else
    return "False";
};