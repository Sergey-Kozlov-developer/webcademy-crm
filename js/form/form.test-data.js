class ExampleItem {
	constructor(name, phone, email, product) {
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.product = product;
	}
}
// на основе класса создаем массив с тестовыми данными
const testData = [
	new ExampleItem(
		"Иван Фролов",
		parseInt("+420772551797"),
		"frolov@gmail.com",
		"course-js"
	),
	new ExampleItem(
		"Елена Иванова",
		parseInt("+420772551797"),
		"ivanova@seznam.cz",
		"course-js"
	),
	new ExampleItem(
		"Василий Пупкин",
		parseInt("+420776555787"),
		"pupkin@mail.ru",
		"course-vue"
	),
	new ExampleItem(
		"Егор Безруков",
		parseInt("+420772557757"),
		"bezrukov@seznam.cz",
		"course-wordpress"
	),
	new ExampleItem(
		"Екатерина Похоменко",
		parseInt("+420777554717"),
		"pochomenko@mail.ru",
		"course-php"
	),
	new ExampleItem(
		"Валентин Козлюк",
		parseInt("+420770552577"),
		"kozluk@seznam.cz",
		"course-vue"
	),
	new ExampleItem(
		"Светлана Козырь",
		parseInt("+420773555727"),
		"kozyr@seznam.cz",
		"course-html"
	),
	new ExampleItem(
		"Роман Веселый",
		parseInt("+420779554747"),
		"vesely@seznam.cz",
		"course-php"
	),
];

function getRandomIndex(max) {
	return Math.floor(Math.random() * max);
}
// возвращает рандомный элемент из массива
export default function getRandomData() {
	const index = getRandomIndex(testData.length);
	return testData[index];
}
