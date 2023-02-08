import React, { useState } from "react";
import { Slider } from "@material-ui/core";

import styles from "../styles/Glyphchart.module.css";
import Glyphchartletter from "./Glyphchartletter";
import { red } from "@material-ui/core/colors";

function Glyphchart(props) {
  const [glyph, setGlyph] = useState("A");
  const [wght, updateWght] = useState(100);
  const [ital, updateItal] = useState(0);
  const [styleset, updateStyleset] = useState("normal");

  const glyphStyle = {
    fontFamily: props.fontFamily,
    fontVariationSettings: `'wght' 100, 'wdth' ${props.fontWidth}, 'ital' 0`,
  };

  const glyphDisplay = {
    fontFeatureSettings: `${styleset}`,
    fontVariationSettings: `'wght' ${wght}, 'wdth' ${props.fontWidth}, 'ital' ${ital}`,
    background: props.darkMode && props.dark.background,
    color: props.darkMode && props.dark.color,
  };

  function changeWght(e, wght) {
    updateWght((prevValue) => wght);
  }

  function changeItal(e, ital) {
    updateItal((prevValue) => ital);
  }

  function changeStyleset(styleset) {
    updateStyleset((prevValue) => styleset);
  }

  const glyphs = [
    {
      lable: "Uppercase",
      glyphs: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      styleset: "",
    },
    {
      lable: "Lowercase",
      glyphs: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      styleset: "",
    },
    {
      lable: "Latin Extended Uppercase",
      glyphs: [
        "Á",
        "Ă",
        "Ă",
        "Â",
        "Ä",
        "À",
        "Ā",
        "Ą",
        "Å",
        "Ǎ",
        "Ã",
        "Ạ",
        "Ậ",
        "Æ",
        "Ǣ",
        "Ǽ",
        "Ḅ",
        "Ƀ",
        "Ć",
        "Č",
        "Ç",
        "Ċ",
        "Ð",
        "Ď",
        "Đ",
        "Ḏ",
        "Ḓ",
        "É",
        "Ě",
        "Ê",
        "Ë",
        "Ė",
        "È",
        "Ē",
        "Ę",
        "Ẽ",
        "Ğ",
        "Ģ",
        "Ġ",
        "Ĝ",
        "Ḡ",
        "Ǥ",
        "Ħ",
        "Ĥ",
        "Ḥ",
        "Ḫ",
        "Í",
        "Î",
        "Ï",
        "İ",
        "Ì",
        "Ī",
        "Į",
        "Ĩ",
        "Ị",
        "Ĳ",
        "Ǩ",
        "Ķ",
        "Ḵ",
        "Ĺ",
        "Ľ",
        "Ļ",
        "Ł",
        "Ŀ",
        "Ḷ",
        "Ḹ",
        "Ḻ",
        "Ḽ",
        "Ń",
        "Ň",
        "Ņ",
        "Ŋ",
        "Ñ",
        "Ɲ",
        "Ṅ",
        "Ṇ",
        "Ṉ",
        "Ṋ",
        "Ó",
        "Ô",
        "Ö",
        "Ò",
        "Ő",
        "Ō",
        "Ø",
        "Õ",
        "Ǒ",
        "Ǫ",
        "Ǿ",
        "Ọ",
        "Ộ",
        "ʘ",
        "Θ",
        "Œ",
        "Ṗ",
        "Þ",
        "Ŕ",
        "Ř",
        "Ŗ",
        "Ɍ",
        "Ṟ",
        "Ṝ",
        "Ś",
        "Š",
        "Ş",
        "Ș",
        "Ŝ",
        "Ṣ",
        "ẞ",
        "Ŧ",
        "Ť",
        "Ţ",
        "Ț",
        "Ṭ",
        "Ṯ",
        "Ṱ",
        "Ú",
        "Û",
        "Ü",
        "Ù",
        "Ű",
        "Ū",
        "Ų",
        "Ů",
        "Ũ",
        "Ŭ",
        "Ụ",
        "Ʉ",
        "Ʌ",
        "Ẃ",
        "Ŵ",
        "Ẅ",
        "Ẁ",
        "Ý",
        "Ŷ",
        "Ÿ",
        "Ỳ",
        "Ỹ",
        "Ẏ",
        "Ỵ",
        "Ź",
        "Ž",
        "Ż",
        "Ẓ",
        "Ẕ",
      ],
      styleset: "",
    },
    {
      lable: "Latin Extended Lowercase",
      glyphs: [
        "ă",
        "á",
        "â",
        "ä",
        "à",
        "ā",
        "ǎ",
        "å",
        "ã",
        "ą",
        "ạ",
        "ậ",
        "æ",
        "ǣ",
        "ǽ",
        "ɐ",
        "ᴂ",
        "ḃ",
        "ḅ",
        "ć",
        "č",
        "ç",
        "ċ",
        "ð",
        "ḋ",
        "ḍ",
        "ḏ",
        "ḓ",
        "ď",
        "đ",
        "é",
        "ě",
        "ê",
        "ë",
        "ė",
        "è",
        "ē",
        "ẽ",
        "ę",
        "ȩ",
        "ẹ",
        "ǝ",
        "ɘ",
        "ḟ",
        "ƒ",
        "ğ",
        "ĝ",
        "ģ",
        "ġ",
        "ḡ",
        "ǥ",
        "ǧ",
        "ĥ",
        "ḣ",
        "ḥ",
        "ẖ",
        "ḫ",
        "ħ",
        "ɥ",
        "ı",
        "í",
        "î",
        "ï",
        "ì",
        "ī",
        "ĩ",
        "ǐ",
        "ɨ",
        "į",
        "ĳ",
        "ȷ",
        "ĵ",
        "ǩ",
        "ḵ",
        "ķ",
        "ʞ",
        "ĺ",
        "ľ",
        "ļ",
        "ł",
        "ŀ",
        "ḷ",
        "ḹ",
        "ḻ",
        "ḽ",
        "ǉ",
        "ḿ",
        "ṁ",
        "ṃ",
        "ɯ",
        "ñ",
        "ń",
        "ň",
        "ṅ",
        "ņ",
        "ṇ",
        "ṉ",
        "ṋ",
        "ŋ",
        "ɲ",
        "ó",
        "ô",
        "ö",
        "ò",
        "ő",
        "ō",
        "ø",
        "õ",
        "ǒ",
        "ọ",
        "ộ",
        "ǫ",
        "ǿ",
        "ɵ",
        "œ",
        "ᴔ",
        "ṗ",
        "þ",
        "ŕ",
        "ř",
        "ṛ",
        "ṟ",
        "ŗ",
        "ṝ",
        "ɹ",
        "ś",
        "š",
        "ŝ",
        "ş",
        "ṣ",
        "ș",
        "ß",
        "ẗ",
        "ť",
        "ţ",
        "ț",
        "ṭ",
        "ṱ",
        "ț",
        "ŧ",
        "ú",
        "û",
        "ü",
        "ù",
        "ű",
        "ū",
        "ŭ",
        "ǔ",
        "ů",
        "ũ",
        "ų",
        "ụ",
        "ʉ",
        "ʌ",
        "ẃ",
        "ŵ",
        "ẅ",
        "ẁ",
        "ʍ",
        "ý",
        "ŷ",
        "ÿ",
        "ỳ",
        "ỹ",
        "ẏ",
        "ȳ",
        "ỵ",
        "ʎ",
        "ź",
        "ž",
        "ż",
        "ẓ",
        "ẕ",
      ],
      styleset: "",
    },
    {
      lable: "Stylistic Set 1",
      glyphs: [
        "ă",
        "á",
        "â",
        "ä",
        "à",
        "ā",
        "ǎ",
        "å",
        "ã",
        "ą",
        "ạ",
        "ậ",
        "æ",
        "ǣ",
        "ǽ",
        "ɐ",
        "ᴂ",
        "ª",
      ],
      styleset: "ss01",
    },
    {
      lable: "Stylistic Set 2",
      glyphs: ["ğ", "ĝ", "ģ", "ġ", "ḡ", "ǥ", "ǧ"],
      styleset: "ss02",
    },
    {
      lable: "Figures",
      glyphs: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "₀",
        "₁",
        "₂",
        "₃",
        "₄",
        "₅",
        "₆",
        "₇",
        "₈",
        "₉",
        "⁰",
        "¹",
        "²",
        "³",
        "⁴",
        "⁵",
        "⁶",
        "⁷",
        "⁸",
        "⁹",
        "Ⅰ",
        "Ⅱ",
        "Ⅲ",
        "Ⅳ",
        "Ⅴ",
        "Ⅵ",
        "Ⅶ",
        "Ⅷ",
        "Ⅸ",
        "Ⅹ",
        "Ⅺ",
        "Ⅻ",
        "Ⅼ",
        "Ⅽ",
        "Ⅾ",
        "Ⅿ",
        "❶",
        "❷",
        "❸",
        "❹",
        "❺",
        "❻",
        "❼",
        "❽",
        "❾",
        "①",
        "②",
        "③",
        "④",
        "⑤",
        "⑥",
        "⑦",
        "⑧",
        "⑨",
      ],
      styleset: "ss02",
    },
    {
      lable: "Punctuation",
      glyphs: [
        ".",
        ",",
        ":",
        ";",
        "…",
        "!",
        "¡",
        "?",
        "¿",
        "·",
        "•",
        "*",
        "#",
        "/",
        <>&#92;</>,
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "-",
        "–",
        "—",
        "_",
        "‚",
        "‘",
        "’",
        "„",
        "“",
        "”",
        "«",
        "»",
        "‹",
        "›",
        `"`,
      ],
    },
    {
      lable: "Diacritical Mark",
      glyphs: [
        "¨",
        "˙",
        "`",
        "´",
        "˝",
        "ˆ",
        "ˇ",
        "˘",
        "˚",
        "˜",
        ",",
        "¯",
        "¸",
        "˛",
      ],
    },
    {
      lable: "Greek",
      glyphs: ["∆", "Θ", "Ξ", "Ω", "π", "µ"],
    },
    {
      lable: "Currency Symbols",
      glyphs: [
        "₡",
        "₤",
        "₥",
        "₦",
        "₨",
        "₩",
        "₪",
        "₫",
        "€",
        "₭",
        "₮",
        "₱",
        "₲",
        "₴",
        "₵",
        "₸",
        "₹",
        "₺",
        "₼",
        "₽",
        "₾",
        "₿",
      ],
    },
    {
      lable: "Mathematical Symbols",
      glyphs: [
        "+",
        "∙",
        "∕",
        "≡",
        "∇",
        "−",
        "×",
        "÷",
        "=",
        "≠",
        ">",
        "<",
        "≥",
        "≤",
        "±",
        "≈",
        "~",
        "¬",
        "^",
        "∞",
        "∫",
        "∆",
        "∏",
        "∑",
        "√",
        "∂",
        "µ",
        "%",
        "‰",
        "‱",
      ],
    },
    {
      lable: "Arrows",
      glyphs: [
        "↑",
        "↗",
        "→",
        "↘",
        "↓",
        "↙",
        "←",
        "↖",
        "↔",
        "↕",
        "↩",
        "↪",
        "↰",
        "↱",
        "↲",
        "↳",
        "↺",
        "↻",
        "⇆",
      ],
    },
    {
      lable: "Geometric Shapes",
      glyphs: [
        "●",
        "○",
        "◌",
        "◊",
        "■",
        "□",
        "⬚",
        "▲",
        "▼",
        "△",
        "▷",
        "▽",
        "◁",
        "►",
        "◄",
        "◥",
        "◢",
        "◣",
        "◤",
      ],
    },
    {
      lable: "Extended Symbols",
      glyphs: [
        "☮",
        "♲",
        "♳",
        "♴",
        "♵",
        "♶",
        "♷",
        "♸",
        "♹",
        "♺",
        "♻",
        "♾",
        "⚀",
        "⚁",
        "⚂",
        "⚃",
        "⚄",
        "⚅",
        "⚠",
        "⚰",
        "⚱",
        "⛔",
        "✓",
        "✕",
        "@",
        "&",
        "¶",
        "§",
        "©",
        "®",
        "℗",
        "℅",
        "°",
        "⌀",
        "|",
        "¦",
        "†",
        "ℓ",
        "‡",
        "℮",
        "№",
        "℆",
        "℻",
        "⌫",
        "⌦",
        "⏏",
        "⏎",
        "℠",
        "℡",
        "🙁",
        "🙂",
      ],
    },
  ];

  return (
    <div>
      <div className="glyphchartWrapper" style={glyphStyle}>
        <div className="glyphchartDisplayWrapper">
          <div className="glyphchartSlider">
            <div>
              <p>&#8594; Weight</p>
              <Slider
                className="glyphchartSlider"
                min={40}
                max={250}
                step={0.1}
                defaultValue={100}
                onChange={changeWght}
              />
            </div>
            <div>
              <p>&#8594; Italic</p>
              <Slider
                className="glyphchartSlider"
                min={0}
                max={100}
                step={0.1}
                defaultValue={0}
                onChange={changeItal}
              />
            </div>
          </div>
          <div className="glyphchartDisplay" style={glyphDisplay}>
            <div>{glyph}</div>
          </div>
        </div>
        <div className="glyphchartTable">
          <div className="glyphchartDisplayMobile" style={glyphDisplay}>
            {glyph}

            <div className="glyphchartSliderMobile" style={glyphDisplay}>
              <div className="glyphchartSliderSingle">
                <p>&#8594; Weight</p>
                <Slider
                  min={40}
                  max={250}
                  step={0.1}
                  defaultValue={100}
                  onChange={changeWght}
                />
              </div>
              <div className="glyphchartSliderSingle">
                <p>&#8594; Italic</p>
                <Slider
                  min={0}
                  max={100}
                  step={0.1}
                  defaultValue={0}
                  onChange={changeItal}
                />
              </div>
            </div>
          </div>

          {glyphs.map((category, i) => (
            <>
              <p className="glyphchartHeading">&#8594; {category.lable}</p>
              <div className="glyphchartLetterWrapper">
                {category.glyphs.map((glyph, i) => (
                  <Glyphchartletter
                    lable={glyph}
                    changeGlyph={(glyph) => setGlyph(glyph)}
                    wght={150}
                    ss={category.styleset}
                  />
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Glyphchart;
