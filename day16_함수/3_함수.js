// 예제 1: 기본 함수 선언 및 호출
// '함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello라는 이름의 함수를 정의하고, 그 함수를 호출하시오.

function sayHello(){
    console.log( '함수 호출 성공!' );
}

sayHello();

// 예제 2: 매개변수를 사용하는 함수
// 임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.

function printSum( x , y ){
    console.log( x + y );
}

printSum(5, 10);

// 예제 3: 값을 반환(return)하는 함수
// 임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
// 함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오.

function getWelcomeMessage( name ){
    //console.log( name )
    //let result = `환영합니다, [${ name }]님!`
    //return result;
    return `환영합니다, [${ name }]님!`
}

//getWelcomeMessage( '한재웅' ); // 함수안에 출력내용이 없어서 아무것도 출력이 되지 않는다.
getWelcomeMessage( '한재웅' ); 
let welcome = getWelcomeMessage( '한재웅' );
console.log( welcome );

// 예제 4: 함수를 이용한 카운터
// 0의 값을 가진 counter라는 전역 변수를 만드시오.
// 호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
// 함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오.

let counter = 0;
function increaseCount( ){
    console.log( counter++ )
   // counter++
}


increaseCount();
increaseCount();
increaseCount();

console.log( 'counter' , counter  )

// increaseCount();
// increaseCount();
console.log( '=====================' )


// for( counter = 0; counter <= 3; counter++ ){
//     increaseCount();
// }

console.log( '=====================' )
// 예제 5: for 반복문을 포함한 함수
// 임의의 숫자 n을 매개변수로 받아, 1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.

function printNumbers( n ){
    for( i = 1; i <= n; i++ ){
        console.log( i );
    }
}
printNumbers( 2 );

// 예제 6: prompt와 함수 활용
// prompt를 이용해 사용자로부터 이름을 입력받으시오.
// 입력받은 이름을 매개변수로 받아, 해당 이름이 저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.

let userList =[];

function addUser( userName ){
    userList.push( userName );
    //console.log( userList );
}

//addUser( prompt( '이름' ) );
console.log( userList ); // 확인

// 예제 7: 배열을 매개변수로 전달
// 임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오.

function printFruits( fruits ){
    // console.log( fruits );
    for( let i = 0; i <= fruits.length -1 ; i++ ){
        let fruit = fruits[i];
        console.log( fruit );
    }
}

printFruits( [ '사과', '배', '딸기' ] );
let array = [ '감', '배', '수박' ];
printFruits( array );


// 예제 8: Boolean 값 반환하기
// 임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요.

function isPositive( number ){ // 함수 정의 
    // console.log( number );
    if( number > 0 ){
        return true;  // 반환값(return) : 함수의 지역변수가 나갈 수 있는 출구 return 존재!!!!
    } else{
        return false; // 지역변수가 갖는 자료를 함수 밖으로 빼는 법 --> 반환값 사용하기!!!!
    }
}
isPositive( 0 ); // 함수는 실행됐지만 출력명령이 없기때문에 안보임. 
let tf = isPositive( 0 ); // 함수의 반환값(return)을 담을 수 있는 변수를 정의하여 해당 변수를 출력!!!
console.log( tf );


// 예제 9: 전역 변수와 지역 변수
// let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 let localText = '지역'; 변수를 선언하고, 
// 두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요.


let globalText = '전역';
function printLocal( ){
    let localText = '지역';
    console.log( localText, globalText );
}
console.log( globalText );
// console.log( localText );

printLocal( );
