// 반복문 조건 주석 서술할 것!!
// 중첩 for문
// for( let i = 1; i <= 2; i++ ){
//     console.log( i );
//     for( let h = 1; h <= 3;  h++ ){
//         console.log( h )
//     }
// }
// // 구구단 : 밖의 포문 먼저 돌고, 안의 포문 조건에 맞게 반복 실행
// for( let i = 2; i <= 9; i++ ){ // 2단 ~ 9단 
//     console.log( ` ${ i }단` ); 
//     for( j = 1; j <= 9; j++ ){ // 곱하는 수
//         console.log( ` ${ i } X ${ j } = ${ i * j }` );
//     }
//     console.log( ` ========== ` );
// }

// // 별 출력하기
// let output = ''; 
// for( let i = 1; i <= 5; i++ ){
//     for( let j = 1; j <= i; j++ ){
//         output 
//     }
// }


// // continue 
// for( let i = 1; i <= 5; i++ ){
//     if( i == 3 ){ continue; }
//     console.log( i );
// }


// // break 
// let sum = 0;
// for( let i = 1; i <= 10; i++ ){
//     if( sum > 10 ){ break; }
//     sum += i;
// }
// console.log( sum );


// 무한루프
// for( ; ; ){
//     console.log( '무한 출력' );
// }


// [생각해보기] 1~45 사이의 6개 정수를 입력받아 하나의 배열 저장하시오. <로또번호>
// 조건1 : 1 ~ 45 사이  - 조건2 : 중복 값 제외 한다. - 조건3 : 총 6개만 저장한다.

// 1. 제일 먼저 출력해야 할 6개 숫자 입력될 배열 선언
let numList = [];

// 2. 무한 반복 숫자 입력창 생성
for( ; ; ){
    let num = Number( prompt( '로또 번호 입력' ) );
    // 조건1. 1~45 이외의 숫자시 
    if( num < 1 || num > 45 ){
        console.log( ' 경고 : 1~45까지의 숫자를 입력하세요. ');
        continue;
    }
    // 조건 : 입력한 값이 이미 입력한 값(중복) 이면 제외
    if( numList.indexOf( num ) != -1 ){
        console.log( ' 이미 입력한 숫자입니다.' );
        continue;
    }
    numList.push( num );
    // 조건3. 만역에 저장된 배열이 6개 값이 됐으면 무한 반복 입력 종료!
    if(  numList.length == 6 ){
        break; 
    }
} // for end
console.log( numList );


