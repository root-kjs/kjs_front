// 테스트용으로 console.log()많이 사용함.
console.log( 100 )
// 반환(결과를 도출) 
// typeof : 자료의 자료형을 반환
console.log( typeof 100 ) 

// [숫자형] number

// 1. 정수와 실수

// 컴퓨터는 0과 1밖에 없어서 실수를 정밀하게 계산하는게 불가능!!(오차 항상 존재)
// 별도의 정밀한 함수가 필요하다.
// 부동(띄워져 있다.) 소수점
console.log( 0.1 + 0.2 )


// [문자열] '',"" 묶음 자료, 숫자도 불리언도 '',"" 로 묶이면 문자가 됨
console.log( typeof '100' )
console.log( typeof 'true' )

// 1. 이스케이프 문자 : 기능이 포함된 특수문자
// \ (원화 기호) : 백슬러시를 사용
console.log("\\안녕")
console.log("\'안녕")
console.log("\"안녕")
console.log("\n안녕")
console.log("\t안녕")

// 2. 템플릿 리터럴 : `(백틱)으로 묶음, 변수난 식은 $로 시작
// 연산의 결과는 항상 하나이다.
// 문자열은 불변
// 새로운 리터럴을 도출
// + 연결 연산자로도 사용
// "안녕"+"자바"
// 아래 백틱 잘 안씀
//`${"안녕"} ${"자바"}` 
console.log("안녕"+"      자바");
console.log(`${"안녕"}     ${"자바"}` );

// 변수 활용
let name = "kim";
let classRoom = 204

// 아래는 이전 방식
console.log(name + "님" + classRoom + " 강의실 입장하세요");

// "백틱"을 이용해서 사용하기로 함(리액트에서 사용하기 때문에)
console.log(`${name}님 ${classRoom}호 강의실 입장하세요`);

// [논리형] true(참), false(거짓)의 값을 표현, 조건식에서 많이 사용된다.
console.log( true );
console.log( false );

// undefined 와 null
// 자료형이 정의되지 않을 때 데이터 상태(값을 않음): undefined
let 과일상자; // 변수를 선언하고 개발자가 자료를 대입/저장하지 않았다.
console.log( 과일상자 ) // 

// null : 데이터의 값이 유효하지 않은 상태, 자료가 존재 또는 유효하지 않다. 
// 변수는 선언이 되었지만 사용자의 자료가 입력되지 않았다. 데이터의 값이 입력되지 않았다.
// 아무런 데이터가 없다. 
// 라이브러리 함수들은 null을 호출하는 경우가 많다. 
let 채소상자 = null;
console.log( 채소상자 );

// [배열] : 하나의 변수에 값을 여러개 저장
let season = [ "봄","여름","가을","겨울" ]
console.log( season )
// 나열 : 열거하기 위해 하나씩 늘어놓음
// 1. 인덱스 : 순서대로 배정된 번호, 0부터 시작
// 인덱스 : 0, 1, 2, 3 
// 길이(총개수) : 4
// 배열을 호출하는 방법
// 배열의 변수를 호출하면 모든 값(요소)이 반환
console.log( season )
console.log( season[0] )
// 배열의 값이 없을 경우 _ undefined
console.log( season[4] )
    // 변수 : 1개 season ( 자료를 저장하는 공간은 1개 )
    // 리터럴 : 4개 봄, 여름, 가을, 겨울( 직접 입력된 값_ 상수 )
    // 타입 : 2개 (배열, 문자열)
    // 변수가 갖는 자료개수 : 1개 --> 배열 : 변수는 배열을 가르키기 때문에(참조)
    // [!!!! 아주 중요!!!!!]
    // 변수는 처음 지정된 큰 자료형을 참조하고 바라본다. 안의 구성요소는 별개
// 배열 수정 
// 전체 수정시 : 변수는 자료를 담는 상자(공간)
season = [ "유재석", "강호동" ]
console.log( season )
season[0] = "신동엽"
console.log( season[0] )
console.log( season )
// 배열 내 요소(값)을 추가, 뒤로 마지막에 추가됨
// 배열명.push( "새로운 값" ) push() 배열 내 추가 함수
season.push("홍길동")

console.log(season )
// 배열 내 요소 잘라오기 변수명.slice( 인덱스, 개수 ) 
console.log( season )
season.slice( 0, 1 )

// 0번 인덱스부터 1개가지만 나오게 잘라냄 1개만 나옴. 앞 인덱스부터
console.log( season.slice( 0, 1 ) )
season = [ "유재석", "강호동", "홍길동" ]
// 존재하지 않으면 -1로 나옴
console.log( season.indexOf("서장훈") )
// 존재하면 해당 인덱스 번호를 반환
console.log( season.indexOf("강호동") )
console.log( season.indexOf("유재석") )

// 아래와 같이 많이 사용함. 변수로 응용
result = season.indexOf("서장훈")
console.log( result )
console.log( season )
console.log( season.slice(0,3) )

