/*
[ 쿼리스트링 ]
 - URL(웹주소)상에 매개변수를 사용
 - URL?변수명-값
 - 페이지 이동간의 데이터 전달이 가능
 - 페이지 이동하면 새로고침이 들어가서 js초기화가 되기 때문에 전역변수, 지역변수가 사라져서 쿼리스트링을 사용하거나 웹스토리지를 활용한다. 

 1. 사용법
 - 이동하는 방법
 (방법1) HTML : <a href="이동할경로?변수명=값&변수명=값" />
 (방법2) JS : location.href="이동할경로?변수명=값&변수명=값"

 - URL상의 매개변수를 가져오는 방법
 - 경로상의 변수를 가져오겠다
   new URLSearchParams( location.search ).get( '변수명' )  : 



*/

// 1)
let url = new URLSearchParams( location.search ) // location.href .search
console.log( url );

//2)
let param = url.get( 'param' );
console.log( param )

//3)
let url3 = new URLSearchParams( location.search );
let pcode = url3.get( 'pcode' )
console.log( pcode );

let page = url3.get( 'page', 'pcode' )
console.log( page, pcode );

function 이동함수(){
    // let url4 = new URLSearchParams( location.href )
    // 페이지 이동하면 새로고침이 들어가서 js초기화가 되기 때문에 전역변수, 지역변수가 사라져서 쿼리스트링을 사용하거나 웹스토리지를 활용한다. 쿼리스트링을 많이 사용한다.
    location.href = '1_쿼리스트링.html?sort=1&code=8';
}

let url4 = new URLSearchParams( location.search );
let sort = url4.get( 'sort' );
let code = url4.get( 'code' );

console.log( sort , code )

