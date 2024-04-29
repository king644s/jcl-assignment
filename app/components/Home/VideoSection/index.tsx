"use client";
import React, { useState } from "react";
import styles from "./VideoSection.module.scss";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import { Waypoint } from "react-waypoint";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Props = {};

const VideoSection = (props: Props) => {
  const [playing, setPlaying] = useState(false);

  console.log(playing, "ckjasbvfc");
  return (
    <section className={styles.videoSection}>
      <Waypoint
        onEnter={() => setPlaying(true)}
        onLeave={() => setPlaying(false)}
      >
        <div>
          <ReactPlayer
          loop
            width="100%"
            height="auto"
            controls
            playing={playing}
            muted
            url={
              "https://www.jiocreativelabs.com/assets/video/JCLShowreel%202022_HD.mp4"
            }
          />
        </div>
      </Waypoint>
    </section>
  );
};

export default VideoSection;
