import styles from "@/components/common/navbar/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
