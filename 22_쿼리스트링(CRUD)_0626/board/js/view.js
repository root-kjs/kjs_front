getBoard();
function getBoard(){ console.log( '작성글 상세보기' );
    // 1. URL 상의 웹주소 가져오기

    const url = new URLSearchParams( location.search );

    // 2. 웹주소에서 선택된 queryString(게시물 번호) 가져오기

    const selectNum = url.get( 'no' );

    // 3. 로컬 스토리지 배열 호출

    let boardList = localStorage.getItem( 'boardList' );
    if( boardList == null ){
        boardList = [];
    }else{
        boardList = JSON.parse( boardList );
    }

    // 4. 게시물 번호와 일치한 작성글 가져와서 출력

    for( let i = 0; i <= boardList.length -1; i++){
        let board = boardList[i];

        if( selectNum == board.no ){
            document.querySelector('#title').innerHTML = board.title;
            document.querySelector('#content').innerHTML = board.content;
            //document.querySelector('#boardDelete').onclick = boardDelete( board.no );
            //document.querySelector('#boardEdit').onclick = boardEdit( board.no );
            // document.querySelector('.main').innerHTML =`<button onclick="">삭제<button> `
            return;
        }

    }

} // func end


function boardUpdateView(){ console.log( '작성글 수정이동 함수' );

    // 1. URL 웹주소 가져오기

    let url = new URLSearchParams( location.search );

    // 2. 쿼리스트링(게시물 번호) 거져오기

    let selectNum = url.get( 'no' ); 

    // 3.로컬 스토리지 배열 호출

    let boardList = localStorage.getItem( 'boardList' );
    if( boardList == null ){
        boardList = [];
    }else{
        boardList = JSON.parse( boardList );
    }

    // 4. 게시물 번호와 일치한 작성글 가져와서 출력

    for( let i = 0; i <= boardList.length -1; i++){
        let board = boardList[i];

        if( selectNum == board.no ){
            const confirm = prompt( '비번 입력:' );
           if( confirm == board.pwd ){
                location.href = `update.html?no=${ selectNum }`

           }else{
            alert('수정불가 : 비번 불일치')
           }
        }

    }



}