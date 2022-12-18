var Count_Vowels = (S) => {
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

var Count_Consonants = (S) => {
    count1 = 0;
    str1 = "bcdfghjklmnpPqrstvwxyz";
    for (i = 0; i < S.length; i++) {
        for (j = 0; j < str1.length; j++) {
            if (S[i] == str1[j]) {
                count1++;
            }
        }
    }
    return count1;
};