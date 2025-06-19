/*예제 1: 요소 내용 변경하기*/
// id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.
// (1) 목표 요소     : #title
// (2) 사용할 내장 속성/메소드: .innerHTML
// (3) 처리할 내용   : 'DOM 조작 성공!' 텍스트로 교체

document.querySelector('#title').innerHTML ='DOM 조작 성공!';

/*예제 2: 사용자 입력값 가져와서 표시하기*/
// id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면,
// id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.
// (1) 목표 요소     : #usernameInput, #submitBtn, #greeting
// (2) 사용할 내장 속성/메소드:  .value, .innerHTML
// (3) 처리할 내용   : 버튼 클릭 시 input의 value를 읽어와 p 태그에 삽입

function func2(){
    const name = document.querySelector('#usernameInput').value;
    document.querySelector('#greeting').innerHTML = `안녕하세요, [ ${name} ]님!`;
}

/*예제 3: 요소 스타일 동적으로 변경하기*/
// '스타일 변경' 버튼(id: 'styleBtn')을 클릭하면,
// id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.
// (1) 목표 요소     : #styleBtn, #colorBox
// (2) 사용할 내장 속성/메소드: .style
// (3) 처리할 내용   : 버튼 클릭 시 div의 배경색과 글자색 스타일 변경

function func3(){
    document.querySelector('#colorBox').style = 'background : skyblue; color : white';
}

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)*/
// '테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 <body> 태그에 'dark-mode' 클래스를 추가하거나 제거(토글)하시오.
// (1) 목표 요소     : body, #themeBtn
// (2) 사용할 내장 속성/메소드: .classList.toggle()

function func4(){
    document.querySelector('body').classList.toggle( 'dark-mode' );
}

/*예제 5: 특정 HTML 요소 제거하기*/
// '박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, id가 'targetBox'인 <div> 요소를 문서에서 제거하시오.
// (1) 목표 요소     : #removeBtn, #targetBox
// (2) 사용할 내장 속성/메소드:  .remove()
// (3) 처리할 내용   : 버튼 클릭 시 #targetBox 요소를 DOM에서 제거

function func5(){
    document.querySelector('#targetBox').remove( );
}

/*예제 6: 여러 요소에 동일한 작업 반복하기*/
// 클래스가 'item'인 모든 <p> 요소의 글자색을 'green'으로, 글자 두께를 'bold'로 변경하시오.
// (1) 목표 요소     : .item (모든 요소)
// (2) 사용할 내장 속성/메소드: .querySelectorAll(), for...of 반복문, .style
// (3) 처리할 내용   : 모든 .item 요소를 순회하며 스타일 변경

const items = document.querySelectorAll('.item');
console.log( items )
for( let i =0; i <= items.length -1; i++ ){
    items[i].style = 'color : green; font-weight : bold';
}

/*예제 7: 이미지 소스(src) 변경하기 , https://placehold.co/ */
// '이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면,
// id가 'mainImage'인 <img> 요소의 src 속성을 'https://placehold.co/600x400/red/white'로 변경하시오.
// (1) 목표 요소     : #changeImgBtn, #mainImage
// (2) 사용할 내장 속성/메소드: , .src
// (3) 처리할 내용   : 버튼 클릭 시 이미지의 src 속성 값을 변경

function func7(){
    document.querySelector('#mainImage').src = 'https://placehold.co/600x400/red/white';
}

/* 예제 8 : select 에서 선택한 option값 console 출력하기. */
// (1) 목표 요소        : #foodSelect
// (2) 사용할 내장 속성/메소드 : .value
// (3) 처리할 내용      : select 요소의 값이 변경될 때마다 선택된 option의 value를 콘솔에 출력

function func8(){  // onchange="func8()"
    console.log( document.querySelector('#foodSelect').value );
}

/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */
// (1) 목표 요소        : #itemInput, #addItemBtn, #arrayStatus
// (2) 사용할 내장 속성/메소드 : let (전역배열), .value, .push(), .textContent
// (3) 처리할 내용      : 버튼 클릭 시 input 값을 배열에 추가하고, 현재 배열의 상태를 div에 출력
let arrayList = [1];
function func9(){  // 
    let word = document.querySelector('#itemInput').value;
    arrayList.push( word );
    console.log( arrayList )
    document.querySelector('#arrayStatus').innerHTML = arrayList;

}
3690

// 김현수 강사님 답안
// 1. 전역배열 : 입력받은 값들을 저장하는 전역(*함수밖에서) 배열
// let array = [];
// // 2. 버튼 클릭시 실행되는 함수 정의
// function func99(){                                               console.log( '--- func9 exe --- ');
//     // 3. (입력) 'itemInput' 마크업 객체를 가져온다. 
//     const itemInput = document.querySelector('#itemInput');     console.log( itemInput );
//     // 4. 마크업 객체내 value 속성값 가져온다.
//     const value = itemInput.value;                              console.log( value );
//     // 5. value(입력받은값) 를 (전역)배열에 추가한다.
//     array.push ( value );                                       console.log( array );
//     // 6. (출력) 'arrayStatus' 마크업 객체를 가져온다.  
//     const arrayStatus = document.querySelector('#arrayStatus'); console.log( arrayStatus );
//     // 7. 배열내 모든 요소를 HTML(문자열) 형식 구성 ( *누적합계 와 비슷 ) 
//     let html = ``; // 배열내 출력할 요소들을 문자로 저장할 변수 
//     for( let index = 0 ; index <= array.length - 1 ; index++ ){
//         const val = array[index]; // index번째 입력값(요소) 호출
//             console.log( val );
//         html += `<span> ${ val } , </span>  `; // html 구성  
//     } // for end 
//     // 8. 배열 정보를 HTML 구성한 문자열을 innerHTML에 대입한다.
//         console.log( html );
//     arrayStatus.innerHTML = html;
// } // func end

