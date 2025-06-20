// prompt() 입력함수는 text input 이기 때문에 입력받은 데이터는 항상 문자열 타입 반환
// let input = prompt("숫자를 입력하세요");
// console.log( typeof input );

// 숫자를 입력하면 문자열이지만 자바스크립트 숫자 연산을 하면 숫자형으로 자동 형변환 됨.
// let result = input * 10;
// console.log( result );

// + 연결 연산자와 더하기 연산자
// 문자열과 숫자형을 더하면 + 더하기 연산자로 적용되어 전체 문자열이 됨
let one = "20";
let two = 10;
console.log( typeof (one + two) );


// 자료형 변환 함수
console.log( typeof(Number("10")) );

// NaN( Not a Number )
console.log( Number("10aaff") );
console.log( typeof(Number("10aaff")) );

// parseInt : 정수 숫자 변환 함수
console.log( parseInt("100") );
console.log( parseInt("100.45") ); // 소수점 잘림
console.log( parseInt("10aaff") ); // 문자 잘림


// parseFloat : 정수 숫자 변환 함수
console.log( parseFloat("100") );
console.log( parseFloat("100.45") ); // 소수점 잘림
console.log( parseFloat("10aaff00023.45") ); // 문자 이후 잘림

// ★★★★ 순서도를 먼저 할 것 ★★★★★★
// 1. 데이터를 변수 선언하고 값을 할당하기(입력)
// 소괄호 안쪽부터 바깥쪽 괄호로 순서로 실행된다. 안에서 밖으로!!!!
let korean = Number(prompt( "국어점수를 입력하세요" ));
let math = Number(prompt( "수학점수를 입력하세요" ));
// let korean = parseInt(prompt( "국어점수를 입력하세요" ));
// let math = parseInt(prompt( "수학점수를 입력하세요" ));

console.log( korean );
console.log(  math  );
let sum = korean + math
// let sum = parseInt(korean) + parseInt(math)
// 템플릿 리터럴 활용!!!
console.log( "합계점수 :", sum );
