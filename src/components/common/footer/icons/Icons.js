import styles from "@/components/common/footer/icons/Icons.module.css";
import Link from "next/link";

const Icons = () => {
  return (
    <div className={styles["container"]}>
      <Link href="https://dribbble.com/rifat-sazzad">
        <img className={styles["icon"]} src="/images/dribbble.svg" />
      </Link>
      <Link href="https://www.facebook.com/rifat.sazzad/">
        <img className={styles["icon"]} src="/images/facebook.svg" />
      </Link>
      <Link href="https://www.linkedin.com/in/rifat-sazzad/">
        <img className={styles["icon"]} src="/images/linkedin.svg" />
      </Link>
      <Link href="https://wa.me/8801312236456">
        <img className={styles["icon"]} src="/images/whatsapp.svg" />
      </Link>
    </div>
  );
};

export default Icons;
