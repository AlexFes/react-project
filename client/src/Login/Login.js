import React from 'react';

const Login = () => {
    return (
        <div className="col-6 ml-auto mr-auto mt-5">
            <h4>
                Войти
            </h4>

            <form className="my-4" action='/user/login' method='post'>
                <div className="form-group">
                    <label htmlFor="inputEmail">
                        Логин
                    </label>

                    <input id="inputEmail" name='email' type="email" className="form-control" aria-describedby="emailHelp" placeholder="Введите адрес электронной почты"/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="inputPassword">
                        Пароль
                    </label>

                    <input id="inputPassword" name='password' type="password" className="form-control" placeholder="Введите пароль для входа в аккаунт"/>
                </div>

                <button type="submit" className="btn btn-outline-primary mt-3">
                    Подтвердить
                </button>
            </form>
        </div>
    );
};

export default Login;

