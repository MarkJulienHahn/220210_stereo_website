import React, { useState } from "react";
import styles from "../styles/WaterfallProtestMono.module.css";
import { Slider } from "@material-ui/core";

const WaterfallProtestMono = () => {
  const [wdth, setWdth] = useState(Math.floor(Math.random()*8)*30+40);

  const changeWdth = (e, val) => {
    setWdth(val);
  };

  const fontWeightStyle = {
    fontVariationSettings: `'wght' ${wdth}, 'wdth' 50`,
    fontFamily: "ProtestMono"
  };

  const marks = [
    {
      value: 40,
      label: "Thin",
    },
    {
      value: 70,
      label: "Light",
    },
    {
      value: 100,
      label: "Regular",
    },
    {
      value: 130,
      label: "Medium",
    },
    {
      value: 160,
      label: "Semibold",
    },
    {
      value: 190,
      label: "Bold",
    },
    {
      value: 220,
      label: "Heavy",
    },
    {
      value: 250,
      label: "Black",
    },
  ];

  return (
    <div style={fontWeightStyle} className={`${styles.waterfallWrapper}`}>
      <div className={styles.controls}>
        <Slider
          className={styles.slider}
          min={40}
          max={250}
          step={5}
          defaultValue={wdth}
          onChange={changeWdth}
          marks={marks}
        />
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.xxl}`}>
          Person
          <br />
          [Sale]
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallElement} ${styles.xl}`}>
          NoRd
          <br />
          Bert kallg
        </div>
        <div className={`${styles.waterfallElement} ${styles.l}`}>
          [Look up] for a special endeavour concerning bold and narrow Movements.
        </div>
      </div>
      <div className={styles.waterfallRow}>
        <div className={`${styles.waterfallSingle} ${styles.xxl}`}>
          Off–P
          <br />
          Export
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

export default WaterfallProtestMono;
