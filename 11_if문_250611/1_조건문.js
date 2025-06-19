// 연산의 결과는 항상 1개이다. 명심
// 변수도 1개 저장!! 
// 0과 1 밖에 모르는 흑백논리자!

if( 10 > 3 ) console.log( "10은 3보다 크다" ); // true
if( 10 > 20 ) console.log( "10은 20보다 크다" ); // false

// 명령어 코드가 2개 이상일땐, 중괄호로 묶자.
if( 10 > 20 ) {
    console.log(" 10은 20보다 크다.");
} 

// 거짓이 있을 때는 if~else
if( 10 > 3 ) {
    console.log( "10은 3보다 크다." ); 
} 
else{
    console.log( "10은 3보다 크다."); 
}

// else if

if( 10 > 20 ){ console.log( "10은 20보다 크다");}
else if( 10 > 15 ){ console.log( "10은 15보다 크다" ) ;}
else if( 10 > 10 ){ console.log( "10은 10보다 크다" )}
else{  console.log( "그외이다" ) }

// 중첩 
let gender = "남";
let score = 90;

if( gender == "남" ){
    if( score >= 90 ){
        console.log( "남자 우수생" )
    }else{
        console.log( " 남자 " )
    }
}else{
    if( score >= 90 ){
        console.log( "여자 우등생" );
    }else{
        console.log(여자);
    }
}