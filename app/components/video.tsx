"use client";

import React from "react";
import styles from "../styles/video.module.css";

const Video: React.FC = () => {
  return (
    <div className={styles.video}>
      <div className={styles.main}>
        <div className={styles.contant}>
          <div>
            <iframe
              width="430"
              height="250"
              className={styles.videoURL}
              src="https://www.youtube.com/embed/8guP6F56TPk?controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&autoplay=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.right}>
            <div>
              <h1 className={styles.headding}>Watch this Before</h1>
              <h1 className={styles.headding}>You Decide to Go Further</h1>
            </div>
            <p className={styles.phara}>
              Unlock 20+ essential tools and acquire fundamental knowledge to
              generate a six figure revenue from scratch as a student freelancer
              in a solid three hours live WEBINAR, with Agni Sarvaloka. Unlock
              20+ essential tools and acquire fundamental knowledge to generate
              a six figure revenue from scratch as a student freelancer in a
              solid three hours live WEBINAR, with Agni Sarvaloka. Unlock 20+
              essential tools and acquire fundamental knowledge to generate a
              six figure revenue from scratch as a student freelancer in a solid
              three hours live WEBINAR, with Agni Sarvaloka.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
