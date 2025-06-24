/*3.
관리자가 제품의 재고 변동 내역을 추적하고 관리할 수 있는 기능을 정의합니다.
요구사항에 맞게 데이터모델링 과 샘플 데이터를 구성합니다.  ( localStorage 아직 사용하지 않기 )

재고 입고 (Inventory Inflow / Stock In)
기능: 특정 제품의 재고를 증가시키기 위한 입고 내역 기록.
입력 필드: 재고ID(자동), 제품 ID, 변동 유형 ('입고/출고') , 변동 수량, 입출사유 ,  변동날짜(오늘날짜 자동).
동작:  성공/실패 메시지

전체 재고 로그 조회 (View All Inventory Logs)
기능: 시스템에 기록된 모든 재고 변동 내역을 표 형태로 조회.
표시 항목: 로그 ID, 제품 ID, 제품명, 변동 유형 ('입고/출고'), 변동 수량, 변동 날짜/시간, 비고.
동작: 로그 없을 시 메시지 표시.

재고 내역 수정 (Modify Inventory History)
기능: 입출사유 수정.
입력/선택: 재고 로그 목록에서 선택, 
동작: 성공/실패 메시지, 로그 목록 업데이트.
*/

//=============================제품 등록 함수=============================
// 실행조건 : 제품 등록 버튼이 눌렸을 때
function StockRegistration() {
    console.log('----StockRegistration----');
    // 1. 무엇을 : 입력받은 값들을
    // 1-1. 입력 마크업 객체 가져오기
    const stockInput = document.querySelector('#stockInput');           // console.log( stockInput );
    const stockTypeInput = document.querySelector('#stockTypeInput');   // console.log( stockTypeInput );
    const stockCountInput = document.querySelector('#stockCountInput'); // console.log( stockCountInput );
    const stockCuzInput = document.querySelector('#stockCuzInput');     // console.log( stockCuzInput );

    // 1-2. 입력 마크업 객체의 입력값 가져오기
    const stock = stockInput.value; console.log(stock);
    const stockType = stockTypeInput.value; console.log(stockType);
    const stockCount = stockCountInput.value; console.log(stockCount);
    const stockCuz = stockCuzInput.value; console.log(stockCuz);
    // 1-3. 유효성 검사
    if (stock == '' || stockType == '' || stockCount == '') {
        alert('[오류] 비어있는 항목이 있습니다.');
        return;                         // 반환값 없는 함수 종료             
    }

    let sno = stockList.length == 0 ? 1 : stockList[stockList.length - 1].sno + 1;

    // 2. 어디에 : 제품 목록에
    console.log(stock);
    let pNum = getProductName(stock);
    console.log(pNum)
    // stype 얻는 함수
    let stype = stockType == '입고' ? true : false;
    console.log(stype);

    // 2-1. 입력값들 객체화하기
    const obj = {
        sno: sno++,
        pno: pNum,
        stype: stype,
        scount: stockCount,
        scuz: stockCuz
    }; console.log(obj);
    // 2-2. 객체를 리스트에 넣기
    stockList.push(obj);
    let jsonData = JSON.stringify(stockList)
    localStorage.setItem('stockList', jsonData)
    console.log(stockList);
    stocksList();
    // 재고 목록 업데이트 함수 넣기

    alert('재고 등록 성공')
};

//=============================변동명 옵션 함수=============================
// 실행조건 : 페이지가 열릴 때, 제품이 등록/삭제 되었을 때
stockTypeOption();
function stockTypeOption() {
    // console.log('----stockTypeOption----');
    let html = `<option disabled selected> 제품명 </option>`;
    // html 넣을 객체 가져오기
    let stockInput = document.querySelector('#stockInput');
    // console.log( stockInput );
    for (let i = 0; i <= productList.length - 1; i++) {
        let stock = productList[i];
        // console.log( stock );
        html += `<option>
                    ${stock.pname}
                </option>`
    }
    stockInput.innerHTML = html;
}

//=============================제품 ID 옵션 함수=============================
// 실행조건 : 페이지가 열릴 때
// 입고 유형
let stype = true;
stockOption();
function stockOption() {
    console.log('----stockOption----');
    let html = `<option disabled selected> 변동유형 </option>`;
    // html 넣을 객체 가져오기
    let stockTypeInput = document.querySelector('#stockTypeInput');
    console.log(stockTypeInput);
    html += `<option>입고</option>
            <option>출고</option>`
    stockTypeInput.innerHTML = html;
    productsList();  // 제품 목록함수
};

// 제품이름출력 + 제품코드출력 함수

function getProductName(product1) {
    for (let i = 0; i <= productList.length - 1; i++) {
        let product = productList[i];
        if (product1 == product.pno) {
            return product.pname;
        }
        if (product1 == product.pname) {
            return product.pno;
        }
    }
};

// //=============================제품코드로 제품이름 출력 함수=============================
// // 매개변수 : pno

// function getProductName(pno) {
//     for (let i = 0; i <= productList.length - 1; i++) {
//         let product = productList[i];
//         if (pno == product.pno) {
//             return product.pname;
//         }
//     }
// };
// //=============================제품이름으로 제품코드 출력 함수=============================
// // 매개변수 : pname
// function getProductNum(pname) {
//     for (let i = 0; i <= productList.length - 1; i++) {
//         let product = productList[i];
//         if (pname == product.pname) {
//             return product.pno;
//         }
//     }
// }

//=============================입고유형으로 true/false 출력 함수=============================
function getstype(boolean) {
    // 입력값 객체 가져오기
    let stockTypeInput = document.querySelector('#stockTypeInput');
    let stockType = stockTypeInput.value;
    let stype = boolean == '입고' ? true : false;
    return stype;
}

// 2. 재고로그목록 출력함수
stocksList();
function stocksList() {
    console.log('재고로그목록 출력함수 >>  stockList(); exe');
    // 1/2. 마크업 객체/ 입력값 가져오기
    const tbodyStock = document.querySelector('#stockTable tbody'); console.log(tbodyStock);

    // 3. 상품명 추출과 제고 정보 데이터를 조회하기 위한 배열 순회
    htmlStock = '';
    for (let i = 0; i <= stockList.length - 1; i++) {  // 재고 배열
        let stock = stockList[i]; console.log(stock);

        let pStockName = '';
        for (let i = 0; i <= productList.length - 1; i++) { // 상품 배열
            let product = productList[i]; console.log(product);

            if (product.pno === stock.pno) { // 재고 배열과 상품 배열의 상품 ID가 같다면 상품명 호출하여 pStockName 대입
                pStockName = product.pname; console.log(product.pname);
            }
        }

        htmlStock += `<tr>
                    <td> ${pStockName} </td>
                    <td> ${stock.stype ? '입고' : '출고'} </td>
                    <td> ${Number(stock.scount).toLocaleString()}  </td>
                    <td> ${stock.scuz}  </td>
                    <td> <button onclick="stockEdit( ${stock.sno})" > 입출사유변경 </button> </td>
                </tr>`

    }
    tbodyStock.innerHTML = htmlStock;
    // productRegistration(); // 재고로그 등록함수 호출
    // stockEdit(sno); // 선택제품 함수 수정함수 호출

} // productList(); end


// 3. 재고로그목록 > 입출사유변경 수정 함수

function stockEdit(sno) {   // 재고 코드를 매개함수로 입력하기
    console.log(`stockEdit XXOK`)   // 확인
    console.log(sno);
    // (1) 재고 입출사유 수정할 번호의 객체를 찾는다. for문에서 if문으로 재고 코드가 찾는 재고 코드와 같은지 확인하기
    for (let i = 0; i <= stockList.length - 1; i++) {
        let stock = stockList[i];
        if (stock.sno == sno) {    // 재고리스트 인덱스의 재고 코드가, 찾는 재고 코드와 같다면
            const scuz = prompt('변경된 입출사유를 입력하세요.');
            stock.scuz = scuz; // 프롬프트에 적은 문자열로 변경
            localStorage.setItem('stockList', JSON.stringify(stockList));
            alert('입출사유 수정 성공') // 안내
            stocksList(); // 재고 로그 조회 새로고침
            return; // 함수 종료
        } // if end

    } // for end
    // (2) 입출사유 수정할 재고 번호가 없다면
    alert('없는 재고 로그입니다.');

}   // func end

