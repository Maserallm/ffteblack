import React, { Fragment } from "react";
import homeStyles from "./home.module.css";

const desktopVideo =
  "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";
const tabletVideo =
  "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";
const mobileVideo =
  "https://res.cloudinary.com/hcqtx6vth/video/upload/v1607219729/ffte_website_video_02_tdetv0.mp4";

const BGvideo = () => {
  const getVideoSrc = width => {
    if (width >= 1080) return desktopVideo;
    if (width >= 720) return tabletVideo;
    if (width <= 480) return mobileVideo;
    return mobileVideo;
  };

  const src = getVideoSrc(window.innerWidth);

  return (
    <Fragment>
      <video
        className={homeStyles.vid_2}
        autoPlay={true}
        loop={true}
        playsInline
        muted
        style={{
          width: "79vw",
          height: "88vh",
          overflow: "hidden",
          marginLeft: "14%"
        }}
      >
        <source type="video/mp4" src={src} />
      </video>
    </Fragment>
  );
};

export default BGvideo;
