import SubHeading from "@/components/common/sub-heading/SubHeading";
import styles from "@/components/review/Review.module.css";
import SingleReview from "@/components/review/single-review/SingleReview";
import { useEffect, useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((data) => data.json())
      .then((res) => setReviews(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className={styles["review-section"]}>
      <SubHeading heading={"What They Said"} />
      {reviews.map((review, index) => (
        <SingleReview review={review} key={index} />
      ))}
    </section>
  );
};

export default ReviewSection;
