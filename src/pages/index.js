import Navbar from "@/components/common/navbar/Navbar";
import Motto from "@/components/motto/Motto";
import VideoContainer from "@/components/video-container/VideoContainer";
import EyeCatchSection from "@/sections/EyeCatchSection";
import FooterSection from "@/sections/FooterSection";
import MyStorySection from "@/sections/MyStorySection";
import ProfileSection from "@/sections/ProfileSection";
import ReviewSection from "@/sections/ReviewSection";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = () => {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowArrow(window.scrollY > window.innerHeight);
    });
  }, []);
  return (
    <>
      <Navbar />
      <EyeCatchSection />
      <ProfileSection />
      <VideoContainer />
      <MyStorySection />
      <ReviewSection />
      <Motto />
      <FooterSection />
      {showArrow && (
        <Link href="/">
          <img src={"/images/up-arrow.svg"} className="up-arrow" />
        </Link>
      )}
    </>
  );
};

export default index;
