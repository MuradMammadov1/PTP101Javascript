function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(maxOfThree(12, 4, 8)); 












function calculateDiscount(price, discountPercent) {

    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
        return "Xəta: düzgün qiymət və faiz daxil edin!";
    }

    let discountAmount = price * (discountPercent / 100);
    let finalPrice = price - discountAmount;

    return Number(finalPrice.toFixed(2));
}

console.log(calculateDiscount(100, 20));   
console.log(calculateDiscount(59.9, 15));  
console.log(calculateDiscount(200, 0));   
console.log(calculateDiscount(150, 110));  
console.log(calculateDiscount(-10, 10)); 











function findAverage(array) {
    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    return sum / array.length;
}

console.log(findAverage([1,2,3]));
console.log(findAverage([15,25,10,30])); 











function getGradeByScore(score) {
    if (score < 0 || score > 100) {
        return "Xəta: bal düzgün deyil!";
    }

    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
}

console.log(getGradeByScore(85)); 
console.log(getGradeByScore(68)); 












const reverseString = (str) => {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

console.log(reverseString("code"));  // "edoc"
console.log(reverseString("hello")); // "olleh"















const doubleArray = (arr) => {
    let result = [];

    for (let num of arr) {
        result.push(num * 2);
    }

    return result;
}

console.log(doubleArray([1, 2, 3])); 













function power(a, b) {
    return a ** b;
}

console.log(power(2, 3)); 
console.log(power(5, 4)); 
