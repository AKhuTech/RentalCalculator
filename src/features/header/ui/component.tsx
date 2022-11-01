import Logo from "./img/kaercher_logo.png";
import styles from "./styles.module.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => {
    return (
        <header className={styles.root}>
            <Link to="/">
                <img src={Logo} className={styles.logo} alt="Logo" />
            </Link>
            <div className={styles.header}>UHP Rental Calculator</div>
            <Link to="/units" className={styles.link}>
                Units
            </Link>
            <Link to="/terms" className={styles.link}>
                Terms
            </Link>
        </header>
    );
};