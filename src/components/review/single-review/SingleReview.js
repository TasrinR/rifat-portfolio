import styles from "@/components/review/single-review/SingleReview.module.css";

const SingleReview = ({ review }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h4 className={styles["text"]}>{review?.review}</h4>
        <p className={styles["reviewed-by"]}>{review.reviewedBy}</p>
        <p className={styles["reviewed-by"]}>{review.country}</p>
      </div>
      <div className={styles["image-container"]}>
        <img className={styles["image"]} src={review.profile} />
      </div>
    </div>
  );
};

export default SingleReview;
