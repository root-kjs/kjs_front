/* [실습14: 제품 관리 페이지] 250620(금) - 상품관리(CRUD) + R(카테고리명 출력함수)/U/D---> 매개변수 활용하여 함수호출!!!
1. 목표
    사용자가 카테고리, 제품명, 가격, 이미지를 포함한 제품 정보를 등록하고, 등록된 모든 제품을 표 형태로 한눈에 확인하며 관리할 수 있는 웹 페이지를 제작합니다.

2. 화면 구성
    페이지는 사용자가 정보를 입력하는 **'제품 등록 영역'**과 등록된 결과를 보여주는 **'제품 목록 영역'**으로 명확히 구분되어야 합니다.

    1) 제품 등록 영역 (<div id="header">):
        - 카테고리 선택: 미리 정의된 카테고리 목록에서 제품의 분류를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다. (예: '음료', '과자')
        - 제품명 입력: 등록할 제품의 이름을 텍스트로 입력할 수 있어야 합니다. (예: "코카콜라")
        제품 가격 입력: 제품의 가격을 숫자로 입력할 수 있어야 합니다. (예: 1000)
        - 제품 이미지 입력: 제품의 사진을 사용자의 컴퓨터에서 파일 형태로 선택하여 첨부할 수 있어야 합니다.
        - 등록 버튼: 모든 정보를 입력한 후, 목록에 제품을 추가하기 위한 "등록" 버튼이 있어야 합니다.

    2) 제품 목록 영역 (<div id="main">):
        - 등록된 모든 제품 정보를 보여주는 표(테이블)가 있어야 합니다.
        - 표는 "이미지", "카테고리명", "상품명", "가격", "등록일", "비고" 순서의 열로 구성되어야 합니다.
        - 각 제품 항목(행)마다 해당 제품을 관리할 수 있는 "삭제" 버튼과 "수정" 버튼이 포함되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        - 사용자가 페이지에 처음 방문했을 때, 카테고리 선택 메뉴에는 두 개의 예시 카테고리('음료', '과자')가 기본적으로 표시되어 있어야 합니다.
        제품 목록 표에는 사용법을 쉽게 이해할 수 있도록 네 개의 예시 제품이 기본적으로 표시되어 있어야 합니다.

    제품 등록 기능:
        - 사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.
        제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.
        첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지가 대신 표시되어야 합니다.

    제품 관리 기능:
        삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
        수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
-----------------------------------------------------------------------------------
[ 작업순서 ]
01. 요구사항 분석 + 화면스케치(프로토타입)
02. 화면설계(html, css)
03. 데이터 모델링
04. 기능(함수) 설계
05. 구현/로직
06. 테스트
-----------------------------------------------------------------------------------*/

/* ========================== < 03. 데이터 모델링 > =============================== */

// 1.상품 카테고리 배열
const categryList = [ { cno : 1 , cname : '음료류' }, { cno : 2 , cname : '과자류' } ];
console.log( categryList ); // 데이터 확인!

// 2.상품 배열
let noImg = '//placehold.co/100x100'; // 상품 이미지 없는 경우 : //placehold.co/100x100
const productList = [ 
    { pno : 1 , cno : 1 , pname : '코카콜라' , pprice : 1000 , pimg : noImg , pdate : '2025-06-17' }, 
    { pno : 2 , cno : 2 , pname : '새우깡' , pprice : 800 , pimg : noImg , pdate : '2025-06-18' },
    { pno : 3 , cno : 2 , pname : '오징어땅콩' , pprice : 1500 , pimg : noImg , pdate : '2025-06-18' }
];
let currenrPno = 3; // 상품번호(pno) 자동코드 초기화 
console.log( productList ); // 데이터 확인!



/* ========================== < 04. 기능(함수) 설계 > ============================== */

/* ★★★---------------> (04-1) 상품 카테고리(전체) 출력함수 <---------------------- */
// 기능정의 : 카테고리명을 html > <select>에 출력
// 실행조건 : 1.해당 HTML/JS 열렸을 때 
function categoryPrint(){ console.log( '<--- 상품 카테고리 출력함수(categoryPrint) exe --->' );//

    // 어디에 실행? <select id="categoryInput">
    const categoryInput = document.querySelector( '#categoryInput' );   console.log( categoryInput );//

    // 무엇을 노출? 상품 카테고리 배열 > 객체 > 카테고리명(cname) html
    let html = '<option value="" disabled selected> 카테고리 선택</option>';

    for( let i = 0; i <= categryList.length -1; i++ ){
    const category = categryList[i];                                     console.log( category );//

        // value 에는 코드번호를 넣을 것!
        html += `<option value=" ${ category.cno } "> ${ category.cname } </option>`
    } // for end
    categoryInput.innerHTML = html;
} // categoryPrint() end


/* ★★★-----------------> (04-2) 상품 등록함수 <---------------------------------- */
// 기능정의 : 카테고리 목록 html > <select>에 출력
// 실행조건 : 1.해당 HTML/JS 열렸을 때, 2.상품등록 버튼을 클릭했을때

function productAdd(){  console.log( '<--- 상품등록(productAdd) exe --->' ); //
    /* 작업 순서*/
    /* (1) 입력 마크업 객체와 입력값 가져오기 */
    const cno = document.querySelector( '#categoryInput' ).value;       console.log( cno );//
    const pname = document.querySelector( '#pnameInput' ).value;        console.log( pname );//
    const pprice = document.querySelector( '#ppriceInput' ).value;      console.log( pprice );//
    const pimg = document.querySelector( '#pimgInput' ).files[0];       console.log( pimg ); //
    // .files[0] ---> 첨부파일은 선택된 첨부파일의 1번째 파일 객체를 가져오기

    // 현재 날짜 구하기 객체함수 --> new Date();
    let year = new Date().getFullYear(); // 현재 연도 반환 함수
    let month = new Date().getMonth() + 1; // 현재 월 반환 함수, 1월이 0부터 시작
        month = month < 9 ? `0${month}`: month;
    let day = new Date().getDate(); // 현재 일 반환

    let pdate = `${ year }-${ month }-${ day }`;  console.log( pdate );//

    /* (2) 유효성 검사 */
    if( cno == '' || pname == '' || pprice == '' || pdate == '' ){
        alert( '비어있는 항목이 있습니다.[실패]' );
        return; // 밤환값이 없는 함수 종료 : 이 아래의 함수 코드는 실행되지 않음
    }

    /* (3) 입력받은 값을 데이터 "객체"로 구성하기 */
    //{ pno : 1 , cno : 1 , pname : '코카콜라' , pprice : 1000 , pimg : noImg , pdate : '2025-06-17' }
    const obj = { 
        pno : ++currenrPno  , 
        cno : Number( cno ) , 
        pname : pname , 
        pprice : Number(pprice) , 
        pimg : pimg ? URL.createObjectURL( pimg ) : noImg ,
        pdate : pdate 
    }

    /* (4) 구성한 객체(obj)를 productList 배열에 저장 */
    productList.push( obj );  console.log( productList ); //

    /* (5) 기타 ( 등록 완료 후, 마크업 객체 value 초기화 ) */
    document.querySelector( '#categoryInput' ).value = '';
    document.querySelector( '#pnameInput' ).value = '';
    document.querySelector( '#ppriceInput' ).value = '';
    //cno = ''; pname = ''; pprice = ''; // **주의!! 얘는 변수를 초기화하는거라 조심...걍 선택자 변수 선언할 것.
    alert( '상품등록 [성공]' );

    /* (6) 상품 등록을 성공했을 때 상품목록에 해당 등록내용 바로 반영 */
    productPrint();
    
} // productAdd() end

/* ★★★-----------------> (04-3) 상품목록 출력함수 <---------------------------------- */
    // 기능정의 : 상품목록 전체를 html에 출력
    // 실행조건 : 1.해당 HTML/JS 열렸을 때, 2.상품등록/수정/삭제가 성공적으로 완료됐을 때
productPrint();
function productPrint(){  console.log( '<--- 상품목록 출력함수(productPrint) exe --->' ); //

    const tbody = document.querySelector( '#main > table > tbody' );

    let html ='';
    for( let i = 0; i <= productList.length -1; i++ ){ // 상품 배열 순회
        let product = productList[i];
       
        //{ pno : 3 , cno : 3 , pname : '오징어땅콩' , pprice : 1500 , pimg : noImg , pdate : '2025-06-18' }
        html += `<tr>
                    <td><img src="${ product.pimg }" /></td>
                    <td>${ getCategory( product.cno ) }</td>
                    <td>${ product.pname }</td>
                    <td>${ product.pprice.toLocaleString() }</td>
                    <td>${ product.pdate }</td>
                    <td>
                        <button onclick="productDelete( ${product.pno} )" class="btnDelete"> 삭제 </button>
                        <button onclick="productEdit( ${product.pno} )" class="btnEdit"> 수정 </button>
                    </td>
                </tr>` // 텝플릿 리터럴(그냥 쓰면 다 문자열로 처리된다.) !!! 백틱주의 : 변수는 ${} 
    }
    tbody.innerHTML = html;
} // productPrint() end.


/* ★★★-----------------> (04-4) 상품목록 > 해당 카테고리명 호출함수 <----------------- */
// [ { cno : 1 , cname : '음료류' }, { cno : 2 , cname : '과자류' } ];
function getCategory( cno ){  console.log( '<--- 카테고리명 출력함수(getCategory) exe --->' ); //
    ///★ 매개변수 : cno
    for( let i = 0; i <= categryList.length -1; i++ ){ // 카테고리명을 가져오기 위해, 카테고리 배열 순회
        const category = categryList[i];        console.log( category );  //
        if( categryList[i].cno == cno ){
           return categryList[i].cname;
        }
    }
    return null;
} // getCategory() end


/* ★★★-----------------> (04-5) 상품 삭제함수 <----------------------------------------- */
// : 배열 내 삭제할 객체를 찾아서 ".splice" 한다. 
//★ 매개변수 : 상품코드( 주의!! 아래의 매개변수는 임의 선언! 수정/삭제 버튼의 ${product.pno}의 해당 인수값을 가져오는 것임.)
function productDelete( pno ){  console.log( '<--- 상품 삭제함수(productDelete) exe --->' ); //
    console.log( pno ); //
    
    /* (1) 삭제할 배열내 상품객체를 찾는다. */
    for( let i = 0; i <= productList.length -1; i++ ){ // 상품 배열 순회
        let product = productList[i];

        if( pno == product.pno ){
            productList.splice( i , 1 );
            
            alert( '상품 삭제 [성공]' );
            /* (2) 삭제 이후 상품목록 새로고침(렌더링) */
            productPrint();
            return; // 목표 달성했으니, 함수 종료! 리턴은 함수 종료.
            //break; // 주의!!! 브레이크는 가까운 포문 밖으로 간다. 

            // if( confirm( '상품 삭제하시겠습니까?' )){
            //     productPrint();
            //     return; // 목표 달성했으니, 함수 종료! 리턴은 함수 종료.
            // }else{
            //     return; 
            // }
        }
    }
    /* (3) 상품을 못찾을 경우 */
    alert( '[오류] 상품 번호 불일치!' );
} // productDelete() end


/* ★★★-----------------> (04-6) 상품 수정함수 <---------------------------------- */
//★ 매개변수 : 상품코드( 주의!! 아래의 매개변수는 임의 선언! 수정/삭제 버튼의 ${product.pno}의 해당 인수값을 가져오는 것임.)
function productEdit( pno ){  console.log( '<--- 상품 수정함수(productEdit) exe --->' ); //
     console.log( pno ); //

    /* (1) 수정할 배열내 상품객체를 찾는다. */
    for( let i = 0; i <= productList.length -1; i++ ){ // 상품 배열 순회
        let product = productList[i];

         if( pno == product.pno ){
            const pname = prompt( `"${ product.pname }" → 수정할 상품명을 입력하세요.` ); 
            const pprice = prompt( `"${ product.pprice.toLocaleString() }" → 수정할 상품가격을 입력하세요.` ); 
            product.pname = pname;
            product.pprice = Number(pprice);

            /* (2) 유효성 검사 */
            // if( cno == '' || pname == '' || pprice == '' || pdate == '' ){
            //     alert( '비어있는 항목이 있습니다.[실패]' );
            //     return; // 밤환값이 없는 함수 종료 : 이 아래의 함수 코드는 실행되지 않음
            // }

            alert( '상품 수정 [성공]' );
            /* (2) 수정 이후 상품목록 새로고침(렌더링) */
            productPrint();
            return; // 목표 달성했으니, 함수 종료! 리턴은 함수 종료.
            //break; // 주의!!! 브레이크는 가까운 포문 밖으로 간다. 
        }
    }
    /* (3) 상품을 수정 못한 경우 */
    alert( '[실패] 상품 수정' );
}
