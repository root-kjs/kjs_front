// const productList = [
//     { pno: 1, pname: '코카콜라', pprice: 1800, pinfo: '단맛', pimg: "https://placehold.co/100x100/png" },
//     { pno: 2, pname: '칠성', pprice: 1500, pinfo: '짠맛', pimg: "https://placehold.co/100x100/png" }
// ]
// 제품 ID 자동화
// let pno = productList.length == 0 ? 1 : productList[productList.length-1].pno + 1;

let productList = localStorage.getItem('productList');

if ( productList == null ){
    productList = [];
}else {
    productList = JSON.parse( productList );
};
console.log( productList );



// const stockList = [ // true는 입고, false는 출고.
//     { sno: 1, pno: 1, stype: true, scount: 3, scuz: "제품수량부족" },
//     { sno: 2, pno: 2, stype: false, scount: 2, scuz: "제품과다" },
// ]
// // 재고 ID 자동화
// let sno = stockList.length == 0 ? 1 : stockList[stockList.length-1].sno + 1;

let stockList = localStorage.getItem('stockList');

if ( stockList == null ){
    stockList = [];
}else {
    stockList = JSON.parse( stockList );
};
console.log( stockList );


//=================================장바구니 리스트=================================
let cartList = localStorage.getItem('cartList');
if ( cartList == null ){
    cartList = [];
}else {
    cartList = JSON.parse( cartList );
};
console.log( cartList );

// cartList = [ { cno : 1,pno : 1, count : 1 } ];
