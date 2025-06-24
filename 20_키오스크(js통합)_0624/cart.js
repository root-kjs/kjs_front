cartProductsList();
function cartProductsList() {
    // 1/2. 마크업 객체/ 입력값 가져오기
    const tbody = document.querySelector('#cartProductsTable tbody');
    console.log(tbody);

    // 3. 상품 배열 순회
    html = '';
    for (let i = 0; i <= productList.length - 1; i++) {
        let product = productList[i]; // console.log(product);

        html += `<tr>
                    <td> <img class="cartImg" onclick="addCart(${product.pno})" src= ${product.pimg} /> </td>
                    <td class="productName">${product.pname}</td>
                    <td> ${product.pprice.toLocaleString()}  </td>
                </tr>`

    }
    tbody.innerHTML = html;
}


// 실행조건 : 이미지를 클릭했을 때
// cartlist에 추가하기

function addCart( pno ){
    console.log('----addCart----');
    let check = true;
    let cno = cartList.length == 0 ? 1 : cartList[cartList.length - 1].cno + 1;
    let count = 1;

    for ( let i = 0; i <= cartList.length - 1; i++){
        let cart = cartList[i];
        // console.log( cart.pno );
        if ( pno == cart.pno ){
            check = false;
            cart.count++;
            console.log( cartList )
            let jsonData = JSON.stringify(cartList);
            localStorage.setItem('cartList', jsonData);  
        }
    }

    for ( let i = 0; i <= productList.length - 1; i++){
        let product = productList[i];        // console.log( product.pno );
        if ( pno == product.pno && check == true ){
            console.log( product.pname )
            let obj = {
                cno : cno++, 
                pno : pno, 
                count : count
            }
            cartList.push(obj);
            let jsonData = JSON.stringify(cartList);
            localStorage.setItem('cartList', jsonData);            
        }
    }
    cartsList();
};

// 장바구니 목록 출력함수 ===============================================================>
// View All Cart Items

// cartList = [ { cno : 1,pno : 1, count : 1 } ];
cartsList();
function cartsList() {
    console.log('장바구니 목록 출력함수 >>  cartsList(); exe');

    // 1. 마크업 객체 가져오기
    const cartItemList = document.querySelector( '.cartList tbody' );
    const cartTotalSum = document.querySelector( '.cartList tfoot th:nth-child(2)' );
    // 임시 초기값 상품 선택에서 데이터 가져올 예정   
    //cartList = [ { cno : 1,pno : 1, count : 1 } ]; 
    console.log( cartList ); 

    let tbodyCart = '';
    cartSum = 0;
    // 2. 장바구니 배열 순회(로컬 스토리지)
    for (let i = 0; i <= productList.length - 1; i++) {  // 3. 상품 배열 순회 매칭(pno) 
        let product = productList[i]; console.log(product);

        for( let i = 0; i <= cartList.length -1; i++ ){   console.log( cartList ); 
            let cart = cartList[i];   

            if( product.pno === cart.pno ){    console.log( cart.pno ); // 4. 해당 장바구니 베열 객체 HTML 반복구문 돌리기
                
            tbodyCart += `<tr>
                            <td> ${ product.pname  }</td>
                            <td> ${ product.pprice.toLocaleString()} </td>
                            <td> ${ cart.count } </td>
                            <td> ${ (product.pprice * cart.count).toLocaleString() }</td>
                            <td> <button onclick="cartDelete(${cart.cno})"> 삭제 </button> </td>
                        </tr>`
            cartSum += (product.pprice * cart.count); // 5. 상품 총금액과 장바구니 총 결제금액 연산
           
            } 
        }
    }
    cartItemList.innerHTML = tbodyCart;
    cartTotalSum.innerHTML = cartSum.toLocaleString();
    console.log( cartSum.toLocaleString() ); 

}

// 4. 장바구니 내 특정 제품 삭제 (Delete Cart Item) ->  

function cartDelete(cno) { // 카트 번호 삭제해야하니께 cno
    console.log(`장바구니 삭제 XXOK`);
    console.log(cno);
    // (1) 삭제할 번호 객체 찾기 : for, if , splice 활용
    for (let i = 0; i <= cartList.length - 1; i++) {
        if (cartList[i].cno == cno) {// 카트리스트 인덱스 카트넘버가 찾는 카트 넘버와 같으면
            cartList.splice(i, 1); // 해당 인덱스에서 1개 요소 삭제
            //localStorage.setItem('cartList', JSON.stringify(cartList)); // 
            localStorage.setItem('cartList', JSON.stringify(cartList)); // 
            alert('장바구니 제품 삭제 완료') // 안내
            cartsList();     // 장바구니 목록 새로고침
            return;
        }   // if end
        // (2) 삭제할 번호 없다
    } // for end
    alert('삭제할 장바구니 상품이 없습니다.')
}   // func end


// 5. 장바구니 내 전체 제품 삭제 (Delete Cart Item) ->  

function cartAllDelete(cno) { // 카트 번호 삭제해야하니께 cno
    console.log(`장바구니 삭제 XXOK`);
    console.log(cno);
    // (1) 삭제할 번호 객체 찾기 : for, if , splice 활용
    for (let i = 0; i <= cartList.length - 1; i++) {
       // if (cartList[i].cno == cno) {// 카트리스트 인덱스 카트넘버가 찾는 카트 넘버와 같으면
            //cartList.splice(i, 1); // 해당 인덱스에서 1개 요소 삭제
            //localStorage.setItem('cartList', JSON.stringify(cartList)); // 
            localStorage.removeItem('cartList');   console.log(cartsList);
            alert('장바구니 제품 삭제 완료') // 안내
            cartsList();     // 장바구니 목록 새로고침  
            return;
      //  }   // if end
        // (2) 삭제할 번호 없다
    } // for end
    alert('삭제할 장바구니 상품이 없습니다.')
   // cartsList();
}   // func end