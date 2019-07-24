let nav = [
    {
        text: 'Главная',
        address: '/',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'О проекте',
        address: '/about',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'Контакты',
        address: '/contacts',
        className: '',
        wrapper: 'li',
    },
    {
        text: 'Оформить заказ',
        address: '/checkout',
        className: 'uk-text-success',
        wrapper: 'li',
    },
    {
        text: 'Корзина',
        address: '#modal-example',
        className: 'uk-text-danger open-modal-btn card',
        wrapper: 'li',
        specAttr: 'uk-toggle'
    }
];
let products = [
    {
        id: 1,
        title: 'Техас',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/12/pepperoni_i_tomaty_small.png',
        description: 'Лук, Томатный соус Domino\'s, Кукуруза, Ветчина, Сыр моцарелла, Шампиньоны',
        price: '9.9р'
    },
    {
        id: 2,
        title: 'Гавайская',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/gavayskaya.png',
        description: 'Сыр моцарелла, Курица, Томатный соус Domino\'s, Ананас',
        price: '9.9р'
    },
    {
        id: 3,
        title: 'Пепперони и томаты',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/12/pepperoni_i_tomaty_small.png',
        description: 'Соус барбекю, Пепперони, Сыр моцарелла, Томаты',
        price: '9.9р'
    },
    {
        id: 4,
        title: 'Овощная',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png',
        description: 'Сладкий перец, Сыр моцарелла, Лук, Томаты, Оливки, Шампиньоны, Томатный соус Domino\'s',
        price: '9.9р'
    },
    {
        id: 5,
        title: 'Чикен Карри',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/12/23/%D1%81hicken_curry_small.png',
        description: 'Соус карри, Курица, Ветчина, Ананас, Сыр моцарелла',
        price: '12.9р'
    },
    {
        id: 6,
        title: 'Карбонара',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png',
        description: 'Сыр моцарелла, Шампиньоны, Крем фреш, Лук, Ветчина, Бекон',
        price: '12.9р'
    },
    {
        id: 7,
        title: 'Пепперони Блюз',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni_bluz.png',
        description: 'Сыр моцарелла, Соус Чесночный, Пепперони, Голубой сыр',
        price: '12.9р'
    },
    {
        id: 8,
        title: 'Спайси',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/spice.png',
        description: 'Пепперони, Халапеньо, Сыр моцарелла, Томатный соус Domino\'s, Томаты, Бекон',
        price: '12.9р'
    },
    {
        id: 9,
        title: 'Кантри',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/kantri.png',
        description: 'Лук, Ветчина, Соус Чесночный, Огурцы, Сыр моцарелла, Шампиньоны, Бекон',
        price: '14.9р'
    },
    {
        id: 10,
        title: '5 Сыров',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/5_syrov.png',
        description: 'Пармезан, Крем фреш, Чеддер, Голубой сыр, Фета, Сыр моцарелла',
        price: '14.9р'
    },
    {
        id: 11,
        title: 'Тоскана',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/toskana.png',
        description: 'Томаты, Фета, Курица, Сыр моцарелла, Соус Чесночный, Шпинат',
        price: '14.9р'
    },
    {
        id: 12,
        title: 'Белорусская',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/belorusskaya.png',
        description: 'Бекон x 2, Соус Чесночный, Сыр моцарелла, Телятина x 2, Лук, Огурцы, Картофельные дольки',
        price: '14.9р'
    }
];
let otherProducts = [
    {
        id: 14,
        title: 'Кока-кола 0,5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%BA%D0%BE%D0%BB%D0%B0_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '',
        price: '2.1р'
    },
    {
        id: 15,
        title: 'Кока-кола Зеро 0,5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B7%D0%B5%D1%80%D0%BE_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '',
        price: '2.1р'
    },
    {
        id: 16,
        title: 'Фанта Апельсин 0,5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A4%D0%B0%D0%BD%D1%82%D0%B0_%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD_05%D0%BB.png',
        description: '',
        price: '2.1р'
    },
    {
        id: 17,
        title: 'Спрайт 0,5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BF%D1%80%D0%B0%D0%B9%D1%82_05_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png',
        description: '',
        price: '2.1р'
    },
    {
        id: 18,
        title: 'Бонаква Среднегазированая 0,5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D1%81%D1%80_%D0%B3%D0%B0%D0%B7_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '',
        price: '1.4р'
    },
    {
        id: 19,
        title: 'Бонаква Негазированная 0,5 л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2018/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D0%BD-%D0%B3%D0%B0%D0%B7_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_19.11.18.png',
        description: '',
        price: '1.4р'
    },
    {
        id: 20,
        title: 'FUZE TEA Черный чай Лесные ягоды 0,5л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2019/01/29/FUZE_TEA_BT_500_Dry_Berries_Closed.png',
        description: '',
        price: '2.2р'
    },
    {
        id: 21,
        title: 'FUZE TEA Клубника и Малина 0,5л',
        image: 'https://images.dominos.by/media/dominos/osg/api/2019/01/29/FUZE_TEA_GT_500_Dry_StrawbRasp_Closed.png',
        description: '',
        price: '2.2р'
    },
];

let Image = function (classNames, src, alt) {
    this.classNames = classNames || '';
    this.src = src;
    this.alt = alt || 'Broken image';
    this.$template = $('<img/>')
        .addClass(this.classNames)
        .attr({
            'src': this.src,
            'alt': this.alt
        });
    return this.$template;
};
let Button = function (text, classNames) {
    this.text = text;
    this.classNames = classNames || 'uk-button uk-button-default';
    this.$template = $('<button/>')
        .addClass(this.classNames)
        .text(this.text);
    return this.$template;
};
let Heading = function (level, text, classNames) {
    this.text = text;
    this.level = level;
    this.classNames = classNames || 'uk-card-title';
    this.$template = $(`<h${this.level}/>`)
        .text(this.text)
        .addClass(this.classNames);
    return this.$template;
};
let Paragraph = function (text, classNames) {
    this.text = text;
    this.classNames = classNames;
    this.$template = $('<p/>')
        .html(this.text)
        .addClass(this.classNames);
    return this.$template;
};
let Input = function (val, placeholder, classNames, type) {
    this.className = classNames || 'uk-input';
    this.type = type || 'text';
    this.val = val || '';
    this.$template = $('<input/>')
        .addClass(this.className)
        .attr({
            type: this.type,
            placeholder: this.placeholder
        })
        .val(this.val);
    return this.$template;
};

let List = function (id, className) {
    this.id = id;
    this.className = className || '';
    this.$template = $('<ul/>')
        .addClass(this.className)
        .attr('id', this.id);

    return this.$template;
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
        // $('#pizza-list').append(new Card(product.title, product.image, product.description, product.price));
        $('#pizza-list').append(new Card(product));
    });
    otherProducts.forEach(function (otherProducts) {
        // $('#other-list').append(new Card(otherProducts.title, otherProducts.image, otherProducts.description, otherProducts.price));
        $('#other-list').append(new Card(otherProducts));

    });
    $('.form').append(new Form());
    $('.feedback').append(new Button('Связаться с нами', 'uk-button uk-button-secondary feedback_btn'));

    $('.feedback_btn').on('click', function () {
        alert(`
        Скоро появится связь с нами!
        Подождите немножко :)
        `);
    });
    $('#nav-container').append(new Nav(nav));
    $('.contacts_menu').append(new Nav(nav));
    $('.checkout_menu').append(new Nav(nav));
    $('.about_menu').append(new Nav(nav));

    //выподающее меню
    $('.pzzlogo').on('mouseover', function (e) {
        e.preventDefault()
        $('.uk-navbar-nav').css({
            left: '-65px'
        });
    });
    $('.pzzlogo').on('mouseout', function (e) {
        e.preventDefault()
        $('.uk-navbar-nav').css({
            left: '-300px'
        });
    });

    // $('.btnOrder').on('click', function (e) {
    //     console.log('svdf');
    //
    //     $('#item-list').append();
    // });

    // $('.card').on('click', function () {
    //     for (let i = 0; i < cardProducts.length; i++) {
    //         $('#item-list').append(new CardItem(cardProducts[i].image, cardProducts[i].title, cardProducts[i].count));
    //     }
    // });


};