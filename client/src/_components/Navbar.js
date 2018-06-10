import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    renderSingup() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li className="nav-item ml-auto">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to="/singup">
                            Регистрация
                        </Link>
                    </li>
                );
            default:
                return (
                    <li className="nav-item">
                        <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" href='/api/logout'>
                            Выйти
                        </a>
                    </li>
                );
        }
    }

    renderAccount() {
        switch(this.props.auth) {
            case null || false:
                return;
            default:
                return (
                    <li className="nav-item ml-auto">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success mr-2" to='/account'>
                            Личный кабинет
                        </Link>
                    </li>
                );
        }

    }

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

                    { this.renderAccount() }

                    { this.renderSingup() }
                </ul>

                <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Navbar);