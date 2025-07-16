const days = [ '월요일', '화요일', '수요일', '목요일', '금요일', '토요일','일요일' ];
// console.log(days[days.len
// gth - 1]); // 항상 마지막 값

const person = {
    name: '홍길동',
    age: 30,
    email: 'hong@gmail.com'
}

console.log(person.name); // 객체의 속성에 접근
console.log(person['age']); // 대괄호 표기법으로도 접근 가 능


const animals = ['개', '고양이', '토끼', '새'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]); // 배열의 각 요소에 접근
}

animals.forEach((animal, index, array) => {
console.log("🚀 ~ animals.forEach ~ index:", index)
console.log("🚀 ~ animals.forEach ~ animal:", animal)
console.log("🚀 ~ animals.forEach ~ array:", array)
});


// map - 배열의 각 요소를 변환하여 새로운 배열 생성
// filter - 조건에 맞는 요소만 추출하여 새로운 배열 생성
// find - 조건에 맞는 첫 번째 요소를 찾음
// some - 조건에 맞는 요소가 하나라도 있는지 확인
// every - 모든 요소가 조건에 맞는지 확인

const newAnimals = animals.map((item) => `동물: ${item}`);
console.log("🚀 ~ newAnimals :", newAnimals)

const filteredAnimals = animals.filter((item) => item.length === 1);
console.log("🚀 ~ filteredAnimals :", filteredAnimals)

const foundAnimal = animals.find((item) => item.length === 1);
console.log("🚀 ~ foundAnimal :", foundAnimal)

const somAnimal = animals.some((item) => item.length === 1);
console.log("🚀 ~ somAnimal :", somAnimal)

const everyAnimal = animals.every((item) => item.length === 1);
console.log("🚀 ~ everyAnimal :", everyAnimal)


console.log("🚀 ~ 원본 배열:", animals);


// logical opreators
const user = {
    isLoggedIn: true, // 로그인 상태
    role: 'admin' // 사용자 역할 (예: admin, user, guest)
};

const isAccessAdminPage = user.isLoggedIn && user.role === 'admin';
console.log("🚀 ~ isAccessAdminPage:", isAccessAdminPage); // true

if(isAccessAdminPage) {
    console.log("🚀 ~ 관리자 페이지에 접근할 수 있습니다.");
} else {
    console.log("🚀 ~ 관리자 페이지에 접근할 수 없습니다.");
}

const isaccessUserPage = user.isLoggedIn || user.role === 'user';
console.log("🚀 ~ isaccessUserPage:", isaccessUserPage); // true

// if(isaccessUserPage) {
//     console.log("🚀 ~ 사용자 페이지에 접근할 수 있습니다.");
// } else {
//     console.log("🚀 ~ 사용자 페이지에 접근할 수 없습니다.");
// }

console.log(isaccessUserPage ? "🚀 ~ 사용자 페이지에 접근할 수 있습니다." : "🚀 ~ 사용자 페이지에 접근할 수 없습니다." );

const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log("🚀 ~ firstColor:", firstColor);
console.log("🚀 ~ secondColor:", secondColor)
console.log("🚀 ~ thirdColor:", thirdColor);


const double = (num = 1) => {
    return num * 2;
}

console.log("🚀 ~ double(5):", double(5)); // 10
console.log("🚀 ~ double(5):", double()); // 10

// spread syntax
// 배열이나 객체를 복사하거나 결합할 때 사용
const copyArr = [...animals, "value"];
console.log("🚀 ~ animals:", animals); // ['개', '고양이', '토끼', '새']
console.log("🚀 ~ copyArr:", copyArr); // ['개', '고양이', '토끼', '새', 'value']

const todoItem = {
    id: 1,
    content: 'react 공부하기',
}

const newItem = {
    ...todoItem,
    completed: false, // 새로운 속성 추가
    id: 2, // 기존 속성 덮어쓰기
};

console.log("🚀 ~ todoItem:", todoItem); // { id: 1, content: 'react 공부하기' }
console.log("🚀 ~ newItem:", newItem); // { id: 1, content: 'react 공부하기', completed: false }


// javascript에서 false로 간주되는 것들
// 1. 숫자 0
// 2. 빈 문자열 ''
// 3. null
// 4. undefined
// 5. NaN (Not a Number)
// 6. false (불리언 값 자체)

// !![] 결과값 : true
// !!{} 결과값 : true
// !!0 결과값 : false
// !!'' 결과값 : false
// !!null 결과값 : false
// !!undefined 결과값 : false
// !!NaN 결과값 : false