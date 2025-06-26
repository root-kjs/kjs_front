function boardWrite(){ console.log( '게시판 글쓰기' );
    // 1. 입력 마크업 객체 가져오기
    const titleInput = document.querySelector( '#titleInput' )
    const contentInput = document.querySelector( '#contentInput' )
    const pwdInput = document.querySelector( '#pwdInput' )

    // 2. 입력값 변수 
    const title = titleInput.value;
    const content = contentInput.value;
    const pwd = pwdInput.value;

    // 3. 로컬스토리지 >  배열 호출
    let boardList = localStorage.getItem( 'boardList' )
    if( boardList === null){
        boardList = [];
    }else{
        boardList = JSON.parse( boardList )
    }

    // 4. 객체화
    let no = boardList.length;
    no++
    const obj = { no, title, content, pwd  }; 

    // 5. 배열 추가
    boardList.push( obj ) 

    // 6. 로컬 >  배열 저장
    localStorage.setItem( 'boardList' , JSON.stringify(boardList) ); 

    // 7. 글작성 알림창
    alert( '글쓰기 등록 성공!' )

    // 8. 입력값 초기화 
    titleInput.value = '';
    contentInput.value = '';
    pwdInput.value = '';

    // 9. 글목록 이동
    location.href = 'list.html';

} // func end