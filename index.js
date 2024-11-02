// Константы
const list = document.getElementById('users');
const button = document.getElementById('button');
const url = 'https://randomuser.me/api/?results=10';

//Основная функция получия и отображения данных и ошибки
function fetchRandomUsers() {
    fetch(url)
        // Делаем запрос, получаем результат, преобразуем его
        .then((res) => {
            return res.json();
        })
        // Переводим данные в массив
        .then(json => (json.results))
        .then(data => {
            // Заполняем верстку элементами массива и выводим ее на страницу
            data.forEach(user => {
                const card = `<li class="card">
            <img src="${user.picture.large}" alt="" class="card__image">
            <h2 class="card__name">${user.name.first} ${user.name.last}</h2>
            <p class="card__email">${user.email}</p>
             </li>`;
                list.insertAdjacentHTML('beforeend', card);
            });
        })
        // Обрабатываем и выводим ошибки
        .catch(function (error) {
            alert('Упс! Что-то пошло не так...', error);
        });
};

fetchRandomUsers();

// Кнопка добавления новых карточек
window.addEventListener('load', function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

button.addEventListener('click', function () {
    fetchRandomUsers();
});
