import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            site_title: 'Ma Vitrine',
            phone_contact_link: "tel:0563456958",
            phone_contact: '05 63 45 69 58',
            header_background: 'black',
            header_background_opacity: 0.2
        };
    }

    render() {
        return (
            <div className="header" >
                <div className="header__background" style={{ backgroundColor: this.state.header_background, opacity: this.state.header_background_opacity }}>

                </div>
                <div className="header__container">
                    <h1 className="header__container__title">{this.state.site_title}</h1>
                    <div className="header__container__links">
                        <div className="header__container__links__container">
                            <a href="#">
                                <FontAwesomeIcon
                                    icon="at"
                                />
                                <span>Contactez nous</span>
                            </a>
                        </div>
                        <div className="header__container__links__container">
                            <a href="#">
                                <FontAwesomeIcon
                                    icon="map-signs"
                                />
                                <span> Où nous trouver</span>
                            </a>
                        </div>
                        <div className="header__container__links__container">
                            <a href={this.state.phone_contact_link}>
                                <FontAwesomeIcon
                                    icon="phone-alt"
                                />
                                <span>{this.state.phone_contact}</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        // isStart: state.home.isStart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

