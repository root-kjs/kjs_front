let fruitBox = [ '사과', '포도', '딸기' ];

// 배열의 인덱스는 무조건 0
// 배열을 반복문으로 돌릴때는 전체 반복시 배열의 length - 1을 이용할 것!
// for( i= 0; i <= fruitBox.length - 1; i++ ){
//     console.log( fruitBox[i] );
// }

let dataList = [];
for( count = 1; count <= 3; count++ ){
    let data = prompt( ` ${count}. data `); //3개
    dataList.push( data )
}
console.log( dataList );


// // 나의 코드 
// console.log( ` <ul> `);
// for( i = 0; i <= dataList.length - 1; i++ ){
//     console.log( `  <li> ${ dataList[i] } </li> `);
// }
// console.log( ` </ul> `);


// 문자열 변수에서 사용되는 += 는 연결 복합대입(문자를 연결해주는) 연산자
let html = `<ul>`
for( i = 0; i <= dataList.length - 1 ; i++ ){
    html += ` <li> ${ dataList[ i ] } </li> ` 
}
html += `</ul>`

document.write( html );