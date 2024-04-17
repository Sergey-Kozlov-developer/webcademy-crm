const elements = {
	table: document.querySelector('#tbody'),
};

function renderRequests(requests) {
	elements.table.innerHTML = '';

    const badges = {
        new: 'badge-danger',
        inwork: 'badge-warning',
        complete: 'badge-success',
    }

	for (let request of requests) {
		const template = `<tr>
                <th scope="row">${request.id}</th>
                <td>${request.date}</td>
                <td>${request.productName}</td>
                <td>${request.name}</td>
                <td>${request.email}</td>
                <td>${request.phone}</td>
                <td>
                    <div class="badge badge-pill ${badges[request.status]}">${request.statusName}</div>
                </td>
                <td>
                    <a href="edit.html">Редактировать</a>
                </td>
            </tr>`;
			elements.table.insertAdjacentHTML('beforeend', template)
	}
}

export {elements, renderRequests}
