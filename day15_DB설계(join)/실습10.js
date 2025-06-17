/*  실습10 과제: 학생별 수강 과목 및 성적표 대시보드만들기 
    '학생' 정보 , 개설된 '과목'정보 그리고 학생들의 '수강신청' 내역이 각각 존재한다.
    각 학생별로 어떤 과목을 수강 했고 어떤 성적을 받았는지 보여주는 관리자 대시보드 만들기.
    단]  F 이면 'Fail' 출력 , F 가 아니면 'Pass' 출력

    * 요구 사항
    1. 데이터 모델링 : 배열과 객체를 활용하여 샘플데이터로 구성하시오.
        (1) 아래 각 정보는 필수로 합니다. 
        - 학생정보 : 학번(*), 이름 , 전공 
        - 과목정보 : 과목코드(*) , 과목명 , 교수자명 
        - 수강신청내역정보 : 수강신청내역코드(*) , 학번(**) , 과목코드(**) , 성적 
        (2) 각 정보별 샘플(임의)데이터는 3개 이상씩 하여 배열 또는 객체를 선언 합니다.
    2. 구현 로직
    3. 최종 결과물 예시
        * 웹페이지에 다음과 같은 형식으로 각 유저의 정보가 표시되어야 합니다.
        * 단  HTML 와 CSS 구성/코드 는 달라도 됩니다. 
*/

// 각 테이블을 객체로 정의한다.
const students = [{ sid: 10, sName: '유재석', sMajor: '예능' },
{ sid: 11, sName: '강호동', sMajor: '씨름' },
{ sid: 12, sName: '신동엽', sMajor: '개그' }];

const subjects = [{ cid: 543, className: '수학', teacher: '김현수' },
{ cid: 678, className: '영어', teacher: '홍길동' },
{ cid: 900, className: '과학', teacher: '유관순' }];

const attends = [{ aid: 1, sid: 10, cid: 678, grade: 'F' },
{ aid: 2, sid: 10, cid: 543, grade: 'A' },
{ aid: 3, sid: 12, cid: 543, grade: 'F' },
{ aid: 4, sid: 11, cid: 900, grade: 'B' },
{ aid: 5, sid: 12, cid: 900, grade: 'C' },];


/* (1) HTML 출력한다. 출력되는 정보는 학생명, 과목명, 성적(F 이면 'Fail' 출력 , F 가 아니면 'Pass' 출력)*/

let html = '';
html += ` <h1>학생별 수강 성적표</h1><ul> `;
// 학생 테이블
for (let index = 0; index <= students.length - 1; index++) {
    let student = students[index];
    let sName = '';
    let className = '';
    let fail = '';

    // 수강신청 테이블
    for (let index1 = 0; index1 <= attends.length - 1; index1++) {
        let attend = attends[index1];

       // 과목 테이블
        for (let index2 = 0; index2 <= subjects.length - 1; index2++) {
            let subject = subjects[index2];

             if (student.sid == attend.sid) {
                sName = student.sName
                if (subject.cid == attend.cid) {
                    //grade += ` ${ attend.grade } /`
                    fail = attend.grade == 'F' ? '<spna style="color:red">Fail</span>' : '<spna style="color:blue">Pass</span>';
                    className += ` ${ subject.className }(${attend.grade}, ${fail}) `
                }
            }
            
        } // for3 end
    
    } //for2 end

    html += `<li style="border-bottom:solid 1px #ddd; padding:10px 0">
        <div> <b>${sName}</b> (${student.sMajor} 전공) </div>
        <span> ${className} </span>
    </li>`
}//for1 end
document.write(html);