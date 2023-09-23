import React from "react";
import styles from "@/components/eye-catch/EyeCatchSection.module.css";

const EyeCatchSection = () => {
  return (
    <section className={styles["section"]}>
      <img className={styles["eye-catch-vector"]} src={"/images/vector.svg"} />
      <div className={styles["ui-span"]}>
        <h1>UI</h1>
        <p>is for</p>
      </div>
      <h1 className={styles["ui-heading"]}>usable</h1>
      <h2 className={styles["ui-second-heading"]}>interfaces</h2>
    </section>
  );
};

export default EyeCatchSection;
