import SubHeading from "@/components/common/sub-heading/SubHeading";
import styles from "@/components/profile/Profile.module.css";
import ShowSkills from "@/components/profile/show-skills/ShowSkills";

const ProfileSection = () => {
  return (
    <section className={styles["profile-section"]}>
      <div className={styles["about-me-section"]}>
        <SubHeading heading={"About Me"} />
        <p className={styles["content"]}>
          I'm Rifat Sazzad (Luchu) a{" "}
          <span className={styles["highlighted"]}>Product Designer</span> with
          strong focus on producing high quality & impactful{" "}
          <span className={styles["highlighted"]}>Digital Experience.</span>
        </p>
      </div>
      <div className={styles["skill-section"]} id="services">
        <div className={styles["skill-heading"]}>
          <SubHeading heading={"What I Do"} />
        </div>
        <ShowSkills />
      </div>
      <div className={styles["experience-section"]}>
        <SubHeading heading={"Experience"} />
        <p className={styles["content"]}>
          A <span className={styles["highlighted"]}>Seasoned</span> UI/UX
          designer with a proven track record of working with{" "}
          <span className={styles["highlighted"]}>Talented teams</span> to
          create successful{" "}
          <span className={styles["highlighted"]}>Products</span>.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
