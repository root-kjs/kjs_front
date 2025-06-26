boardPrint();
function boardPrint(){ console.log( '게시판 글쓰기' );

    // 1. 출력 마크업 객체 
    const tbody = document.querySelector( 'table tbody' );

    // 2. 로컬 배열 호출
    let boardList = localStorage.getItem( 'boardList' );
    if( boardList == null ){
        boardList = [];
    }else{  boardList = JSON.parse( boardList) }

    // 3. 배열 순회하여 데이터 출력
    let html = ``;
    for( let i = 0; i <= boardList.length - 1; i++){
        let board = boardList[i];

        html += `<tr>
                    <th> ${ board.no } </th>
                    <th><a href="view.html?no=${ board.no }"> ${ board.title } </a></th>
                </tr>
        `
    }
    // 4. html 출력
    tbody.innerHTML = html;
} // func end