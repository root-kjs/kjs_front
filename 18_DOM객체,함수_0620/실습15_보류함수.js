// 아직 하다 말았는데 똑같은 부서명, 사원명 넣었을때 유효성 검사 
// 뭔가 비효율적인것 같기도....;; 250620

for( i = 0; i <= dpartmentList.length - 1; i++ ){
    let dpartment = dpartmentList[i]
    if( dname === dpartment.dname ){
        alert( '이미 같은 이름의 부서명이 있습니다. 다른 부서명을 입력하세요!' )

    }
}

forDpartmentList( dname );

function forDpartmentList(){
   for( i = 0; i <= dpartmentList.length - 1; i++ ){
        let dpartment = dpartmentList[i]
    } 
}