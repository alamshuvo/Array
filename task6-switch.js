// 1. write a function called "getSeason" that takes a month as a number (1 for january ,2 for february .3 for March and so on ) and returns the coresponding season.

// 2. The seasons are defined as a follows.

// 3. spring march(3) to may(5).
// 3. summer june(6) to August (8).
// 4. automn Sep(9) to nov(11).
// 5. winter dec(12) to jan(1) and feb(2).
// 6. use a switch statement to impliment the logic.

function getSeason(season){
    let seasonName;
    switch (true){
        case (season>=3 && season<=5):
        seasonName="spring";
        break;
        case (season>=6 && season<=8):
        seasonName="Summer";
        break;
        case (season>=9 && season<=11):
        seasonName="autumn";
        break;
        case ((season===12)|| (season>=1 && season<=2)):
        seasonName="winter";
        break;
        default:
            return "invalid season name"
    }
    return `your expected season is ${seasonName} `
}
const firstSeason=getSeason(12);
console.log(firstSeason);




// const dayOfWeek=7;
// switch (dayOfWeek) {
//     case 1:
//         console.log('saturday');
//         break;
//     case 2:
//         console.log('sunday');
//         break;
//     case 3:
//         console.log('monday');
//         break;
//     case 4:
//         console.log('tuesday');
//         break;
//     case 5:
//         console.log('wednessday');
//         break;
//     case 6:
//         console.log('thursday');
//         break;
//     case 7:
//         console.log('friday');
//         break;

//     default:
//         console.log("opps this is wrong day");
//         break;
// }



// const lightCondition=true;
// switch (true) {
//     case lightCondition:
//         console.log("light on");
//         break;
  

//     default:
//         console.log("light off");
//         break;
// }



// function calGrade(score){
// let gradingScore;
// switch (true){
//     case (score<=100 && score>=90):
//     gradingScore ="A";
//     break;
//     case (score<=89 && score>=70):
//     gradingScore ="B";
//     break;
//     case (score<=69 && score>=50):
//     gradingScore ="C";
//     break;
//     case (score<=49 && score>=33):
//     gradingScore ="D";
//     break;
//     case (score<=32 && score>=0):
//     gradingScore ="F";
//     break;
//     case (score>100 && score<0):
//     gradingScore ="Please input valid number";
//     break;
//     default:
//         return "invalid score";
// }
// return `you got ${gradingScore} :grade`
// }
// const firstPerson =calGrade(95);
// console.log(firstPerson);
// const secondPerson =calGrade(25);
// console.log(secondPerson);
// const thirdPerson =calGrade(-10);
// console.log(thirdPerson);