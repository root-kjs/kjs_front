/*
[ interval ] : 간격/ 사이 
 1. 정의 : 시간적인 간격에 따라 특정 함수 실행
 2. 사용법
    1) setInterval( 함수명 , 밀리초 ) 라이브러리
        - 
        - 반환값 : 
        let 변수 = setInterval();
    2) clearInterval( interval객체 ); 
*/
//(1) 예제 setInterval() -------------------------------------------------
let value = 0; // 전역변수
function 증가함수(){

    // 전역변수를 1증가
    value += 1; console.log( value )
    //value = value += 1, value++

    // 특정한 위치에 전역변수 값 대입 
    // 어디에?
    const box1 = document.querySelector( '#box1' )
    // 무엇을?
    let html = value;
    // 대입
    box1.innerHTML = html;


} // 증가함수() end

// 보안이 많이 들어간 곳(제한 시간안에 인증번호 입력), 자동 로그아웃 등 활용처 다양!!!

//setInterval( 증가함수 , 1000 ); // 1000밀리초(1초)간격에 따른 '증가함수' 호출(실행)

//(2) 예제 setInterval() -------------------------------------------------
function 시계함수(){
    // 현재 날짜 시간을 구하기 : 
    let today = new Date();
    let hour = today.getHours(); // '시' 반환
    let minute = today.getMinutes(); // '분' 반환
    let seconds = today.getSeconds(); // '초' 반환

    // 어디에
    const box2 = document.querySelector('#box2');

    // 무엇을 
    let html = ` ${ hour } : ${ minute } : ${ seconds }`;

    // 출력(대입)
    box2.innerHTML = html;

} // 시계함수() end

setInterval( 시계함수 , 1000 ); // 1초마다 시계 함수 호출하기

//(3) 예제 setInterval() 타이머 -------------------------------------------------

let time = 0 ; // 현재 타이머의 초
let timerId; // 변수만 선언, 추후에 interval 객체 저장.

function 시간증가(){
    time++; // 1증가
    document.querySelector( '#box3' ).innerHTML = time; // 출력
} // 시간증가() end

function 타이머시작(){
    // 전역변수에 interval 객체 저장
    // 전역변수 사용이유 : 서로 다른 함수에서 공통 변수 사용이 가능하다.
    // 지역변수를 밖으로 가져가고 싶다면 return 활용!
    timerId = setInterval( 시간증가 , 1000 ) // 1초마다 시간증가 함수 실행
} // 타이머시작() end

function 타이머중지(){
    clearInterval( timerId ) // 중지 : 
}// 타이머중지() end

function 타이머초기화(){
    rese( timerId ) // 1초마다 시간증가 함수 실행
}// 타이머중지() end