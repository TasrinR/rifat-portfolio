import styles from "@/components/common/navbar/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleResponsiveNav = () => {
    setShowNav(!showNav);
    document.body.classList.toggle("hide");
  };
  return (
    <div className={styles["container"]}>
      <Link href="/" className={styles["logo"]}>
        Luchus
      </Link>
      <nav className={styles["nav"]}>
        <Link href="#services">Services</Link>
        <Link href="#works">Works</Link>
        <Link href="#about">About</Link>
      </nav>
      <Link href="#footer" className={styles["contact-button"]}>
        Get In Touch
      </Link>
      <img
        src="/images/menu-icon.svg"
        className={styles["responsive-nav"]}
        onClick={handleResponsiveNav}
      />
      {showNav && (
        <div
          className={styles["container-responsive"]}
          onClick={handleResponsiveNav}
        >
          <img
            src="/images/close.svg"
            className={styles["close"]}
            onClick={handleResponsiveNav}
          />
          <Link href="#services">Services</Link>
          <Link href="#works">Works</Link>
          <Link href="#about">About</Link>
          <Link href="#footer">Get In Touch</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
