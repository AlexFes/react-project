import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className="col-6 ml-auto mr-auto mt-5">
                <h4 className="mt-4">Наши контакты</h4>

                <div className="row mt-4">
                    <h6>
                        Если у Вас возникла необъяснимая тяга к общению
                        с нами, не сдерживайте себя, поддайтесь своему желанию…
                    </h6>
                </div>

                <div className="row mt-5">
                    <div className="col-6">
                        <h6>
                            Наш телефон:
                        </h6>

                        <p>
                            +7 (926) 197-54-74
                        </p>
                    </div>

                    <div className="col-6">
                        <h6>
                            Адрес электронной почты:
                        </h6>

                        <p>
                            fesnext@gmail.com
                        </p>
                    </div>
                </div>

                <div className="row mt-5">
                    <h6>
                        Навестить нас можно по адресу:
                    </h6>

                    <p>
                        Калужская область, Жуковский район,
                        северо-восточнее деревни
                        Дадровка
                    </p>
                </div>
            </div>
        );
    }
}

export default Contacts;