import styles from "@/components/about-me/MyStory.module.css";
import SubHeading from "@/components/common/sub-heading/SubHeading";
import ShowHistory from "@/components/history/ShowHistory";

const MyStorySection = () => {
  return (
    <div className={styles["container"]} id="about">
      <div className={styles["content"]}>
        <h2 className={styles["heading"]}>My Story</h2>
        <div className={styles["text-container"]}>
          <p>
            I've always been fascinated by how people interact with technology.
            I remember when I was a kid, I would spend hours playing with my
            computer, trying to figure out how it worked. I was always curious
            about what made a good user experience, and what made a bad one.
          </p>
          <p>
            As I got older, I started to learn more about UX/UI design. I was
            fascinated by the idea of creating products that were both useful
            and enjoyable to use. I wanted to make a difference in the world by
            designing products that made people's lives easier and more
            enjoyable.
          </p>
          <p>
            I'm passionate about UX/UI design because I believe it has the power
            to make a difference in the world. I want to create products that
            make people's lives easier, more enjoyable, and more meaningful. I'm
            committed to using my skills and experience to make the world a
            better place.
          </p>
        </div>
      </div>
      <div className={styles["profile-image"]}>
        <img src="/images/profile-image.svg" />
      </div>
      <div className={styles["history-section"]}>
        <SubHeading heading={"History"} />
      </div>
      <ShowHistory />
    </div>
  );
};

export default MyStorySection;
