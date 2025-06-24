/* [실습15 - 인사 관리 대시보드 ] * 제출용 : 250620(금) 
1. 목표
    부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
    사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

2. 화면 구성
    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
    부서 관리 영역:
        부서 등록:  
            새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
        부서 목록:  
            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "부서명"과 "관리" 열로 구성됩니다.
            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:
        사원 등록:
            사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
            등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
            사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
        사원 목록:
            등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.신청직급
            각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.

    휴가 관리 영역:
        휴가 신청:
            등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
            휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
            휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
        휴가 신청 전체 목록:
            제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
            각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.휴가tlscjd
            각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
        사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

    부서 관리 기능:
        등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

    사원 관리 기능:
        등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

    휴가 관리 기능:
        신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
        취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.

[ 작업순서 ]
01. 요구사항 분석 + 화면스케치(프로토타입)
02. 화면설계(html, css)
03. 데이터 모델링
04. 기능(함수) 설계
05. 구현/로직
06. 테스트 
*//* ============================== < 03. 데이터 모델링 > ======================================= */

// 03-1. 부서 배열
const dpartmentList = [ { dno : 0 , dname : '기획팀' }, { dno : 1 , dname : '개발팀' },  { dno : 2 , dname : '영업팀' } ];
let dnoAuto = dpartmentList.length; // 자동 부서번호 초기값
console.log( dpartmentList ); // 부서 확인

// 03-2. 사원 배열
let noImg = '//placehold.co/100x100'; // 이미지 없는 경우 
const staffList = [ { sno : 0 , dno : 0 , sname : '김진숙' , slevel : '대표' , simg : noImg  },
    { sno : 1 , dno : 1 ,  sname : '일론 머스크' , slevel : '사원' , simg : noImg  },
    { sno : 2 , dno : 2 ,  sname : '한재웅' , slevel : '이사' , simg : noImg  } ];
let snoAuto = staffList.length; // 자동 사원번호 초기값
console.log( staffList ); // 사원 확인

// 03-3. 휴가신청 배열
const vacationList = [ { vno : 0 , sno : 0 , vstart : '2025-07-01' , vend : '2025-07-15' , vmemo : '휴가당!' },
    { vno : 1 , sno : 2 , vstart : '2025-08-01' , vend : '2025-08-01' , vmemo : '찾지마세요..' } ];
let vnoAuto = vacationList.length; // 자동 휴가번호 초기값
console.log( vacationList ); // 휴가신청 확인

/* ================================ < 04. 기능(함수) 설계 > =================================== */

/*------------ ★ 04-1.부서 등록함수  ----------------------------------------------------------------*/

function departmentAdd(){   console.log( '!부서 등록함수 >>> departmentAdd() exe' ); 
//- 기능정의 : html 마크업 객체 부서등록 입력값 가져와서 부서 배열에 저장
//- 실행조건 : 1.부서등록 버튼 클릭시.
//- 작업 순서 
    // 1) 부서입력 DOM(마크업 객체와 입력값) & [부서등록]버튼(onclick) 함수실행 연결
    const dnameInput = document.querySelector( '#dnameInput' );   console.log( dnameInput ); 
    const dname = dnameInput.value;    console.log( dname );
    // 2) DOM 입력값 객체(obj) 연결
    // const dpartmentList = [ { dno : 2 , dname : '영업팀' } 

    dnoAuto++ // 부서 자동번호 생성
    const objDpartment = { dno : dnoAuto , dname : dname };   console.log( objDpartment ); 
    // 3) 유효성 검사
    if( dname === '' ){
        alert( '부서명을 입력하세요.' );
        dnameInput.focus();
        return;
    }
    for( let i = 0; i <= dpartmentList.length - 1; i++ ){
        let department = dpartmentList[i];
        if( dname === department.dname ){
            alert( '이미 등록된 부서명입니다.' );
            dnameInput.value = '';
            dnameInput.focus();
            return;
        }
    }// for end.
    // 4) 객체 배열에 저장 
    dpartmentList.push( objDpartment );   console.log( dpartmentList ); //
    alert( '부서 등록되었습니다.' );
    // 5) 기타( 등록 완료 후, 마크업 객체 value 초기화  )
    dnameInput.value = '';
    // 6) 부서등록 성공시, 아래 함수 같이 실행하여 부서 신규 등록 데이터 반영!
    // - 1.부서현황(table) 목록
    departmentList(); 
    // - 2.사원등록 > 셀렉트 > 부서명(매개변수 : 부서ID) 
    // - 3. 사원현황 > 표 > 부서명(매개변수 : 부서ID)
} // departmentAdd() end.

/*------------ ★ 04-2.부서목록 출력함수   ---------------------------------------------------------------*/

departmentList(); 
function departmentList(){   console.log( '!부서목록 출력함수 >>> departmentList() exe' ); 
//- 기능정의 : 부서배열에 저장 된 값을 html 표로 출력
//- 실행조건 : 1. 해당 html/js 실행시 2.부서 신규등록이 성공적으로 배열 저장시 3.부서 삭제시 4. 부서 수정시
//- 작업 순서 
// 1) 출력할 html 위치 변수 선언 후, 부서 배열 순회하여  const dpartmentList = [ { dno : 0 , dname : '기획팀' }
    const dnameInput = document.querySelector( '#departments table tbody' ); // 부서관리 > 부서목록 테이블
    const dnameSelect= document.querySelector( '#staffs select' ); //사원관리 > 부서선택 셀렉트박스
    let tbody = '';
    let dOption ='<option value="" disabled selected>부서 선택*</option>'
    for( let i = 0; i <= dpartmentList.length - 1; i++ ){
        let department = dpartmentList[i];
        // 2) html 해당 위치에 부서 정보 반복 출력하기
        tbody += `<tr>
                    <td> ${ department.dname } </td>
                    <td>
                        <button onclick="departmentEdit(${ department.dno })"> 수정 </button>
                        <button onclick="departmentDelete(${ department.dno })"> 삭제 </button>
                    </td>
                </tr>`;
        dOption += `<option value="${ department.dno }"> ${ department.dname } </option>`;
        
    }// for end.
    dnameInput.innerHTML = tbody; // 부서관리 > 부서목록 테이블
    dnameSelect.innerHTML = dOption; //사원관리 > 부서선택 셀렉트박스
} // departmentList() end.

/*------------ ★ 04-3. 부서 삭제함수  -------------------------------------------------------------------*/

function departmentDelete( dno ){   console.log( '!부서 삭제함수 >>> departmentList() exe' ); 
//- 기능정의 : html > 부서 목록(표) > 해당 부서 > 삭제 기능
//- 실행조건 : 1.html > 부서 목록(표) > 해당 부서 >삭제 버튼 클릭시
//- 작업 순서 
// 1) 해당 마크업 객체에 온클릭 departmentDelete() 함수 호출( 매개변수 : dno )
// 2) 부서 배열 순회하여  const dpartmentList = [ { dno : 0 , dname : '기획팀' } 해당 부서 객체 splice
    for( let i = 0; i <= dpartmentList.length - 1; i++ ){
        let department = dpartmentList[i];
        if( dno == department.dno ){
            if( confirm( `[${ department.dname }] 정말 삭제하시겠습니까? ` )  ){ 
                dpartmentList.splice(i, 1)
                //alert( '부서명이 삭제되었습니다.' )
                departmentList(); 
                return;
            }else{
                return; // 컨펌창 취소 눌렀을때 리턴(삭제 함수 종료!)
            }
        }
    }// for end.
    alert( '[오류] 부서번호 확인!' )
} // departmentDelete() end.

/*------------ ★ 04-4. 부서 수정함수  ----------------------------------------------------------------------*/

function departmentEdit( dno ){   console.log( '!부서 수정함수 >>> departmentEdit() exe' ); 
//- 기능정의 : html > 부서 목록(표) > 해당 부서 > 수정 기능
//- 실행조건 : 1.html > 부서 목록(표) > 해당 부서 > 수정 버튼 클릭시
//- 작업 순서 
// 1) 해당 마크업 객체에 온클릭 departmentEdit() 함수 호출( 매개변수 : dno )
// 2) 부서 배열 순회하여  const dpartmentList = [ { dno : 0 , dname : '기획팀' } 해당 부서 객체 splice
    for( let i = 0; i <= dpartmentList.length - 1; i++ ){
        let department = dpartmentList[i];
        if( dno == department.dno ){
            if(department.dname = prompt( `수정할 부서명 입력 ` )){
                alert( '부서명이 수정되었습니다.' )
                departmentList();
                return;
            }else{
                return; // 프롬프트 취소 눌렀을때 리턴(수정 함수 종료!)
            }
        }
    }// for end.
    alert( '[오류] 부서번호 확인!' )
} // departmentDelete() end.

/*------------ ★ 04-5. 사원 등록함수  ----------------------------------------------------------------------*/

function staffAdd(){   console.log( '!사원 등록함수 >>> staffAdd() exe' ); 
//- 기능정의 : html 마크업 객체 사원등록 입력값 가져와서 사원 배열에 저장
//- 실행조건 : 1.사원등록 버튼 클릭시.
//- 작업 순서 
    // 1) 사원입력 마크업 객체와 입력값 변수 선언 & [사원등록]버튼(onclick) 함수실행 연결
    const snameInput = document.querySelector( '#snameInput' );      console.log( snameInput ); 
    const slevelInput = document.querySelector( '#slevelInput' );    console.log( slevelInput ); 
    const sdepartSelset = document.querySelector( '#staffs select' );  console.log( sdepartSelset );
    const simgInput = document.querySelector( '#simgInput' );        console.log( simgInput ); 

    const sname = snameInput.value;         console.log( sname );
    const slevel = slevelInput.value;       console.log( slevel );
    const dno = sdepartSelset.value;        console.log( dno );
    const simg = simgInput.files[0];        console.log( simg );

    // 2) 마크업 입력값 > 객체 구성 const staffList = [ { dno : 0 , sno : 0 , sname : '김진숙' , slevel : '대표' , simg : noImg  } // URL.createObjectURL( ) : Blob(Binary Large Object) 객체나 File 객체를 사용하여 URL을 생성할 수 있게 해주는 메서드,  자바스크립트의 웹 API 
    snoAuto++; 
    let objStaff = { dno : Number(dno) , sno : snoAuto , sname : sname , slevel : slevel === '' ? '사원' : slevel , simg : simg ? URL.createObjectURL( simg ) : noImg  };  console.log( objStaff );

    // 3) 유효성 검사( 필수 입력 항목 )
    if( sname === '' ){
        alert( '이름을 입력하세요' )
        snameInput.focus();
        return;
    }
    if( dno === '' ){
        alert( '부서를 선택하세요' )
        sdepartSelset.focus();
        return;
    }
    // 4) 생성한 객체를 배열에 넣기
    staffList.push( objStaff );  console.log( staffList );

    // 5) 마크업 밸류값 초기화
    snameInput.value = '';
    slevelInput.value = '';
    sdepartSelset.value = '';
    simgInput.files[0] = '';

    // 6) 사원 신규등록시 사원목록에 바로 반영
    staffsList();
} // staffAdd() end.

/*------------ ★ 04-6-2. 부서명 출력함수  --------------------------------------------------------------------*/
function departmentName( dno ){   //console.log( '!부서명 출력함수 >>> departmentName() exe' ); 
// 2) 부서 배열 순회하여  const dpartmentList = [ { dno : 0 , dname : '기획팀' } 해당 부서 객체 splice
    for( let i = 0; i <= dpartmentList.length - 1; i++ ){
        let department = dpartmentList[i]; 
        if( dno === department.dno ){
            return department.dname; 
        }
    }// for end.
} // departmentName() end.

/*------------ ★ 04-6-1. 사원목록 출력함수  -------------------------------------------------------------------*/
staffsList();

function staffsList(){   console.log( '!사원목록 출력함수 >>> staffsList() exe' ); 
//- 기능정의 : 사원 목록 출력
//- 실행조건 : 1.html/js 실행시  2.사원 등록시  3.사원 삭제/수정시 
//- 작업 순서 
    // 1) 해당하는 html 위치 마크업 객체 가져오기와 반복구간 html 영역 변수 선언
    let tbodyStaff = document.querySelector( '#staffs table tbody' );// 사원관리 > 사원목록 테이블
    let trStaff ='';
    let vSelect = document.querySelector( '#vacations select' ); // 휴가 신청 > 사원 선택 셀렉트박스 
    let vOption = '<option value="" disabled selected>사원 선택*</option>';
    // 2) 사원 배열 순회 const staffList = [ { dno : 0 , sno : 0 , sname : '김진숙' , slevel : '대표' , simg : noImg  },
    for( let i = 0; i <= staffList.length - 1; i++ ){
        let staff = staffList[i];

    trStaff += `<tr>
                    <td><img src="${ staff.simg }" /></td>
                    <td> ${ staff.sname } </td>
                    <td> ${ departmentName( staff.dno ) }</td>
                    <td> ${ staff.slevel === '' ? '사원' : staff.slevel } </td>
                    <td>
                        <button onclick="staffEdit(${ staff.sno })"> 수정 </button>
                        <button onclick="staffDelete(${ staff.sno })"> 삭제 </button>
                    </td>
                </tr>`
    vOption += `<option value="${ staff.dno }"> ${ staff.sname }(${ departmentName( staff.dno ) }/${ staff.slevel })</option>`
    }// for end.
    // 3) html 화면 출력
    tbodyStaff.innerHTML = trStaff; // 사원관리 > 사원목록 테이블
    vSelect.innerHTML = vOption; // - 휴가 신청 > 사원 선택 셀렉트박스 
    // 3) 사원 등록/수정/삭제시 사원 목록 리로드

} // staffList() end.

/*------------ ★ 04-7. 사원 삭제함수  ------------------------------------------------------------------------*/

function staffDelete( sno ){   console.log( '!사원 삭제함수  >>> staffDelete(sno) exe' ); 
// 1) 사원 배열 순회하여 const staffList = [ { sno : 0 , dno : 0 , sname : '김진숙' , slevel : '대표' , simg : noImg  }, 배열 객체 splice
    for( let i = 0; i <= staffList.length - 1; i++ ){
        let staff = staffList[i]; 
        if( sno === staff.sno ){
            if(confirm( '정말로 삭제 하시겠습니까?')){
                staffList.splice(i,1);
                staffsList();
                return;
            }else{
                return;
            }
        }
    } // for end.
    alert( '[오류] 사원번호 확인!' );
} //staffDelete(sno) end.

/*------------ ★ 04-8. 사원 수정함수  ------------------------------------------------------------------------*/

function staffEdit( sno ){   console.log( '!사원 수정함수  >>> staffEdit(sno) exe' ); 
// 1) 사원 배열 순회하여 const staffList = [ { sno : 0 , dno : 0 , sname : '김진숙' , slevel : '대표' , simg : noImg  },사원명, 직급 프롬프트로 수정
    for( let i = 0; i <= staffList.length - 1; i++ ){
        let staff = staffList[i]; 
        if( sno === staff.sno ){
            if(staff.sname = prompt( `수정할 이름 입력 ` )){
                alert( '이름 수정 완료!' )
                staffsList();
            }
            if( staff.slevel = prompt( `수정할 직급 입력 ` )){
                alert( '직급 수정 완료!' )
                staffsList();
                return;
            }else{ return; }  // 프롬프트 취소 눌렀을때 리턴(수정 함수 종료!)
        }
    } // for end.
    alert( '[오류] 사원번호 확인!' );
} //staffEdit(sno) end.

/*------------ ★ 04-10. 휴가신청 등록함수   -------------------------------------------------------------------*/

function vacationAdd( ){   console.log( '!휴가신청 등록함수  >>> vacationAdd() exe' ); 
    // 1) 마크업 객체/밸류값 가져오기
    const vnameSelect = document.querySelector( '#vacations select' );      console.log( vnameSelect ); 
    const vmemoInput = document.querySelector( '#vmemoInput' );             console.log( vmemoInput ); 
    const vstartInput = document.querySelector( '#vstartInput' );           console.log( vstartInput ); 
    const vendInput = document.querySelector( '#vendInput' );               console.log( vendInput ); 

    const sno = vnameSelect.value;      console.log( sno ); 
    const vmemo = vmemoInput.value;     console.log( vmemo ); 
    const vstart = vstartInput.value;   console.log( vstart ); 
    const vend = vendInput.value;       console.log( vend ); 

    // 2) 마크업 객체 사용자 입력값 > 휴가 객체 생성하기/유효성 검사/입력값 초기화 
    // const vacationList = [ { vno : 0 , sno : 0 , vstart : '2025-07-01' , vend : '2025-07-15' , vmemo : '여름휴가' },
    // 현재 날짜 구하기 객체함수 --> new Date();
    let year = new Date().getFullYear();        // 현재 연도 반환 함수
    let month = new Date().getMonth() + 1;      // 현재 월 반환 함수, 1월이 0부터 시작
        month = month < 9 ? `0${month}`: month;
    let day = new Date().getDate();             // 현재 일 반환
    let week = new Date().getDay()              //현재 요일 반환 함수 * 일요일은 0반환 , 월요일 1반환 ~~ 토요일 6반환
    let pdate = `${ year }-${ month }-${ day }`;     console.log( pdate );  console.log( week );
    vnoAuto++;
    const objVacation = { vno : vnoAuto , sno : Number(sno) , vstart : vstart , vend : vend , vmemo : vmemo };    console.log( objVacation );
    // 유효성 검사
    if( sno === '' || vstart === '' || vend === '' ){
        alert( '휴가신청 항목을 빠짐없이 입력하세요' )
        return;
    }
    if( vstart > vend ){
        alert( '휴가 시작일을 확인하세요.' )
        return;
    }
    if( vstart < pdate || vend < pdate ){
        alert( `휴가 시작(종료)일은 오늘(${ pdate }) 이후로 선택하세요.` )
        return;
    }
    // 마크업 객체 입력값 초기화 
    vnameSelect.value =''; 
    vmemoInput.value =''; 
    vstartInput.value =''; 
    vendInput.value =''; 

    // 3) 생성한 휴가객체 휴가신청 배열에 저장 
    vacationList.push( objVacation );
    alert( `휴가 신청 성공!` ) // 휴가 가기 어렵네....ㅜㅜ

    // 4) 생성한 휴가객체 휴가목록에 반영

} //vacationAdd() end.

/*------------ ★ 04-11. 휴가신청목록 출력함수  ------------------------------------------------------------------*/
vacationsList(); 
function vacationsList(){   console.log( '!휴가신청목록 출력함수  >>> vacationsList() exe' ); 
//- 기능정의 : 휴가신청목록 html 출력
//- 실행조건 : 1.html/js 실행시  2.휴가신청 등록시  3.휴가신청 취소시 
//- 작업 순서 
    // 1) HTML 출력할 위치의 마크업 객체 가져오기/ 반복 출력 html 변수 선언
    const ul = document.querySelector( '#vacationList' );
    let html ='';
    // 2) 휴가신청 배열 순회하여 데이터 출력// const vacationList = [ { vno : 0 , sno : 0 , vstart : '2025-07-01' , vend : '2025-07-15' , vmemo : '여름휴가' },
    for( let i = 0; i <= vacationList.length - 1; i++ ){
        let vacation = vacationList[i]; 

        html +=`<ul>
                    <li><b></b> <button onclick="vacationCancel(${vacation.vno})">신청취소</button></li>
                    <li>휴가기간 : ${vacation.vstart} ~ ${vacation.vend}</li>
                    <li>휴가사유 : ${vacation.vmemo}</li>
                </ul>`;


    } // for end
    // 3) html 출력 
    ul.innerHTML = html; 
    // 4) 휴가 등록/신청취소 됐을경우 목록 업데이트

    // 5) 연관된 부서명 출력
} //
/*------------ ★ 04-12. 휴가신청 취소 함수   -------------------------------------------------------------------*/


