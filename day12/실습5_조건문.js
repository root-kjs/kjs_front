// [ 실습5 ]

// 문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = [ '사과', '바나나' ];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요. 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.


// let fruitList = [ '사과', '바나나' ];  // 0,1
// let fruit = prompt( '과일이름' );


// if( fruitList.indexOf( fruit ) == -1 ){
//     fruitList.push( fruit );
//     console.log( fruitList ); 

// }else{
//      console.log( '이미 존재하는 과일입니다.' ); 
// }



// 문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다. 성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.


// let idNum = prompt( '주민등록번호(13자리, 숫자만 입력)' );
// // 성별을 7번째 숫자가 '1' 또는 '3'이면 'blue'를, 
// // '2' 또는 '4'이면 'red'

// console.log( idNum.length );
// console.log( idNum[6] ); 

// let gender = idNum[6];

// if( idNum.length == 13 ){
//     if( gender == '1' || gender == '3' ){
//         console.log( 'blue' ); 
//     }else if ( gender == '2' || gender == '4' ){
//         console.log( 'red' ); 
//     }else{
//         console.log( '주민등록번호를 확인 후, 정확히 입력하세요.' );
//     }
// }else{
//     console.log( '주민등록번호 숫자만(13자리) 입력하세요.' ); 
// }


// 문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다. 구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10% 할인
// 30,000원 이상 50,000원 미만: 5% 할인
// 10,000원 이상 30,000원 미만: 1% 할인
// 10,000원 미만: 할인 없음

// let amount = Number(prompt('총 구매금액:'));

// if( amount >= 50000 ){
//     console.log( '10% 할인');
// }else if( amount >= 30000 ){
//     console.log( '5% 할인');
// }else if( amount >= 10000 ){
//     console.log( '1% 할인');
// }else{
//     console.log( '할인 없음');
// }


// 문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
// 봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.



// let month = Number(prompt('월(Month)을 숫자로 입력(1~12):'));

// if( month >= 1 && month <= 12 ){
//     if( month == 12 || month <= 2 ){
//         console.log( '겨울');
//     }else if( month <= 5  ){
//         console.log( '봄' );
//     }else if( month <= 8 ){
//         console.log( '여름' );
//     }else{
//         console.log( '가을');
//     }
// }else{
//     console.log( '잘못된 월입니다.' );
// }


// 문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.

// let numA = Number( prompt("정수1 : ") )
// let numB = Number( prompt("정수2 : ") )
// let numC = Number( prompt("정수3 : ") )

// console.log( numA, numB, numC );

// if( numA > numB ){
//     if( numA > numC ){
//         console.log( numA );
//     }
// }else if( numB > numC ){
//     console.log( numB );
// }else{
//     console.log( numC );
// }

// -------------------------------------------------------------------------------------------------

// 문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'


let inputYear = Number( prompt(" 연도(year)를 입력: ") )

let leapYear = (( inputYear % 4 == 0 ) && ( inputYear % 100 != 0 )) //|| ( inputYear % 400 == 0 )


if( inputYear == leapYear ){
    console.log( ` ${inputYear}년은 윤년입니다. ` );
}else{
    console.log( ` ${inputYear}년은 평년입니다. ` );
}




// 문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력

// 오름차순(작은 수부터 큰 수 순서)으로 정렬
/* 나의 노가다 모든 조건 기술 ㅜㅜ

// let num1 = Number( prompt("정수1 : ") )
// let num2 = Number( prompt("정수2 : ") )
// let num3 = Number( prompt("정수3 : ") )
console.log( `입력한 수: ${ num01 }, ${ num02 }, ${ num03 } ` );

if( num01 > num02 && num01 > num03 ){
    if( num02 > num03 ){
        console.log( num01, num02, num03 );
    }else{
        console.log( num01, num03, num02  );
    }
}else if( num02 > num01 && num02 > num03 ){
    if( num01 > num03 ){
        console.log( num02, num01, num03 );
    }else{
        console.log( num02, num03, num01  );
    }
}else if( num03 > num01 && num03 > num02 ){
    if( num01 > num02 ){
        console.log( num03, num01, num02 );
    }else{
        console.log( num03, num02, num01  );
    }
}
*/

// ★★★★★ 김현수 강사님 답안_250612 시작 ★★★★
// (1) 3개의 정수를 입력받는다. 
// (2) 3개의 하나의 배열 자료로 표현하여 변수에 저장
// (3) 스왑(교체) : 두 자료들 간의 위치를 교체하는 방법 , 한 위치에 하나만 저장이 가능하다.
/*
    A = 10;  B = 20;        두 변수간의 자료를 교체하시오.
        A = B;     B의 자료를 A에 대입 * A의 기존 자료는 사라진다. (변수는 하나의 자료 저장한다.)
        A = 20;  B = 20;  문제 발생 !!!! 
    *해결방안 : 임시변수 만들어서 임시 보관용 
    A = 10;  B = 20;  TEMP;
        TEMP = A;       TEMP = *10 , A = 10 , B = 20
        A = B;          TEMP = 10 , A = *20 , B = 20
        B = TEMP;       TEMP = 10 , A = 20 , B = *10
*/
// (4) 오름차순 : 두 수 간의 작은 값을 앞에 나열 , 두 수 비교하기.
//  A > B 비교하여 A가 더크면 A 와 B의 위치를 변경/스왑 
// (5) 조건 : num1 > num2 , num1 > num3 , num2 > mum3 
// let num1 = Number( prompt("정수1 : ") )
// let num2 = Number( prompt("정수2 : ") )
// let num3 = Number( prompt("정수3 : ") )
// let numList = [ num1 , num2 , num3 ]
// let temp;   // 임시변수 선언  
// if( numList[0] > numList[1] ){ // 첫번재 값이 두번째 값보다 크면 ( 스왑/교체 ) , >:오름차순 , <:내림차순
//     temp = numList[0];          // 임시변수에 첫번째 값을 넣고 
//     numList[0] = numList[1];    // 첫번째 위치에 두번째 값을 넣고 
//     numList[1] = temp;          // 두번째 위치에 임시변수(첫번째값) 값을 넣고
// } 
// // else if [x] : 다수 조건에 따른 다수처리(스왑) 해야 하므로 안됨.
// if( numList[0] > numList[2] ){   // 첫번째 값이 세번째 값보다 크면 ( 스왑/교체 )
//     temp = numList[0];      numList[0] = numList[2];    numList[2] = temp;
// }
// if( numList[1] > numList[2] ){  // 두번재 값이 세번째 값보다 크면 ( 스왑/교체 )
//     temp = numList[1];      numList[1] = numList[2];    numList[2] = temp;
// } 
// console.log( numList ); // 정렬 결과
// ★★★★★ 김현수 강사님 답안_250612 끝 ★★★★


// // (1) 사용자에게 값을 입력 받아 각각 변수에 저장하고
// let num01 = Number( prompt( '1. 정수 입력:' ) );
// let num02 = Number( prompt( '2. 정수 입력:' ) );
// let num03 = Number( prompt( '3. 정수 입력:' ) );

// // (2) 입력받은 값을 배열에 저장한다. 
// let numList = [ num01, num02, num03 ];

// // (3) 먼저 각 인덱스 값이 큰 조건을(논리 연산) 파악한다.
// // 코드를 구현하기 전에 먼저 생각을 하고, 구현 데이터와 구현방법(풀이식)과 조건을 기술한 다음에 코드 작성할것!!!
// // [0] > [1] 비교
// // [0] > [2] 비교
// // [1] > [2] 비교
// // (3) 배열 값의 위치(정렬)을 바꾼다. 
// // (3) 이 때 저장된 배열의 값을 스왑(교환)처리하여(temp라는 임시 변수를 활용한다.
// let temp; // 조건에 관련없는 임시 변수 먼저 선언
// if( numList[0] > numList[1] ){  
//     temp = numList[0];
//     numList[0] = numList[1];
//     numList[1] = temp;
//  }
// if( numList[0] > numList[2] ){  
//     temp = numList[0];
//     numList[0] = numList[2];
//     numList[2] = temp;
//  }
// if( numList[1] > numList[2] ){  
//     temp = numList[1];
//     numList[1] = numList[2];
//     numList[2] = temp;
//  }
// console.log( numList );

// 문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
// 입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
// 규칙:
// 가위(0)는 보(2)를 이깁니다.
// 바위(1)는 가위(0)를 이깁니다.
// 보(2)는 바위(1)를 이깁니다.
// 출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
// 플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.

// ==========================================

// let player1 =Number( prompt('player1. 숫자입력(0~2)') );
// let player2 =Number( prompt('player2. 숫자입력(0~2)') );

// // 비긴다(플레이어1) == (플레이어2)
// // (플레이어1) 승리 조건 
// // 이긴다(플레이어1) && 진다(플레이어2)
// // 승부 조건은 하나만 만족하면 이김 해당 조건이 아니면 상대의 승리!

// // 방법 1. 패턴 없이 조건을 파악하여 해당 규칙으로 구문 작성
// // 가위(0) && 보(2)
// // 바위(1) && 가위(0)
// // 보(2)   && 바위(1)

// if( player1 == player2 ){
//     console.log( '무승부' )
// }else if( player1 == 0 && player2 == 2 ||
//         player1 == 1 && player2 == 0 ||
//         player1 == 2 && player2 == 1  ){
//     console.log( '플레이어1 승리' );
// }else{
//     console.log( '플레이어2 승리' );
// }


// 방법 2. 좌우 데이터 각각과 둘 연계하여 패턴을 찾기
// 플레이어1은 0, 1, 2 ==> 순차 오름차순(+1) 패턴 됨
// 플레이어2는 2, 0, 1 ==> 플레이어1 기준으로 아님 플레이어2 기준으로 산수 규칙 머리 굴려 볼 것 
// 플레이어 값(0) == (플레이어 값(2) + 1) % 3
// ==========================================



// 문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다. 두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = [ '250어7142', '142가7415', '888호8888' ];
// 주차 위치 목록: let locationArray = [ 'A1', 'B3', 'C2' ];
// 사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오. 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.


// 문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요. 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.