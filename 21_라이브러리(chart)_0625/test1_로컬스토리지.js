// 1. 배열호출
getProducts();
function getProducts(){  console.log( '배열호출' );
    let productList = localStorage.getItem( 'productList' )

    if( productList == null ){
        productList = [];
    }else{
        productList = JSON.parse( productList ); 
    }
    return productList;
}

// 2. 배열저장
function setProducts( productList ){  console.log( '배열저장' ); 
    localStorage.setItem('productList', JSON.stringify( productList ) )
}

// 3. 상품등록
function productAdd(){  console.log( '상품등록' ); 

    let productList = getProducts();

    // 변수
    const pnameInput = document.querySelector( '#pnameInput' ); 
    const ppriceInput = document.querySelector( '#ppriceInput' ); 
    const pmemoInput = document.querySelector( '#pmemoInput' ); 
    const pimgInput = document.querySelector( '#pimgInput' ); 

    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pmemo = pmemoInput.value;
    const pimg = pimgInput.files[0]; console.log( pimg ); 

    // 객체
    let pnoAuto = productList.length;
    pnoAuto++;
    let noimg ='//placehold.co/100x100';
    const obj ={ pno : pnoAuto ,  pname : pname , pprice : pprice , pmemo : pmemo , pimg : pimg ? URL.createObjectURL(pimg) : noimg }; 

    console.log( obj ); 

    // 배열 추가
    productList.push( obj );  console.log( productList ); 

    // 초기화 
    pnameInput.value = '';
    ppriceInput.value = '';
    pmemoInput.value = '';

    // 배열 저장
    setProducts( productList );

    // 목록 반영
    productPrint();

}

// 4. 상품목록
productPrint();
function productPrint(){  console.log( '상품목록' ); 

    // 배열 호출
    let productList = getProducts();

    // 변수
    const tbody = document.querySelector( 'table tbody' );
    let html ='';

    // 배열 순회
    for( let i = 0; i <= productList.length - 1; i++ ){
        let product = productList[i];

        html += `<tr>
                <td><img src="${ product.pimg }" /></td>
                <td>${ product.pname }</td>
                <td>${ product.pprice }</td>
                <td>${ product.pmemo }</td>
                <td><button onclick="productDelete(${ product.pno })"> 삭제 </button></td>
            </tr>
        `
    }
    tbody.innerHTML = html; 
}

// 5. 상품삭제
function productDelete( pno ){  console.log( '상품삭제' ); 

    // 배열 호출
    let productList = getProducts();

    // 배열 순회
     for( let i = 0; i <= productList.length - 1; i++ ){
        let product = productList[i];
        
        if( pno == product.pno ){
            productList.splice( i , 1 );
            alert( '삭제 성공' ); 
            // 배열 저장
            setProducts( productList );
            productPrint();
        }
    }
}