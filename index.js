const list = document.getElementById('users');
const button = document.getElementById('button');
const url = 'https://randomuser.me/api/?results=10';

function fetchRandomUsers() {
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then(json => (json.results))
    .then(data => {
        console.log(data);
        data.forEach(user => {
            const card = `<li class="card">
            <img src="${user.picture.large}" alt="" class="card__image">
            <h2 class="card__name">${user.name.first} ${user.name.last}</h2>
            <p class="card__email">${user.email}</p>
             </li>`;
            list.insertAdjacentHTML('beforeend', card);
        });
    })
    .catch(function (error) {
        alert('Упс! Что-то пошло не так...', error);
    });
};

fetchRandomUsers();

window.addEventListener('load', function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

button.addEventListener('click', function() {
    fetchRandomUsers();
});
