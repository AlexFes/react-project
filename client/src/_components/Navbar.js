import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    renderSignup() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li className="nav-item">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to="/signup">
                            Регистрация
                        </Link>
                    </li>
                );
            default:
                return (
                    <li className="nav-item">
                        <a className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" href='/user/logout'>
                            Выйти
                        </a>
                    </li>
                );
        }
    }

    renderAccount() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li className="nav-item ml-auto">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success mr-2" to='/login'>
                            Войти
                        </Link>
                    </li>
                );
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
        console.log(this.props.auth);

        return (
            <div>
                <ul className="nav nav-pills flex-column flex-sm-row mt-3 mx-5" role="tablist">
                    <li className="nav-item mr-2">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to='/home'>
                            О нас
                        </Link>
                    </li>

                    <li className="nav-item mr-2">
                        <Link className="flex-sm-fill text-sm-center nav-link btn btn-outline-success" to='/contacts'>
                            Контакты
                        </Link>
                    </li>

                    { this.renderAccount() }

                    { this.renderSignup() }
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