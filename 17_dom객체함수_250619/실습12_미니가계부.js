/*
[ 실습12 : 미니 가계부 페이지 ]
1. 목표
   - 사용자가 자신의 수입/지출 내역을 날짜, 항목, 금액으로 기록하고, 
   등록된 모든 내역을 한눈에 볼 수 있는 간단한 가계부 웹 페이지를 만듭니다.

2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 **'등록 영역'**과 
   그 결과를 보여주는 **'목록 영역'**으로 명확히 구분되어야 합니다.

   - 등록 영역:
      - 날짜 선택: 사용자가 내역의 날짜를 달력에서 직접 선택할 수 있어야 합니다.
      - 항목 입력: 사용자가 지출 또는 수입 항목의 내용을 텍스트로 자유롭게 입력할 수 있어야 합니다. 
      (예: "점심 식사", "교통비")
      - 금액 입력: 사용자가 금액을 숫자로 입력할 수 있어야 합니다.
      - 등록 버튼: 위 세 가지 정보를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

   - 목록 영역:
      -등록된 모든 가계부 내역을 보여주는 표가 있어야 합니다.
      - 표는 "날짜", "항목", "금액" 순서의 열로 구성되어야 합니다.

3. 핵심 기능
   - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 가계부 사용법을 쉽게 이해할 수 있도록 
      두 개의 예시 내역이 목록 표에 기본적으로 표시되어 있어야 합니다.

   - 내역 등록 기능:
      - 사용자가 '등록 영역'에 날짜, 항목, 금액을 모두 입력하고 "등록" 버튼을 클릭하면, 
      해당 내역이 '목록 영역' 표의 가장 아래쪽에 새로운 행으로 즉시 추가되어야 합니다.

   - 금액 자동 서식:
      - '목록 영역'에 표시되는 모든 금액은 사용자의 가독성을 위해 천 단위마다 쉼표(,)가 
      자동으로 표시되어야 합니다. (예: 4500이 입력되면 "4,500"으로 보여야 함)
      - 힌트] 변수명.toLocaleString()  :숫자를 세 자리마다 콤마(,)로 구분해주는 유용한 함수
---------------------------------------------------------------------------------------*/
// 01. 화면 설계(HTML)
// 02. 데이터 모델링
const 가계부목록 = [
    { 코드 : 1, 날짜 : '2026-06-18' , 항목명 : '뼈해장국' , 금액 : 10000 },
    { 코드 : 2, 날짜 : '2026-06-19' , 항목명 : '레모네이드' , 금액 : 2000 }
];
let 마지막인덱스 = 가계부목록.length -1;
let 코드자동번호 = 가계부목록[마지막인덱스].코드

// 03. 기능(함수 단위) 설계/구현

// 03-01. 등록 함수 
function 등록함수(){  // 1. 등록버튼 onclick 했을 때 함수 실행
    console.log( '<------ 등록 함수 exe ------>' );  // 2. 함수 onclick 확인
    // 3. 인풋 마크업 객체 가져오기
    let dateInput = document.querySelector('#dateInput');        console.log( dateInput ); 
    let contentInput = document.querySelector('#contentInput');  console.log( contentInput );
    let moneyInput = document.querySelector('#moneyInput');      console.log( moneyInput );

    let date = dateInput.value;          console.log( date );
    let content = contentInput.value;       console.log( content );
    let money = Number(moneyInput.value);         console.log( money );
    
    // 코드 자동번호에 1 증가한 후 대입
    코드자동번호++
    const obj = { 코드 : 코드자동번호, 날짜 : date , 항목명 : content , 금액 : money };  
    console.log( obj );

    가계부목록.push( obj );  console.log( 가계부목록 );
    // 7. 새로고침, 출력함수 재호출
    전체조회함수()
} // 등록 함수 func end

// 03-02. 조회 함수 
// 1. 실행조건 : 등록 성공 했을때, JS 열었을때(최초1번)
전체조회함수(); // JS 열렸을 때 바로 호출!
function 전체조회함수(){  
    console.log( '<------ 입력 함수 exe ------>' );  // 2. 함수 onclick 확인
    // 가계부목록 배열 순회
    
        // 배열 내 객체 1개당 <tr> 1개 
        // 어디에 : contentBody
        // 무엇을 : 배열 내 객체정보 1개
        // 어떻게 : HTML 풀력
    const contentBody = document.querySelector('#contentBody');   console.log( contentBody );
    let html = ''; 
    let sumMoney = document.querySelector('#sumMoney'); console.log( sumMoney )
    sum = 0; 
    for( let i = 0; i <= 가계부목록.length -1; i++ ){
        const obj = 가계부목록[i];     console.log( obj );
        html += `<tr>
                    <td> ${ obj.날짜 } </td>
                    <td> ${ obj.항목명 } </td>
                    <td> ${ obj.금액.toLocaleString() } </td>
                </tr>`
        sum += obj.금액;  console.log( sum )
    }
    contentBody.innerHTML = html;
    sumMoney.innerHTML = sum.toLocaleString();    console.log( sum )
} // 등록 함수 func end

