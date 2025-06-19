/* [실습8] 250616(월월)
문제 1: prompt로 제품 정보 객체 만들기
prompt를 세 번 사용하여 사용자로부터 '제품명', '가격', '제조사'을 순서대로 입력받습니다. 
입력받은 정보로 하나의 product 객체를 생성하고, 생성된 객체를 콘솔에 출력하시오.
---------------------------------------------------------------------------*/
// let produt = prompt( '제품명' );
// let price = Number(prompt( '가격' ));
// let brand = prompt( '제조사' );

// console.log( { produt, price, brand } )

/* 문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현
prompt를 세 번 사용하여 사용자로부터 '아이디', '비밀번호', '이름'을 순서대로 입력받습니다.
입력받은 정보로 하나의 member 객체를 생성하고, members 배열에 저장하여 배열을 콘솔에 출력하시오.
단] 입력받은 아이디가 이미 배열에 존재하면 '존재하는 아이디 입니다'를 출력하고 배열에 등록하지 않습니다. --> 유효성 검사
const members = [
  { id: 'user1', password: 'pass1', name: '사용자1' },
  { id: 'user2', password: 'pass2', name: '사용자2' },
];
---------------------------------------------------------------------------*/
// ★★★★ 문제 풀이의 순서도를 반/드/시/ 작성할 것!!!! ★★★★
// 1. prompt를 세 번 사용하여 사용자로부터 '아이디', '비밀번호', '이름'을 순서대로 입력
// let id = prompt( '아이디' );
// let password = prompt( '비밀번호' );
// let name = prompt( '이름' );

// const members = [
//   { id: 'user1', password: 'pass1', name: '사용자1' },
//   { id: 'user2', password: 'pass2', name: '사용자2' },
// ];

// const menber = { id, password, name };
// // console.log( menber ); 
// // 입력받은 정보로 하나의 member 객체를 생성하고, members 배열에 저장하여 배열을 콘솔에 출력하시오.
// // 입력받은 아이디가 이미 배열에 존재하면 '존재하는 아이디 입니다'를 출력하고 배열에 등록하지 않습니다

// let idCheck = false;
// for( let i = 0; i <= members.length - 1; i++ ){
//   let member = members[i];
//   if( member.id == id ){
//     idCheck = true;
//     break;
//   }
// } //for end

// if( idCheck == false ){
//   members.push( menber );
//   console.log( members );
// }else{
//   alert('존재하는 아이디입니다.')
// }

/* 문제 3: 객체 배열의 속성 값 평균 구하기
scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오.
const scores = [
  { name: 'A', math: 80, science: 92 },
  { name: 'B', math: 95, science: 88 },
  { name: 'C', math: 76, science: 78 }
];
---------------------------------------------------------------------------*/
// const scores = [
//   { name: 'A', math: 80, science: 92 },
//   { name: 'B', math: 95, science: 88 },
//   { name: 'C', math: 76, science: 78 }
// ];

// let sumMath = 0;
// for( let i = 0 ; i <= scores.length - 1; i++ ){
//   let student = scores[i];
//   //console.log(student.math)
//   sumMath += student.math;
// }

// let avg = sumMath / scores.length
// console.log( avg ); 


/* 문제 4: 특정 조건을 만족하는 객체 찾기
products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오. 일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다.
const products = [
  { id: 1, name: '사과' },
  { id: 2, name: '바나나' },
  { id: 3, name: '포도' },
  { id: 4, name: '딸기' }
];
---------------------------------------------------------------------------*/

// const products = [
//   { id: 1, name: '사과' },
//   { id: 2, name: '바나나' },
//   { id: 3, name: '포도' },
//   { id: 4, name: '딸기' }
// ];

// let idCheck = false;
// let index;
// for( let i = 0; i <= products.length - 1; i++){
//   let product = products[i];
//   if(  product.id  === 3 ){
//     idCheck = true;
//     console.log( product );
//     break;
//   } 
// } // for end

// if( idCheck == false ){
//   console.log( '상품을 찾을 수 없습니다.' );
// }


/* 문제 5: 객체 배열 필터링하기
users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오.
const users = [
  { id: 1, name: '유저1', isActive: true },
  { id: 2, name: '유저2', isActive: false },
  { id: 3, name: '유저3', isActive: true },
  { id: 4, name: '유저4', isActive: false }
];
---------------------------------------------------------------------------*/
// const users = [
//   { id: 1, name: '유저1', isActive: true },
//   { id: 2, name: '유저2', isActive: false },
//   { id: 3, name: '유저3', isActive: true },
//   { id: 4, name: '유저4', isActive: false }
// ];
// //isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오
// const activeUsers = [];
// for( let i = 0; i <= users.length - 1; i++){
//   let user = users[i];
//   console.log( user.isActive );
//   if( user.isActive == true ){
//       activeUsers.push(user);
//   }
// } // for end
//  console.log(  activeUsers );


/* 문제 6: 객체 배열 데이터 변환하기
movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오.
const movies = [
  { title: '인셉션', director: '크리스토퍼 놀란' },
  { title: '기생충', director: '봉준호' },
  { title: '매트릭스', director: '워쇼스키 자매' }
];
---------------------------------------------------------------------------*/
// const movies = [
//   { title: '인셉션', director: '크리스토퍼 놀란' },
//   { title: '기생충', director: '봉준호' },
//   { title: '매트릭스', director: '워쇼스키 자매' }
// ];

// const movieTitles = [];
// for( let i = 0; i <= movies.length -1; i++ ){
//   let movie = movies[i];
//   //console.log( movie.title )
//   movieTitles.push(movie.title) 
// }
// console.log( movieTitles )

/* 문제 7: 데이터 그룹화하기
다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오.
const team = [
  { name: '철수', department: '개발팀' },
  { name: '영희', department: '기획팀' },
  { name: '민수', department: '개발팀' },
  { name: '지혜', department: '기획팀' }
];
// 최종 결과 형태 (result)
// {
//   '개발팀': ['철수', '민수'],
//   '기획팀': ['영희', '지혜']
// }
---------------------------------------------------------------------------*/

const team = [
  { name: '철수', department: '개발팀' },
  { name: '영희', department: '기획팀' },
  { name: '민수', department: '개발팀' },
  { name: '지혜', department: '기획팀' } 
];

let result = {  }; 
for( let i = 0 ; i <= team.length - 1 ; i++ ){
    
    if( result[ team[i].department ] ){
      result[ team[i].department ].push(team[i].name); // 객체 표현의 기본문법 숙지 할 것!
    }else{
      result[ team[i].department ] = [team[i].name]; // team 객체의 department속성값을 result속성명으로 대체하고 배열로 속성값을 받음
    }
}
console.log( result );

/* 문제 8: 장바구니 총액 계산하기 
고객의 장바구니 정보를 담은 cart 배열과 상품 정보를 담은 productsInfo 배열이 있습니다.
cart 배열: 각 요소는 고객이 담은 상품의 id와 quantity(수량)를 가집니다.
productsInfo 배열: 각 요소는 상품의 고유 id와 price(가격)를 가집니다.
cart 배열을 기준으로, 장바구니에 담긴 모든 상품의 총 결제 금액을 계산하여 콘솔에 출력하세요.
const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
const productsInfo = [
  { id: 1, price: 1000 },
  { id: 2, price: 5000 }, // 장바구니에 없는 상품
  { id: 3, price: 2500 }
];
---------------------------------------------------------------------------*/
const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
const productsInfo = [
  { id: 1, price: 1000 },
  { id: 2, price: 5000 }, // 장바구니에 없는 상품
  { id: 3, price: 2500 }
];

// cart 배열을 기준으로, 장바구니에 담긴 모든 상품의 총 결제 금액을 계산하여 콘솔에 출력하세요.
let carSum = 0;
for( let i = 0; i <= productsInfo.length -1; i++ ){ // 1. 상품 배열 순회

  for( let j = 0; j <= cart.length -1; j++ ){ // 2. 장바구니 배열 순회

    if( productsInfo[i].id == cart[j].id ){
      //console.log(productsInfo[i].price);
      carSum += productsInfo[i].price
    }
  } //for2 end
}//for1 end

console.log( ` 장바구니 총 결제금액: ${carSum} ` )

/* 문제 9: 투표 결과 집계하기
다음 votes 배열은 투표 결과를 나타냅니다. 각 후보가 몇 표를 받았는지 집계하여, 후보의 이름이 키이고 득표수가 값인 객체를 만들어 콘솔에 출력하시오.
const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
출력 예시: { A: 3, B: 3, C: 1 }
---------------------------------------------------------------------------*/
const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
// 각 후보가 몇 표를 받았는지 집계하여, 
// 후보의 이름이 키이고 득표수가 값인 객체를 만들어 콘솔에 출력하시오.

let resultVote = {};
let count = 0;
for( let i = 0; i <= votes.length - 1; i++ ){
  resultVote[votes[i]] = '';
}
// console.log( resultVote );
console.log( Object.keys( resultVote ) );
let man = Object.keys( resultVote );
for(  let i = 0; i <=  man.length - 1; i++  ){
  
}


/* 문제 10: 웹툰 평점 시각화하기
webtoons 배열의 데이터를 이용하여, 각 웹툰의 평점을 별(★, ☆)로 시각화하여 HTML에 출력하시오.
조건 1: 평점(rating)은 10점 만점입니다.
조건 2: 평점의 정수 부분만큼 꽉 찬 별(★)을, 10 - 정수 만큼 빈 별(☆)을 출력합니다. (예: 평점이 8.5이면 ★ 8개, ☆ 2개)
조건 3: HTML에 웹툰 제목과 변환된 별점을 한 줄씩 출력합니다.
const webtoons = [
  { title: '나 혼자만 레벨업', rating: 9.8 },
  { title: '유미의 세포들', rating: 9.9 },
  { title: '전지적 독자 시점', rating: 9.7 }
];
 HTML 출력 예시:
   나 혼자만 레벨업 ★★★★★★★★★☆
   유미의 세포들 ★★★★★★★★★☆
   전지적 독자 시점 ★★★★★★★★★☆
---------------------------------------------------------------------------*/

/* 문제11 : 공공데이터 포털 : 인천 부평구 맛집 현황 테이블 만들기
[구현 조건]
  1. 공공데이터 포털에서 '인천광역시 부평구_맛있는 집(맛집) 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.
  let response = {}
  2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.
  3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.
  4. 테이블의 각 셀에는 '업 소 명', '세대수', '소재지', '지정메뉴', '전화번호','업태' 정보가 순서대로 포함되어야 합니다.
  5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.
[ 공공데이터 open API 신청 ]
  1. 공공데이터 포털 : https://www.data.go.kr
  2. 회원가입/로그인
  3. '부평구 맛집' 검색
  4. '인천광역시 부평구_맛있는 집(맛집) 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.
  5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )
  6. 인증키 설정 후 'API 목록' 에서  [Open Api 호출] 합니다.
  7. **실행 결과(JSON)**를 전체 복사합니다.  
---------------------------------------------------------------------------*/