// let customerName
// let orderMenuName
// let orderQty

console.log( "문제1. 콘솔에 주문 내역 출력");
console.log( "[주문 내역]");

let customerName = prompt("주문자명을 입력하세요.");
let orderMenuName = prompt("주문하실 메뉴를 입력하세요.");
let orderQty = prompt("주문 수량을 입력하세요.");

console.log( "1. 주문자명 : ", customerName );
console.log(  "2. 주문메뉴 : ", orderMenuName );
console.log(  "3. 주문수량 : ", orderQty + "개" );

console.log( "---------------------------------");

console.log( "문제2. 콘솔에 오늘의 운동 기록 & 소모 칼로리 계산 출력");
console.log( "[운동 기록]");

let exerciseName = prompt("운동자명을 입력하세요.");
let exerciseType = prompt("오늘 한 운동을 입력하세요.");
let exerciseTime = prompt("운동시간을 분단위 숫자로 입력하세요.");
const Kcal = 7 ;
let totalKcal = exerciseTime * Kcal ;

console.log( "1. 운동자명 : ", exerciseName );
console.log( "2. 운동종류 : ", exerciseType );
console.log( "3. 운동시간(분 단위) : ", exerciseTime + "개" );
console.log( "오늘의 운동 총 소모 칼로리 : ", totalKcal + "(kcal)" );