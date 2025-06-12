console.log( "문제1. 콘솔에 주문 내역 출력");

let customerName = prompt("1. 주문자명을 입력하세요.");
let orderMenuName = prompt("2. 주문하실 메뉴를 입력하세요.");
let orderQty = prompt("3. 주문 수량을 숫자로 입력하세요.");

console.log( "[주문 내역]");
console.log( "1. 주문자명 : ", customerName );
console.log( "2. 주문메뉴 : ", orderMenuName );
console.log( "3. 주문수량 : ", orderQty + "개" );

console.log( "---------------------------------");

console.log( "문제2. 콘솔에 오늘의 운동 기록 & 소모 칼로리 계산 출력");

let exerciseName = prompt("1. 운동자명을 입력하세요.");
let exerciseType = prompt("2. 오늘 한 운동을 입력하세요.");
let exerciseTime = prompt("3. 운동시간을 분단위 숫자로 입력하세요.");
const Kcal = 7 ; // 분당 소모 칼로리(1분당 7칼로리)
let totalKcal = exerciseTime * Kcal ;

console.log( "[운동 기록]");
console.log( "1. 운동자명 : ", exerciseName );
console.log( "2. 운동종류 : ", exerciseType );
console.log( "3. 운동시간(분 단위) : ", exerciseTime + "분" );
console.log( "* 오늘의 운동 총 소모 칼로리 : ", totalKcal + "(kcal)" );