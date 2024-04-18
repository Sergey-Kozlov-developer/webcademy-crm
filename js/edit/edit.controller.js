import * as model from './../model.js'
import * as view from './edit.view.js'

function init() {
	const id = getRequestId()
	const request = model.getRequestById(id)
	view.renderRequest(request);
	setupEventListeners();
}

// прослушка события нажатия на сохранить после редактирования заявки
function setupEventListeners() {
	view.elements.form.addEventListener('submit', formSubmitHandler);
}
// поведение при отправке формы
function formSubmitHandler(e) {
	e.preventDefault();
	const formData = view.getFormInput();
	// передаем данные в модель после редактирования из view
	model.updateRequest(formData);

	window.location = './table.html';
	
}

// получаем id
function getRequestId() {
	const params = new URLSearchParams(window.location.search);
	// значение параметра id 
	return params.get('id');
	
}
// получение данных заявок из localStorage

init();