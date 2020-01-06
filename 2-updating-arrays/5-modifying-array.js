// // reduce
// 'use strict'
// const numbers = [1, 2, 3, 4];

// function sum(x, y) {
//     return x + y;
// }

// const total = numbers.reduce(sum)
// console.log(total)

// -------------------------------

const grades = [90, 80, 23, 70, 100, 30];

const total = grades.reduce(sum);

function sum(acc, grade) {
    return acc + grade;
}

const count = grades.length;

console.log(count);

const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
    const {a=0, b=0, c = 0, d =0, f=0} = acc;
    if (grade >= 90) {
       return {...acc, a: a + 1 };
    } else if (grade >= 80) {
        return {...acc, b: b + 1};
    } else if (grade >= 70) {
            return {...acc, c: c + 1};
    } else if (grade >= 60) {
            return {...acc, d: d + 1};
    } else {
            return { ...acc, f: f+ 1};
    }
}
    console.log(total, total / count , letterGradeCount);


//output 
/*
393
65.5
[object Object] {
  a: 2,
  b: 1,
  c: 1,
  f: 2
}


*/
