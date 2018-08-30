import React from 'react';

const Signup = () => {
    return (
        <div className="col-6 ml-auto mr-auto mt-5">
            <h4>
                Регистрация
            </h4>

            <form className="my-4" action='/user/signup' method='post'>
                <div className="form-group">
                    <label htmlFor="inputEmail">
                        Логин
                    </label>

                    <input id="inputEmail" name='email' type="email" className="form-control" aria-describedby="emailHelp" placeholder="Введите адрес электронной почты"/>

                    <small id="emailHelp" className="form-text text-muted">
                        На этот адрес Вам придет письмо с подтверждением регистрации
                    </small>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="inputPassword">
                        Пароль
                    </label>

                    <input id="inputPassword" name='password' type="password" className="form-control" placeholder="Введите пароль для входа в аккаунт"/>
                </div>

                <button type="submit" className="btn btn-outline-primary mt-3">
                    Отправить
                </button>
            </form>

            <a href="/auth/google">
                <img className='w-50' src={ require('../_images/google_signup_button.png') } alt="Войти с Google"/>
            </a>
        </div>
    );
};

export default Signup;

