// 1초 후 콜백함수 호출
setTimeout(() => console.log("1st timeout"), 1000);

// 1초 후 콜백함수 호출될 때 'Lee'가 콜백함수에 인수로 전달
setTimeout((order) => console.log(`${order} timeout`), 1000, "2st");

// 두 번째 인수(delay) 생략하면 기본값 0이 지정
setTimeout(() => console.log("hello"));

// setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id 반환
const timerId = setTimeout(() => console.log("id"), 1000);

// setTimeout 함수가 반환한 id를 clearTimeout 함수의 인수로 전달해 타이머 취소
// 타이머 취소되면 setTimeout 함수의 콜백 함수 실행되지 않음
clearTimeout(timerId);
