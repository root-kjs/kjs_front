/*
문제 6: 배열 요소의 합계와 평균 구하기
다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.
let scores = [85, 92, 78, 65, 95];
*/

// let sum = 0;
// let scores = [85, 92, 78, 65, 95];
// for( index = 0 ; index <= scores.length-1; index++ ){
//     sum += scores[ index ]
// }
// let average = sum / scores.length
// console.log( ` 합계 : ${ sum } / 평균 : ${ average }` );


// 문제 7: 특정 조건에서 반복문 탈출하기 (break)
// 점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
// let scores = [77, 82, 100, 54, 96];
// 출력 예시: 100점 만점자를 찾았습니다!

// let scores7 = [77, 82, 100, 54, 96];
// let perfecScore = 100;

// for( index = 0; index <= scores7.length - 1; index++ ){
//     if( scores7[index] === 100  ){
//         console.log( `인데스 번호 : ${ index }, ${ scores7[index] }점 ` );
//         console.log( '100점 만점자를 찾았습니다!' );
//         break;
//     }
// }

// 문제 8: 특정 조건 건너뛰기 (continue)
// 점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.
// let scores = [90, 45, 72, 88, 59, 100];

let scores8 = [90, 45, 72, 88, 59, 100];

for( index = 0; index <= scores8.length-1; index++ ){
    let score = scores8[ index ];
    if( score <= 60 ){
        continue;
    }
    console.log( scores8[ index ] ); // 코딩 순서 절차에 맞게 작성 할 것 
}

// 문제 9: 배열에서 특정 값의 개수 세기
// 다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.
// let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];


// let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
// let countA = 0;
// for( index = 0; index <= bloodTypes.length-1; index++ ){
//     if( bloodTypes[index] == 'A' ){
//        countA++;
//     }
// }
// console.log( ` ${ countA } ` );


// 문제 10: 학생 점수 시각화하기 
// 주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.
// let nameArray = ['유재석', '강호동', '신동엽'];
// let scores = [92, 86, 72];
// (2). 구현 조건
// for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
// 점수를 100점 만점으로 환산하여 시각화합니다.
// 점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.
// 예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
// HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.
// (3). 출력 예시 (HTML)
// 유재석 ●●●●●●●●●○
// 강호동 ●●●●●●●●○○
// 신동엽 ●●●●●●●○○○

let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
// 1. 빈 문자열(html 공간 만들기)
// 우선 기본적인 내용의 순서를 먼저 출력 할 것. 구현하고자 하는
//  저장공간이나 출력공간을 변수로 미리 선언할 것.
let output = ''; 

for( i = 0; i <= nameArray.length - 1; i++ ){
    // 2. 이름 출력하기
    let name = nameArray[i];
    // 대입 중첩 연산자에 백틱(``)을 사용하면 문자열로 처리되니까 문자열이나 출력하고자 하는 변수에만 사용 할 것
    output += ` <div> ${ name }  `;

    // 3. 점수 출력하기
    let score = scores[i];
    // output += ` <span> ${ score } </span> `;
    let black = parseInt( score / 10 ) 
    for( let circle = 0; circle <= 10; circle++ ){
        if( circle < black ){
        // 대입 중첩 연산자에 백틱(``)을 사용하면 문자열로 처리되니 문자열이나 출력하고자 하는 변수에만 주의사용
            output += `<span> ● </span>` 
        }else{
            output += `<span> ○ </span>`
        }
    }
    // 4. 줄바꿈
    output += ` </div> `
}
document.write( output );

