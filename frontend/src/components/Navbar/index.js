import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { loggedIn } = useAuth();
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">Düzce İ.Ö.O</Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/dersprogramı">Ders Programı</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button colorScheme="whatsapp">Giriş Yap</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="facebook">Kayıt Ol</Button>
            </Link>
          </>
        )}
        {loggedIn && (
          <Link to="/profile">
            <Button>Profile</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
