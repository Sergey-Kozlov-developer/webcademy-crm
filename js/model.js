// все заявки хранятся в localStorage в requests 
// если нет заявок то возвращается пустой массив
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

// фильтр равен или стартовому фильтру или беруться данные из localStorage
const filter = loadFilter();

function loadFilter() {
    // начальный фильтр
    let filter = {
        products: 'all',
        status: 'all'
    }
    // проверяем есть ли фильтр в localStorage
    if(localStorage.getItem('filter')) {
        filter = JSON.parse(localStorage.getItem('filter'));
    }


    return filter;
}


function changeFilter(prop, value) {
    filter[prop] = value;
    // save localStorage filter 
    localStorage.setItem('filter', JSON.stringify(filter));

    return filter;
}
// отфильтрованные заявки
function filterRequests(filter) {
    let filteredRequests;
    // фильтрация по продукту
    if (filter.products !== 'all') {
        filteredRequests = requests.filter((request) =>  request.product === filter.products)
    } else {
        filteredRequests = [...requests]
    }
    // фильтр по статусу
    if(filter.status !== 'all') {
        filteredRequests = filteredRequests.filter((request) => request.status === filter.status)
    }


    return prepareRequests(filteredRequests);
}

// кол-во новых заявок badge 
function countNewRequests() {
    const newRequests = requests.filter((el) => el.status === 'new');
    return newRequests.length
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
    // отдаем отфильтрованные заявки 
    return filterRequests(filter)
    
}

// функция для изменения даты и статуса
function prepareRequests (requests){
    return requests.map((item) => {
        return {
            ...item,
            dateToDisplay: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status],
        }
    })
}
// ищет и возвращает заявку по id
function getRequestById(id) {
    const request = requests.find((item) => item.id == id);

    request.dateDate = new Date(request.date).toLocaleDateString();
    request.dateTime = new Date(request.date).toLocaleTimeString();

    return request;
}
// передает обновленные данные после редактирования заявки
function updateRequest(formData) {
    // получаем заявки из localStorage
    const request = getRequestById(formData.get('id'));
    // обновляем данные
    request.name = formData.get('name');
    request.email = formData.get('email');
    request.phone = formData.get('phone');
    request.product = formData.get('product');
    request.status = formData.get('status');
    saveRequests(); // сохранили в localStorage
}

function getFilter(){
    return {...filter}
}

export { addRequest, getRequests, getRequestById, updateRequest, changeFilter, filterRequests, countNewRequests, getFilter }