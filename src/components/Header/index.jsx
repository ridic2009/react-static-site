import React from "react";
import styles from "./index.module.scss";
import Logo from "/public/herhes.png"

import { Link } from "react-router-dom";
import Search from "../Search";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <Link className={styles.logo__link} to={`/`}>
            <img width={64} height={64} src={Logo} alt="logo" />
            <span className={styles.logo__name}>Xerxes Integrated Logistics</span>
          </Link>

          <Search />

          <nav className={styles.menu}>
            <ul>
              <li>
                <Link to={`/gallery`}>Gallery</Link>
              </li>
              <li>
                <Link to={`/hiring`}>Hiring</Link>
              </li>
              <li>
                <Link to={`/services`}>Services</Link>
              </li>
              <li>
                <Link to={`/contacts`}>Contacts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
