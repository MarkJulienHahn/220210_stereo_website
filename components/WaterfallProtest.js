import React, { useState } from "react";
import styles from "../styles/Waterfall.module.css";
import { Slider } from "@material-ui/core";

const WaterfallProtest = () => {
  const [wdth, setWdth] = useState(Math.random()*150);

  const changeWdth = (e, val) => {
    setWdth(val);
  };

  console.log(wdth);

  const fontWeightStyle = {
    fontVariationSettings: `'wght' ${wdth}, 'wdth' 50`,
  };

  const marks = [
    {
      value: 40,
      label: "Thin",
    },
    {
      value: 60,
      label: "Light",
    },
    {
      value: 80,
      label: "Regular",
    },
    {
      value: 100,
      label: "Book",
    },
    {
      value: 116.6,
      label: "Medium",
    },
    {
      value: 133.3,
      label: "Semibold",
    },
    {
      value: 150,
      label: "Bold",
    },
  ];

  return (
    <div style={fontWeightStyle} className={`${styles.waterfallWrapper}`}>
      <div className={styles.controls}>
        <Slider
          className={styles.slider}
          min={40}
          max={150}
          step={0.1}
          defaultValue={wdth}
          onChange={changeWdth}
          marks={marks}
        />
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.xxl}`}>
          Phone
          <br />
          Ka–74
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallElement} ${styles.xl}`}>
          NoWay
          <br />
          Okolon baSillg
        </div>
        <div className={`${styles.waterfallElement} ${styles.l}`}>
          Just a sped up Sample, of the Chronic 2000 <br />
          &#8594; IntroSpec
          <br /> Level set to <br />
          [32—oh] mono
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.xxl}`}>
          Didn’t
          <br />
          Tape-1 m_ms
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.m}`}>
          Criticism is an evaluative or corrective exercise that can be applied
          to any area of human life. Criticism can therefore take many different
          forms (see below). How people go about criticizing can vary a great
          deal. In specific areas of human endeavour, the form of criticism can
          be highly specialized and technical; it often requires professional
          knowledge to appreciate the criticism. For subject-specific
          information, see the Varieties of criticism page. How people go about
          criticizing can vary a great deal. In specific areas of human
          endeavour, the form of criticism can be highly specialized and
          technical; it often requires professional knowledge to appreciate the
          criticism.
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallElement} ${styles.s}`}>
          Criticism is an evaluative or corrective exercise that can be applied
          to any area of human life. Criticism can therefore take many different
          forms (see below). How people go about criticizing can vary a great
          deal. In specific areas of human endeavour, the form of criticism can
          be highly specialized and technical; it often requires professional
          knowledge to appreciate the criticism. For subject-specific
          information, see the Varieties of criticism page. How people go about
          criticizing can vary a great deal. In specific areas of human
          endeavour, the form of criticism can be highly specialized and
          technical; it often requires professional knowledge to appreciate the
          criticism. Criticism is an evaluative or corrective exercise that can
          be applied to any area of human life. Criticism can therefore take
          many different forms (see below). How people go about criticizing can
          vary a great deal. In specific areas of human endeavour, the form of
        </div>
        <div className={styles.waterfallElement}>
          <div className={`${styles.waterfallElement} ${styles.xs}`}>
            Criticism is an evaluative or corrective exercise that can be
            applied to any area of human life. Criticism can therefore take many
            different forms (see below). How people go about criticizing can
            vary a great deal. In specific areas of human endeavour, the form of
            criticism can be highly specialized and technical; it often requires
            professional knowledge to appreciate the criticism. For
            subject-specific information, see the Varieties of criticism page.
            How people go about criticizing can vary a great deal. In specific
            areas of human endeavour, the form of criticism can be highly
            specialized and technical; it often requires professional knowledge
            to appreciate the criticism. Criticism is an evaluative or
            corrective exercise that can be applied to any area of human life.
            Criticism can therefore take many different forms (see below). How
            people go about criticizing can vary a great deal. In specific areas
            of human endeavour, the form of
          </div>
          <div className={`${styles.waterfallElement} ${styles.xs}`}>
            Can therefore take many different forms (see below). How people go
            about criticizing can vary a great deal. In specific areas of human
            endeavour, the form of criticism can be highly specialized and
            technical; it often requires professional knowledge to appreciate
            the criticism. For subject-specific information, see the Varieties
            of criticism page. How people go about criticizing can vary a great
            deal. In specific areas of human endeavour, the form of criticism
            can be highly specialized and technical; it often requires
            professional knowledge to appreciate the criticism. Criticism is an
            evaluative or corrective exercise that can be applied to any area of
            human life. Criticism can therefore take many different forms (see
            below). How people go about criticizing can vary a great deal. In
            specific areas of human endeavour, the form of
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterfallProtest;
