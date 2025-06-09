[당근팀] 김재영, 신승민, 김진숙_250605
★ 팀작업 공통준수사항 ★

1) 클론코딩 웹페이지
   (당근) https://www.daangn.com

2) 페이지별 역할 담당 & 공통css요소 정하기
① 신승민
    - 공통 UI: header
    - 개별(알바): https://www.daangn.com/kr/jobs/
② 김재영(팀리더/파일통합)
    - 공통 UI: aside
    - 개별(중고거래): https://www.daangn.com/kr/buy-sell/
③ 김진숙
    - 공통 UI: footer
    - 개별(메인): https://www.daangn.com/kr/

3/4) 폴더명/파일명/class명/id명 규칙
    - css파일: 배정받은 공통UI.css, 파일명.css로 각각 2개로 작업 할 것 
    - CSS reset : 하단의 소스만 사용
   *{ margin: 0; padding: 0; box-sizing: border-box; }
   li{ list-style: none; }
   a{ text-decoration: none; }
    - 영문 스네이크 방식(Snake case) 표기하며, 의미있는 영문명으로 작명할 것 
    - id명 :  해더, 메인배너, 메인, 사이드, 푸터만 정의할 것
    - 웹폰트 : https://noonnu.cc/font_page/694 
               * Pretendard (font-weight: 200,400,600,800) 총 4개 사용
               * 타이틀 크기의 태그에만 웹폰트사용하고, 나머지는 구글 기본 시스템 폰트 사용
    - 이미지 : 다운로드 받지 않고 당근사이트 이미지 경로 사용
    - HTML : 큰 단락 마다 해당 주석 시작 큰 표기할 것 

5) 코드 합치는 일정
    - 6/9(월), 6/10(화), 6/11(수) : 일 최소 1회 이상 통합 및 배포
    - 파일 공유(통합) 방식
      ① 각자 작업한 깃허브 파일위치 카톡으로 공유
      ② 김재영님이 팀원 파일 통합
      ③ 김재영님이 작업한 통합된 파일로 팀원들 작업 진행
    - 깃허브 커밋 메시지 통일할 것 
       예시) v0.1_250605_작업내용(35%) → 버전(수정 횟수)_커밋날짜_작업내용(해당 페이지 진도율)