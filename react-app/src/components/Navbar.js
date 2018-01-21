import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav nav-pills flex-column flex-sm-row">
                <a className="flex-sm-fill text-sm-center nav-link active" href="#">О нас</a>

                <a className="flex-sm-fill text-sm-center nav-link" href="#">Услуги  и товары</a>

                <a className="flex-sm-fill text-sm-center nav-link" href="#">Контакты</a>

                <a className="flex-sm-fill text-sm-center nav-link" href="#">Новости</a>
            </nav>
        );
    }
}

export default Navbar;