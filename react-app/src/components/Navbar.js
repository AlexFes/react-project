import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills flex-column flex-sm-row mt-3 mx-5" role="tablist">
                    <li className="nav-item mr-2">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to='/home'>
                            О нас
                        </Link>
                    </li>

                    <li className="nav-item mr-2">
                        <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" href="#">Услуги  и товары</a>
                    </li>

                    <li className="nav-item mr-2">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to='/contacts'>
                            Контакты
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" href="#">Новости</a>
                    </li>

                    <li className="nav-item ml-auto">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to="/singup">
                            Регистрация
                        </Link>
                    </li>
                </ul>

                <hr/>
            </div>
        );
    }
}

export default Navbar;