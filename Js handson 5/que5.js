var Game_Winner = (S) => {
    let count = 0;
    let count1 = 0;
    for (i=0; i<S.length; i++){
        if (S[i]==="A"){
            count+=1;
        }
        if (S[i]==="D"){
            count1+=1;
        }
    }
    if (count<count1){
        return "Danish";
    }
    if (count == count1){
        return "Draw";
    }
    if (count>count1){
        return "Aditya";
    }
};