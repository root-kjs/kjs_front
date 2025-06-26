function boardDelete() {
    console.log('작성글 삭제하기');

    // 1. URL상의 웹주소 가져오기
    let url = new URLSearchParams(location.search);

    // 2. 게시물 번호 가져오기
    let selectNum = url.get('no');


    // 3. 로컬 스토리지 배열 가져오기

    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList)
    }

    // 4. 배열내 게시물 존재하여 확인용 비번을 입력받아 기존 비번과 일치하면 삭제, 아니면 실패
    console.log( boardList )

    for (let i = 0; i <= boardList.length - 1; i++) {
        let board = boardList[i];

        if (selectNum == board.no) {
            const confirm = prompt('게시물  비번 입력 :'); console.log(board.no)
            if (board.pwd == confirm) { // 비번이 일치하면 
                boardList.splice(i, 1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('삭제성공');
                location.href = 'list.html';
            } else {
                alert('비밀번호 불일치');
            }
        }

    }



} // func end