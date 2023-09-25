import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/components/common/up-arrow/UpArrow.module.css";

const UpArrow = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowArrow(window.scrollY > window.innerHeight);
    });
  }, []);
  return (
    <>
      {showArrow && (
        <Link href="/">
          <div className={styles["up-arrow"]}>
            <img src={"/images/up-arrow.svg"} className={styles["arrow-image"]} />
          </div>
        </Link>
      )}
    </>
  );
};

export default UpArrow;
