// 1. 데이터 모델링
const students = [
    { studentId: 2024001, name: "김철수", major: "컴퓨터공학과" },
    { studentId: 2024002, name: "이영희", major: "인공지능학과" },
    { studentId: 2024003, name: "박지성", major: "데이터사이언스학과" }
];
const courses = [
    { courseId: "CS101", courseName: "웹 프로그래밍 기초", professorName: "이교수" },
    { courseId: "AI202", courseName: "머신러닝 입문", professorName: "최교수" },
    { courseId: "DS303", courseName: "데이터 시각화", professorName: "박교수" }
];
const enrollments = [
    { enrollmentId: 1, studentId: 2024001, courseId: "CS101", grade: "A+" },
    { enrollmentId: 2, studentId: 2024001, courseId: "AI202", grade: "B" },
    { enrollmentId: 3, studentId: 2024002, courseId: "AI202", grade: "A" },
    { enrollmentId: 4, studentId: 2024002, courseId: "DS303", grade: "F" },
    { enrollmentId: 5, studentId: 2024003, courseId: "CS101", grade: "C+" }
];


for( let i = 0; i <= students.length -1; i++ ){
    let student = students[i];

    document.write( `<h3> ${ student.name } </h3>` );

    for( let j = 0; j <= enrollments.length - 1; j++ ){
        let enroll = enrollments[j];

        //console.log( enroll.courseId )

        for( let k = 0; k <= courses.length - 1; k++ ){
            let course = courses[k];

             if( enroll.courseId == course.courseId ){
                document.write( `<h4> ${course.courseName} </h4>` )
             }

        }
    }

}