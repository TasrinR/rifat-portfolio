import styles from "@/components/video-container/VideoContainer.module.css";

const VideoContainer = () => {
  return (
    <div className={styles["container"]} id="works">
      <video
        className={styles["video"]}
        controls
        muted={true}
        autoPlay={true}
        src={"/video/portfolio-video.mp4"}
      />
    </div>
  );
};

export default VideoContainer;
