// [ 실습6 ] 중첩 for문 : 250613(금)
/* --------------------------------------------------------------------------------------
문제 1: 배열에서 최댓값 찾기
주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)
let numbers = [23, 5, 67, 12, 88, 34];
*/

// // 1. 가져올 데이터를 정의한다.   
// let numbers = [23, 5, 67, 12, 88, 34];

// // 2. 문제가 요구하는 최종 결과(반환할 값) 변수를 정의한다.  
// let max = 0;

// // 3. 문제 풀이 방법을(제약 조건) 기술한다. 
// // 4. 패턴이 보이면 해당 패턴을 정의(코딩/콘솔로 찍어보기)한다.
// //    - 큰수 찾기는 swap을 활용하여 배열의 인덱스 값을 max에 대입
// //    - if(numbers[0] > numbers[1]){ numbers[0] = numbers[1] }
// //    - 위의 패턴이 반복이 되니 for문 사용

// for( index = 0; index <= numbers.length -1; index++ ){ // 배열은 인덱스 반복
//     if( max < numbers[index] ){ // 배열의 값이 최대값 보다 크다면 
//         max = numbers[index];   // 배열의 인덱스값을 max로 대입
//     }
// }
// console.log( max );             // max 출력

/* --------------------------------------------------------------------------------------
문제 2: 별 찍기 (기본 역삼각형)
for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
*****
****
***
**
*
---*/

// // 1. 별을 출력할 공간 정의(html)
// // 2. 패턴 분석 
// // - 반복 행(row) : +1 / 반복 열(colmn) : -1 / 반복횟수: 5회 / 반복 출력 데이터: * 

// let starShape = ''; // html 문자열로 출력
// for( let row = 5; row >= 1; row-- ){
//     starShape += ` <div> `;
//     for( let colmn = row; colmn >= 1; colmn-- ){
//         starShape += ` <span>*</span> `;
//     }
//     starShape += ` </div> `;
// }
// document.write( starShape );

/* --------------------------------------------------------------------------------------
// 문제 3: 배열에서 특정 문자 찾기 (break 활용)
// 다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
// let userNames = ['김하준', '이서아', '박솔민', '최도윤'];
// 힌트: 문자열의 .indexOf() 메소드를 사용하세요.
 */

// let userNames = ['김하준', '이서아', '박솔민', '최도윤'];

// // '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면,
// // 1. userNames 배열에서 각각 사용자를 분리 : for문 - 꼭 중간 과정 console 찍어서 확인(테스트) 할 것.
// // 2. 이름에서 '솔' 값과 일치하는 것 찾으면 : if문
// // 3. 해당 사용자의 이름을 출력하고 반복문을 종료

// for( let index = 0; index <= userNames.length - 1; index++ ){
//     let name = userNames[index]; // 뽑아내는 데이터는 변수로 선언 할 것. 
//     //console.log( name );
//     //console.log( name.indexOf('솔') == 1 );
//     if( name.indexOf('솔') == 1 ){
//         console.log( name );
//         break;
//     }
// }

/* --------------------------------------------------------------------------------------
문제 4: 2차원 배열의 모든 요소 출력하기
다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];
*/

// let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']];

// // 모든 좌석의 값을 순서대로 출력
// // 1. seatLayout배열의 요소 출력 : 반복 for문(배열이니 인덱스 활용) / 변수 seat 정의
// // 2. seat 배열에서 요소(값) 출려 : 반복 for문 / 변수 seatNum 정의

// // seatLayout배열 인덱스 번호만큼(seatLayout배열.length - 1) 반복하여 요소(값)을 출력
// for( let index = 0;  index <= seatLayout.length - 1; index++ ){ 
//     //console.log( seatLayout[index] );
//     // 뽑아낸 값들(['A1', 'A2', 'A3'], ...)을 변수(seat)에 저장 
//     let seat = seatLayout[index];
//     // 변수(seat)의 인덱스만큼 반복하여 해당 요소(값)을 출력
//     for( let j = 0; j <= seat.length - 1; j++  ){
//         console.log( seat[j]);
//     }
// }

/* --------------------------------------------------------------------------------------
// 문제 5: 배열의 중복 요소 제거하기
// 주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
// let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
// 힌트: 새로운 배열을 만들고, for 반복문으로 기존 배열을 순회하며 새로운 배열에 해당 요소가 없을( .indexOf() == -1 ) 때만 추가(push())합니다.
*/

// let numbers = [1, 5, 2, 3, 5, 1, 4, 2];

// // 주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
// // 1. 새로운 배열 변수 선언
// let newNumber = [];
// // 2. numbers 배열에서 중복된 요소를 제거
// // - numbers 배열을 순회하며 중복값 찾기 : for 문
// // - 값이 없다면 (indexOf(numbers[index]) === -1)조건 각 인덱스 값과 비교 같다면 : if문
// //   if( numbers[0] == numbers[1] ){  }
// for( let index = 0; index <= numbers.length -1; index++ ){
//     if( newNumber.indexOf(numbers[index]) === -1 ){
//             console.log( newNumber.push(numbers[index]) );
//     }

/* --------------------------------------------------------------------------------------
// 문제 6: 버블 정렬 (Bubble Sort) 구현하기
// 주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
// let numbers = [5, 3, 4, 1, 2];
// 힌트: 중첩 for 반복문을 사용하며, 이웃한 두 요소를 비교하 위치를 바꿉니다.
*/

// let numbers = [5, 3, 4, 1, 2];

// for( index = 0; index <= numbers.length -1; index++ ){
//     for( j = 0; j <= numbers.length -1; j++ ){
//         if( numbers[index] < numbers[j]  ){
//             let temp;
//             temp = numbers[index]
//             numbers[index] = numbers[j]
//             numbers[j] = temp
//         }
//         console.log( numbers );
//     }
// }

/* --------------------------------------------------------------------------------------
문제 7: 재고 관리 시스템
두 개의 배열 products(상품 목록)와 stock(재고 수량)이 있습니다. 사용자로부터 구매할 상품명과 수량을 입력받아, 재고가 충분하면 "구매 완료!"를 출력하고 재고를 차감하세요. 재고가 부족하면 "재고가 부족합니다."를 출력합니다.
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
*/

// let products = ['볼펜', '노트', '지우개'];
// let stock = [10, 5, 20];

// let product = prompt( '구매할 상품명(볼펜, 노트, 지우개) :' ) 
// let qty = prompt( '구매수량 :' ) 

// if( products.indexOf(product) !== -1 ){ // 상품이 존재하면 
//     //console.log( selectStok - qty );
//     let selectStok = stock[ products.indexOf(product) ]
//     if( selectStok > qty ){
//         console.log( `구매 완료! (재고 : ${ selectStok - qty } )` ) // -= 빼기 할당연산자 사용해볼 것 
//     }else{
//         console.log( ` [${ product }] 재고가 부족합니다.` )
//     }
// }else{
//     alert( `상품명을 확인하세요!` )
// }

/* --------------------------------------------------------------------------------------
문제 8: 영화 평점 시각화하기
주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
(2). 구현 조건
for 반복문을 사용하여 모든 영화를 순회합니다.
각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
예시: 평점이 8점이면 ★★★★★★★★☆☆ (총 10개의 별)
영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
(3). HTML 출력 예시
히든페이스      ★★★★★★★★☆☆
위키드          ★★★★☆☆☆☆☆☆
글래디에이터2   ★★★★★★★☆☆☆
청설            ★★★★★★☆☆☆☆
*/

// let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
// let movieRatings = [8, 4, 7, 6];

// let html = []; // html 출력 배열 변수 정의
// //1. 일단 영화명과 평점을 추출한다
// for( index = 0; index <= movieNames.length - 1; index++ ){
//     html += ` <div> <span style="width:100px; display:inline-block;">${ movieNames[index] } </span>`
//     let black = movieRatings[index]
//     for( j = 0; j <= black; j++ ){
//         html += ` <span> ★  `;
//     }
//     for( let star = 0; star <= 10 - black; star++ ){
//         html += `  ☆ </span> `;
//     }
// }
// html += ` </div> `
// document.write( html )

/* --------------------------------------------------------------------------------------
문제 9: 좌석 예약 상태 표시하기
총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
각 좌석은 하나의 <div> 태그로 표시합니다.
좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석   
예약석 빈좌석
예약석 빈좌석
*/

// let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
// let html2 = [];
// for( i = 0; i <= seatStatus.length -1; i++ ){
//     let seat = seatStatus[i];
//     if( i % 2 === 0 ){
//      html2 += `<div>`
//         if( seat === '빈좌석' ){
//             html2 += `<span  style='color: blue;'> ${ seat }  </span>`;
//         }else{
//             html2 += `<span style='color: red;'> ${ seat } </span>`;
//         }
//     }else{
//         if( seat === '빈좌석' ){
//             html2 += `<span  style='color: blue;'> ${ seat }  </span>`;
//         }else{
//             html2 += `<span style='color: red;'> ${ seat } </span>`;
//         }
//         html2 += `</div>`
//     }
// }
// document.write( html2 );

// // 더 나은 답 : 2개로 반복되는 단순 if 조건문은 삼항식으로 간단히 변수 처리 가능하고 
// // 반복되는 구문도 변수가능하니 소스코드 줄여서 사용하자!!!!
// // let color = seat === '빈좌석' ? 'blue;' : 'red;'
// // let span = `<span  style='color: ${ color }'> ${ seat }  </span>`
// html2 ='==========================';
// for( i = 0; i <= seatStatus.length -1; i++ ){
//     let seat = seatStatus[i];
//     let color = seat === '빈좌석' ? 'blue;' : 'red;'
//     let span = `<span  style='color: ${ color }'> ${ seat }  </span>`
//     if( i % 2 === 0 ){
//      html2 += `<div> ${ span } `;
//     }else{
//         html2 += ` ${ span } </div>`
//     }
// }
// document.write( html2 );


// 문제 10: 주차 요금 정산하기
// 차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
// (1). 초기 데이터
// 차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
// let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
// let usageMinutes = [65, 30, 140, 420];
// (2). 요금 규정
// 기본 요금: 최초 30분까지 1,000원
// 추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
// 일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
// (3). 구현 조건
// for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
// 각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
// 계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
// HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
// (4). 출력 예시 (HTML)
// 250어7142: 65분 주차, 최종 요금: 3,000원
// 142가7415: 30분 주차, 최종 요금: 1,000원
// 888호8888: 140분 주차, 최종 요금: 6,500원
// 931나8234: 420분 주차, 최종 요금: 20,000원
// (힌트)
// 기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
// 추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
// 계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다.

let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];

let htmlParking = [];

for( i = 0; i <= carNumbers.length -1; i++){
    let car = carNumbers[i];
    let time = usageMinutes[i];

    let addCharge = parseInt((time - 30) / 10) * 500;
    let amount = 1000 + addCharge < 20000 ? 1000 + addCharge : 20000; // 기본 요금 1,000원, 최대요금 20,000원원
    let output = `<div>${ car }: ${ time }분 주차, 최종 요금: ${ amount }원</div>`
    
    htmlParking += ` ${ output } `;
}

document.write( htmlParking );