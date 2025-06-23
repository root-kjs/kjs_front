// 예제 1: localStorage에 데이터 저장하고 불러오기
// localStorage에 <input> 으로 입력받은 사용자의 아이디를 저장하고, 페이지를 새로고침해도 그 값이 유지되는 것을 확인 하시오. 


// 함수안에 dom 입력값 넣을 것!
function func1(){
    console.log( '>> func1 exe' )
    // 마크업 객체 가져오기
    const idInput = document.querySelector( '#idInput' );
    // 마크업 객체 밸류(입력받은 값) 가져오기
    const idValue = idInput.value;
    // 마크업 localStorage 에 저장 하기( '키', 값 )
    localStorage.setItem( 'id', idValue );
    let name = localStorage.getItem( 'id' )
    console.log( localStorage.getItem( 'id' ) );
    console.log( name )
    document.querySelector('b').innerHTML = name+`님,`;

}


// 예제 2: localStorage에 객체 저장하기 (JSON.stringify)
// 아래 사용자의 환경 설정(객체)을 문자열로 변환하여 localStorage에 저장 하시오. 
// const userSettings = { theme: 'dark', notifications: true, language: 'ko' };

const userSettings = { theme: 'dark', notifications: true, language: 'ko' };

localStorage.setItem( 'obj' , JSON.stringify( userSettings ) )

console.log( localStorage )


// 예제 3: localStorage에서 객체 불러오기 (JSON.parse)
// localStorage에 문자열로 저장된 사용자 설정(userSettings) 을 다시 객체로 변환하여 사용 하시오. 

let getObj = localStorage.getItem( 'obj' )
JSON.parse( getObj ); 
console.log( JSON.parse( getObj ) )

// 예제 4: 데이터 삭제하기 (removeItem, clear)
// 스토리지에 저장된 특정 데이터(userSettings) 또는 전체 데이터를 삭제 하시오. 

localStorage.removeItem( 'obj' )
//localStorage.clear()

// 예제 5: 방문 횟수 카운터 만들기
// 페이지가 로드될 때마다 sessionStorage를 사용하여 방문 횟수를 1씩 증가시키시오. 
// 현재 방문 횟수를 id="visitCount"인 span 태그에 "이번 세션에서 O번째 방문입니다." 형식으로 출력하시오. 
// (페이지를 새로고침하면 숫자가 올라가고, 브라우저 탭을 닫았다 다시 열면 1로 초기화되어야 합니다.)
// sessionStorage : 브라우저를 끄면 저장 데이터 날아감.
// localStorage : 브라우저는 별도로 쿠키 삭제하기 전에는 저장 되지 않는다.

let visit = sessionStorage.getItem( 'visit' ) // 변경되는 리터럴은 let으로 변수 선언!
console.log( visit );

if( visit === null ){  // 세션 스토리지 속성 초기화 
    sessionStorage.setItem( 'visit' , 1 )
    visit = 1;
}else{ // 이미 존재하는 세션 스토리지 속석명이면
    visit = Number( visit ) + 1; // 숫자형 타입 변환 
    sessionStorage.setItem( 'visit' , visit ) // 동일한 속성명으로 해당 값 수정
}

document.querySelector( '#visitCount' ).innerHTML = visit;


