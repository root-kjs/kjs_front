getBoard();
function getBoard() { console.log('수정할 기존 작성글 가져오기');

    // 1. URL 주소와 게시물 번호 가져오기
    let url = new URLSearchParams(location.search);
    let selectNum = url.get('no')

    // 2. 로컬 배열 호출
    let boardList = localStorage.getItem('boardList');
    if (boardList === null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList)
    }

    // 3. 배열 순회하여 해당하는 게시글 찾아서 기존 데이터 뿌려주기
    for (let i = 0; i <= boardList.length - 1; i++) {
        let board = boardList[i];

        if (selectNum == board.no) {

            document.querySelector('#titleInput').value = board.title;
            document.querySelector('#contentInput').value = board.content;
        }
    } // for 완료 
} // func end


function boardUpdate() { console.log('수정한 게시글 등록!');
    // 1. 웹주소 경로에서 게시글 번호 가져오기

    let url = new URLSearchParams( location.search );
    let selectNum = url.get( 'no' );

    // 2. 로컬 스토리지에서 배열 가져오기
    let boardList = localStorage.getItem( 'boardList' );
    if( boardList === null ){
        boardList = []; 
    }else{
        boardList = JSON.parse( boardList );
    }

    // 3. 배열 순회하며 해당 게시물 번호 게시글 불러와서 기존 객체에 입력값 대입 
    for( let i = 0; i <= boardList.length - 1; i++ ){
        let board = boardList[ i ];
        if( board.no == selectNum ){
            board.title = document.querySelector('#titleInput').value;
            board.content = document.querySelector('#contentInput').value;
            board.pwd = document.querySelector('#pwdInput').value;
            // 4. 로컬스토리지 배열에 저장하기

            localStorage.setItem( 'boardList', JSON.stringify( boardList ));

            // 5. 수정 성공하면 view로 이동
            alert('수정완료!')
            location.href = `view.html?no=${ selectNum }`;
            return;
        }

    }

    


    


} // func end




