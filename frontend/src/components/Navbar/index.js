import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">Düzce İ.Ö.O</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Ders Programı</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <>
          <Link to="/signin">
            <Button colorScheme="whatsapp">Giriş Yap</Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="facebook">Kayıt Ol</Button>
          </Link>
        </>
      </div>
    </nav>
  );
}

export default Navbar;
