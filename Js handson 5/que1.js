const countCharacters = (S) => {
    let count = 0;
    let count2 = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == "A") {
            count += 1;
        }
        else if (S[i] == "D") {
            count2 += 1;
        }
    }
    return count + "" + count2;
};