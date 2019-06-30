let products = [
    {
        title: 'Техас',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/12/pepperoni_i_tomaty_small.png',
        description: 'Лук, Томатный соус Domino\'s, Кукуруза, Ветчина, Сыр моцарелла, Шампиньоны',
        price: '9.9р'
    },
    {
        title: 'Гавайская',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/gavayskaya.png',
        description: 'Сыр моцарелла, Курица, Томатный соус Domino\'s, Ананас',
        price: '9.9р'
    },
    {
        title: 'Пепперони и томаты',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/12/pepperoni_i_tomaty_small.png',
        description: 'Соус барбекю, Пепперони, Сыр моцарелла, Томаты',
        price: '9.9р'
    },
    {
        title: 'Овощная',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png',
        description: 'Сладкий перец, Сыр моцарелла, Лук, Томаты, Оливки, Шампиньоны, Томатный соус Domino\'s',
        price: '9.9р'
    },
];

let Image = function (classNames, src, alt) {
    this.classNames = classNames;
    this.src = src;
    this.alt = alt || 'Broken image';
    return $('<img/>')
        .addClass(this.classNames)
        .attr({
            'src': this.src,
            'alt': this.alt
        });
};

let Button = function (text, classNames) {
    this.text = text;
    this.classNames = classNames || 'uk-button uk-button-default';
    return $('<button/>')
        .addClass(this.classNames)
        .text(this.text);
};

let Heading = function (level, text, classNames) {
    this.text = text;
    this.level = level;
    this.classNames = classNames || 'uk-card-title';
    return $(`<h${this.level}/>`)
        .text(this.text)
        .addClass(this.classNames);
};

let Paragraph = function (text, classNames) {
    this.text = text;
    this.classNames = classNames;
    return $('<p/>')
        .html(this.text)
        .addClass(this.classNames);
};
let Input = function (val, placeholder, classNames,  type) {
    this.placeholder = placeholder;
    this.className = classNames || 'uk-input';
    this.type = type || 'text';
    this.val = val || '';
    return $('<input/>')
        .addClass(this.className)
        .attr({
            type: this.type,
            placeholder: this.placeholder
        })
        .val(this.val);
};


// на данный момент для формы создал свой класс инпута
let InputForm = function (classNames, type, placeholder,) {
    this.className = classNames || 'uk-input';
    this.type = type || 'text';
    this.placeholder = placeholder;
    return $('<input/>')
        .addClass(this.className)
        .attr({
            type: this.type,
            placeholder: this.placeholder
        });
};
let Legend = function (text, className ,id) {
    this.text = text;
    this.className = className;
    this.id = id;
    return $('<legend/>')
        .addClass(this.className)
        .attr({
            id: this.id
        })
        .text(this.text);
};
let Label = function (text, attr) {
    this.text = text;
    this.attr = attr;
    return $('<label/>')
        .attr({
            for: this.attr
        })
        .text(this.text);
};
let Textarea = function (classNames, rows, placeholder,) {
    this.className = classNames;
    this.rows = rows;
    this.placeholder = placeholder;
    return $('<textarea/>')
        .addClass(this.className)
        .attr({
            rows: this.rows,
            placeholder: this.placeholder
        });
};



window.onload = function () {
    products.forEach(function (product) {
        $('#product-list').append(new Card(product.title, product.image, product.description, product.price));
    });

    $('#nav-container').append(new Nav([
        {
            text: 'Главная',
            address: '/',
            className: '',
            wrapper: 'li',
        },
        {
            text: 'О нас',
            address: '/about',
            className: '',
            wrapper: 'li',
        },
        {
            text: 'Корзина',
            address: '#modal-example',
            className: 'uk-text-danger',
            wrapper: 'li',
            specAttr: 'uk-toggle'
        },
        {
            text: 'Оформить заказ',
            address: '/checkout',
            className: 'uk-text-success',
            wrapper: 'li',
        }
    ]));
};