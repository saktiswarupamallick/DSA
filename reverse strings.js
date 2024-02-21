var reverseString = function (s) {
    let n = s.length;
    let temp;
    i = 0;
    j = n - 1;
    while (i <= j) {//i should not cross j

        //to swap
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        //to move pointers
        i++;
        j--;
    }
};

//swap using 2 var
a= 10
b = 20
a= a+b
b= a-b
a= a-b