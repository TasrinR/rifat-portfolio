import styles from "@/components/motto/Motto.module.css";

const Motto = () => {
  return (
    <div className={styles["container"]}>
      <h5 className={styles["heading"]}>My Motto</h5>
      <h3 className={styles["content"]}>Giving UP Is never an option</h3>
      <p className={styles["content-by"]}>Lance Armstrong</p>
    </div>
  );
};

export default Motto;
