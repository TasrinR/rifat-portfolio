import styles from "@/components/profile/show-skills/ShowSkills.module.css";
const ShowSkills = () => {
  const skills = [
    {
      heading: "Research",
      description:
        "Well sometimes in think im a scientist myself, but mostly AI does all the work for me.",
    },
    {
      heading: "Visual Design",
      description:
        "I search the internet for visual references and then combine them to create my own work.",
    },
    {
      heading: "Product Design",
      description:
        "I utilize common design best practices, test, and re-iterate until it works (hopefully).",
    },
    {
      heading: "Problem-Solving",
      description:
        "I'm a critical thinker who gets shit done by breaking down problems into smaller, more manageable pieces.",
    },
    {
      heading: "Sympathy",
      description: "If needed.",
    },
  ];
  return (
    <div className={styles["container"]}>
      {skills.map((skill, index) => (
        <div className={styles["item"]} key={index}>
          <p className={styles["heading"]}>{skill.heading}</p>
          <span className={styles["description"]}>{skill.description}</span>
        </div>
      ))}
    </div>
  );
};

export default ShowSkills;
