var Count_Vowels= (S) => {
    count = 0;
    str = "aeiou";
    for (i = 0; i < S.length; i++) {
        for (j = 0; j < str.length; j++) {
            if (S[i] == str[j]) {
                count++;
            }
        }
    }
    return count;
};