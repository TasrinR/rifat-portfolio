import Link from "next/link";
import React, { useEffect, useState } from "react";

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
          <img src={"/images/up-arrow.svg"} className="up-arrow" />
        </Link>
      )}
    </>
  );
};

export default UpArrow;
