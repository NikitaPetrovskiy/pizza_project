window.onload = function () {
    let Form = function (title, label, input, textarea) {
        this.title = new Legend('Ваш заказ', 'uk-legend', 'formHeading');
        this.label = label; // эти параметры меняются
        this.input = input; // эти параметры меняются
        this.textarea = new Textarea('uk-textarea userComment userComment', '5', 'Например: нужда сдача, не работает домафон итд.');
        this.formButton = new Button('Оформить заказ', 'uk-button uk-button-secondary formBtn');
        return $('<form/>')
            .addClass('userForm')
            .append($('<fieldset/>')
                .addClass('uk-fieldset')
                .append(this.title)
                .append($('<div/>')
                    .addClass('uk-margin')
                    .append(new Label('Имя', 'userName')) //так как меняется
                    .append(new InputForm('uk-input userName', 'text', 'Ваше имя')) //так как меняется
                    .append($('<div/>')
                        .addClass('uk-margin')
                        .append(new Label('Адрес', 'userAdress')) //так как меняется
                        .append(new InputForm('uk-input userAdress', 'text', 'Например: ул. Машерова д.22 кв. 13')) //так как меняется
                        .append($('<div/>')
                            .addClass('uk-margin')
                            .append(new Label('Комментарий', 'userComment')) //так как меняется
                            .append(this.textarea)
                            .append(this.formButton)
                        ))))
    };

    $('.form').append(new Form());
}