import React from 'react';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as MenuIcon} from '../../images/ibtn-menu.svg';
import {
    Page,
    Link,
    ListInput,
    List,
    F7Button
} from 'framework7-react';

function inputClick() {



}

export default () => (
    <Page className="home-screen">
        <div className="home-screen__head">
            <Link href="#" panelOpen="left" className="home-screen__menu">
                <MenuIcon/>
            </Link>
            <div className="home-screen__logo">
                <Logo/>
            </div>
        </div>

        <div className="home-screen__content">
            <List className="home-screen__form">
                <ListInput floatingLabel={true} label="Откуда" type="text" placeholder="Пермь" clearButton={false} onFocus={inputClick} readonly />
                <ListInput floatingLabel={true} label="Куда" type="text" placeholder="Березники" clearButton={false} readonly />
                <ListInput floatingLabel={true} label="Дата" type="text" placeholder="Дата" clearButton={false} readonly className="w-50" />
                <ListInput floatingLabel={true} label="Пассажиры" type="text" placeholder="Пассажиры" clearButton={false} className="w-50" readonly />


            </List>
            <F7Button className="btn--accent">Найти свой рейс</F7Button>
        </div>

    </Page>
);
