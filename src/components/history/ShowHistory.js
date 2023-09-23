import styles from "@/components/history/ShowHistory.module.css";
const ShowHistory = () => {
  const history = [
    {
      heading: "NOW",
      description: "Looking for a JOB",
      subDescription: "Need to get married.",
    },
    {
      heading: "2023",
      description: "Formed a startup",
      subDescription: "Yeeeeeeaaaahhhhhhhhhhhhhhh",
    },
    {
      heading: "2021",
      description: "Grinded my way out",
      subDescription: "Got better did some freelancing.",
    },
    {
      heading: "2020",
      description: "Took it serious",
      subDescription: "That guy made a lot more so I was furious.",
    },
    {
      heading: "2019",
      description: "Heard about UX/UI",
      subDescription:
        "It means someone i know made some money so i took some interest in it.",
    },
    {
      heading: "2018",
      description: "Got Broke",
      subDescription:
        "Was broke for generations and realized I need to start doing something or I’ll get kicked out of the civilization.",
    },
  ];
  return (
    <div className={styles["container"]}>
      {history.map((item, index) => (
        <div className={styles["item"]} key={index}>
          <p className={styles["heading"]}>{item.heading}</p>
          <span className={styles["description"]}>{item.description}</span>
          <span className={styles["sub-description"]}>
            {item.subDescription}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShowHistory;
