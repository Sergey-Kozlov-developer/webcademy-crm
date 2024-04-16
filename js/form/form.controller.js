import getRandomData from "./form.test-data.js";
import * as view from "./form.view.js";
import * as model from "./../model.js";

function init() {
	// получаем тестовые данные
	renderTestData();
	// запускаем прослушку
	setupEventListeners();
}
// прослушка клика
function setupEventListeners() {
	view.elements.form.addEventListener("submit", formSubmitHendler);
}

function renderTestData() {
	view.insertTestData(getRandomData());
}

function formSubmitHendler(e) {
	e.preventDefault();
	const formData = view.getFormInput();
	model.addRequest(formData);
	// очищение полей формы
	view.clearForm();
	renderTestData(); // в реальном приложении не выводим опять данные
}

init();
