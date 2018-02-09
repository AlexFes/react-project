import React from 'react';

class Singup extends React.Component {
    render() {
        return (
            <div className="col-6 ml-auto mr-auto mt-5">
                <h4>
                    Регистрация
                </h4>

                <form className="mt-4">
                    <div className="form-group">
                        <label htmlFor="inputEmail">
                            Логин
                        </label>

                        <input id="inputEmail" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Введите адрес электронной почты"/>

                        <small id="emailHelp" className="form-text text-muted">
                            На этот адрес Вам придет письмо с подтверждением регистрации
                        </small>
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="inputPassword">
                            Пароль
                        </label>

                        <input id="inputPassword" type="email" className="form-control" placeholder="Введите пароль для входа в аккаунт"/>
                    </div>

                    <button type="submit" className="btn btn-outline-primary mt-3">
                        Отправить
                    </button>
                </form>
            </div>
        );
    }
}

export default Singup;

