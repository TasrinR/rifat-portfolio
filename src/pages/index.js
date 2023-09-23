import Navbar from "@/components/common/navbar/Navbar";
import UpArrow from "@/components/common/up-arrow/UpArrow";
import Motto from "@/components/motto/Motto";
import VideoContainer from "@/components/video-container/VideoContainer";
import EyeCatchSection from "@/sections/EyeCatchSection";
import FooterSection from "@/sections/FooterSection";
import MyStorySection from "@/sections/MyStorySection";
import ProfileSection from "@/sections/ProfileSection";
import ReviewSection from "@/sections/ReviewSection";

const index = () => {
  
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
      <UpArrow />
    </>
  );
};

export default index;
