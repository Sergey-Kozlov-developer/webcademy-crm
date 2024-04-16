// заявки
const requests = loadRequests();

class Request {
	constructor(id, name, phone, email, product) {
		this.id = id,
			this.name = name,
			this.phone = phone,
			this.email = email,
			this.id = product,
			this.date = new Date().toISOString(),
			this.status = "new"
	}
}

function addRequest(formData) {
	// определяем id
	const id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 0;
	// создаем заявку
	const request = new Request(id, formData.get('name'), formData.get('phone'),formData.get('email'),formData.get('product'))
	// добавляем в массив заявлк
	requests.push(request);

	saveRequests();
}
// сохраняем в localStorage
function saveRequests() {
	localStorage.setItem('requests', JSON.stringify(requests));
}
// подгружаем данные из localStorage и записываем в requests
function loadRequests() {
	return localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : [];
}



export { addRequest }