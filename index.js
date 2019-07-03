//Команда require запрашивает модуль из папки node_modules
const express = require('express');
const path = require('path');
const app = express();

//Настройка выдачи статических файлов
app.use('/styles', express.static('styles/'));
app.use('/img', express.static('images/'));
app.use('/js', express.static('js/'));


//Настройка порта сервера
app.set('port', process.env.PORT || 8080);

//Обработка корневого маршрута
app.get('/', function (req, res) {
    //Отправляем файл страницы
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function (req, res) {
    //Отправляем файл страницы
    res.sendFile(path.join(__dirname + '/pages/about.html'));
});

app.get('/checkout', function (req, res) {
    //Отправляем файл страницы
    res.sendFile(path.join(__dirname + '/pages/checkout.html'));
});
app.get('/contacts', function (req, res) {
    //Отправляем файл страницы
    res.sendFile(path.join(__dirname + '/pages/contacts.html'));
});

//Просшуиваем порт на запросы
app.listen(app.get('port'));



