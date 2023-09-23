import styles from "@/components/common/footer/social-media/SocialMedia.module.css";
import Link from "next/link";

const SocialMedia = ({ mediaName, description, href }) => {
  return (
    <Link className={styles["container"]} href={href}>
      <span className={styles["triangle"]}></span>
      <div className={styles["content"]}>
        <h6 className={styles["media"]}>{mediaName}</h6>
        <p className={styles["description"]}>{description}</p>
      </div>
    </Link>
  );
};

export default SocialMedia;
