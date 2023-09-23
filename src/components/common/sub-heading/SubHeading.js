import styles from "@/components/common/sub-heading/SubHeading.module.css";

const SubHeading = ({ heading }) => {
  return <h3 className={styles["sub-heading"]}>{heading}</h3>;
};

export default SubHeading;
