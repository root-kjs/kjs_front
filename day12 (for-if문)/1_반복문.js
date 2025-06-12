console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');

console.log( 1 );
console.log( 2 );
console.log( 3 );
console.log( 4 );
console.log( 5 );

// 패턴/순서 찾기 1~5 증가
// for( 반복변수의 초기값; 조건문; 증감식++ ){
//     console.log( )
// }


for( i = 1; i <= 9; i++  ){
    console.log( ` 2 X ${ i } = ${ 2 * i } ` ) // 백틱을 사용하면 문자열로 숫자가 나옴
    console.log(   2 * i  )
}

let numList = [];
for( i = 1; i <= 3; i++ ){
    let num = console.log( ` num${ i }` );
    
    numList.push( num )
    console.log( numList );
}
