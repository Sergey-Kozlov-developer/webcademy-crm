const requests = loadRequests();

class Request {
    constructor(id, name, phone, email, product){
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.product = product,
        this.date = new Date().toISOString(),
        this.status = 'new'
    }
}

function addRequest(formData){
    // Определяем ID
    const id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 1;

    // Создаем заявку
    const request = new Request(id, formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('product'))

    // Добавляем в массив с заявками
    requests.push(request)

    // Сохранить в localStorage
    saveRequests();
}

function saveRequests(){
    localStorage.setItem('requests', JSON.stringify(requests))
}

function loadRequests(){
    return localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : [];
}

function getRequests(){
    return prepareRequests(requests)
}

const products = {
    'course-html': 'Курс по верстке',
    'course-js': 'Курс по JavaScript',
    'course-vue': 'Курс по Vue JS',
    'course-php': 'Курс по PHP',
    'course-wordpress': 'Курс по WordPress',
}

const statuses = {
    'new': 'Новая',
    'inwork': 'В работе',
    'complete': 'Завершена',
}
// функция для изменения даты и статуса
function prepareRequests (requests){
    return requests.map((item) => {
        return {
            ...item,
            date: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status],
        }
    })
}

export { addRequest, getRequests }