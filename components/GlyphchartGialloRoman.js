import React, { useState } from "react";
import { Slider } from "@material-ui/core";

import Glyphchartletter from "./Glyphchartletter";

function Glyphchart(props) {
  const [glyph, setGlyph] = useState("A");
  const [wght, updateWght] = useState(400);
  const [ital, updateItal] = useState(0);
  const [styleset, updateStyleset] = useState("normal");
  const [smallCaps, updateSmallCaps] = useState(false);

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

  const glyphDisplayLetter = {
    fontVariant: smallCaps && "small-caps",
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
      lable: "Latin Supplement",
      glyphs: [
        "À",
        "Á",
        "Â",
        "Ã",
        "Ä",
        "Å",
        "Æ",
        "Ç",
        "È",
        "É",
        "Ê",
        "Ë",
        "Ì",
        "Í",
        "Î",
        "Ï",
        "Ð",
        "Ñ",
        "Ò",
        "Ó",
        "Ô",
        "Õ",
        "Ö",
        "Ø",
        "Ù",
        "Ú",
        "Û",
        "Ü",
        "Ý",
        "Þ",
        "à",
        "á",
        "â",
        "ã",
        "ä",
        "å",
        "æ",
        "ç",
        "è",
        "é",
        "ê",
        "ë",
        "ì",
        "í",
        "î",
        "ï",
        "ð",
        "ñ",
        "ò",
        "ó",
        "ô",
        "õ",
        "ö",
        "ø",
        "ß",
        "ù",
        "ú",
        "û",
        "ü",
        "ý",
        "þ",

        "ÿ",
      ],
    },
    {
      lable: "Latin Extended-A",
      glyphs: [
        "Ā",
        "Ă",
        "Ą",
        "Ć",
        "Ĉ",
        "Ċ",
        "Č",
        "Ď",
        "Đ",
        "Ē",
        // "Ĕ",
        "Ė",
        "Ę",
        "Ě",
        "Ĝ",
        "Ğ",
        "Ġ",
        "Ģ",
        "Ĥ",
        "Ħ",
        "Ĩ",
        "Ī",
        "Į",
        "İ",
        "Ĳ",
        "Ĵ",
        "Ķ",
        "Ĺ",
        "Ļ",
        "Ľ",
        "Ŀ",
        "Ł",
        "Ń",
        "Ņ",
        "Ň",
        "Ŋ",
        "Ō",
        // "Ŏ",
        "Ő",
        "Œ",
        "Ŕ",
        "Ř",
        "Ś",
        "Ŝ",
        "Ş",
        "Š",
        "Ţ",
        "Ť",
        "Ŧ",
        "Ũ",
        "Ū",
        "Ŭ",
        "Ů",
        "Ű",
        "Ų",
        "Ŵ",
        "Ŷ",
        "Ÿ",
        "Ź",
        "Ż",
        "Ž",
        "ā",
        "ă",
        "ą",
        "ć",
        "ĉ",
        "ċ",
        "č",
        "ď",
        "đ",
        "ē",
        // "ĕ",
        "ė",
        "ę",
        "ě",
        "ĝ",
        "ğ",
        "ġ",
        "ģ",
        "ĥ",
        "ħ",
        "ĩ",
        "ī",
        // "ĭ",
        "į",
        "ı",
        "ĳ",
        "ĵ",
        "ķ",
        // "ĸ",
        "ĺ",
        "ļ",
        "ľ",
        "ŀ",
        "ł",
        "ń",
        "ņ",
        "ň",
        // "ŉ",
        "ŋ",
        "ō",
        // "ŏ",
        "ő",
        "œ",
        "ŕ",
        "ŗ",
        "ř",
        "ś",
        "ŝ",
        "ş",
        "š",
        "ţ",
        "ť",
        "ŧ",
        "ũ",
        "ū",
        "ŭ",
        "ů",
        "ű",
        "ų",
        "ŵ",
        "ŷ",
        "ź",
        "ż",
        "ž",
      ],
    },

    {
      lable: "Latin Extended-B",
      glyphs: [
        "Ă",

        "Ǎ",
        "Ạ",
        "Ậ",
        "Ǣ",
        "Ǽ",
        "Ḅ",

        "Ḏ",
        "Ḓ",

        "Ẽ",
        "Ə",

        "Ģ",

        "Ḡ",
        "Ǥ",

        "Ḥ",
        "Ḫ",

        "Ị",

        "Ǩ",
        "Ķ",
        "Ḵ",

        "Ļ",

        "Ŀ",
        "Ḷ",
        "Ḹ",
        "Ḻ",
        "Ḽ",

        "Ň",
        "Ņ",

        "Ɲ",
        "Ṅ",
        "Ṇ",
        "Ṉ",
        "Ṋ",

        "Ǫ",
        "Ǿ",
        "Ọ",
        "Ộ",
        "ʘ",
        "Θ",

        "Ṗ",

        "Ŗ",
        "Ɍ",
        "Ṟ",
        "Ṝ",

        "Ș",

        "Ṣ",
        "ẞ",

        "Ț",
        "Ṭ",
        "Ṯ",
        "Ṱ",

        "Ụ",
        "Ʉ",
        "Ʌ",
        "Ẃ",

        "Ẅ",
        "Ẁ",

        "Ỳ",
        "Ỹ",
        "Ẏ",
        "Ỵ",

        "Ẓ",
        "Ẕ",
        "ạ",
        "ậ",

        "ǎ",
        "ǣ",
        "ǽ",
        "ɐ",
        "ᴂ",
        "ḃ",
        "ḅ",

        "ċ",

        "ḋ",
        "ḍ",
        "ḏ",
        "ḓ",

        "ẽ",
        "ę",
        "ȩ",
        "ẹ",
        "ǝ",
        "ɘ",
        "ə",
        "ḟ",
        "ƒ",

        "ģ",

        "ḡ",
        "ǥ",
        "ǧ",

        "ḣ",
        "ḥ",
        "ẖ",
        "ḫ",

        "ɥ",

        "ǐ",
        "ɨ",

        "ȷ",

        "ǩ",
        "ḵ",
        "ķ",
        "ʞ",
        "ĺ",
        "ľ",
        "ļ",

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

        "ň",
        "ṅ",
        "ņ",
        "ṇ",
        "ṉ",
        "ṋ",

        "ɲ",

        "ǒ",
        "ọ",
        "ộ",
        "ǫ",
        "ǿ",
        "ɵ",

        "ᴔ",
        "ṗ",

        "ṛ",
        "ṟ",
        "ŗ",
        "ṝ",
        "ɹ",

        "ṣ",
        "ș",

        "ẗ",

        "ț",
        "ṭ",
        "ṱ",
        "ț",

        "ǔ",

        "ụ",
        "ʉ",
        "ʌ",
        "ẃ",

        "ẅ",
        "ẁ",
        "ʍ",

        "ỳ",
        "ỹ",
        "ẏ",
        "ȳ",
        "ỵ",
        "ʎ",

        "ẓ",
        "ẕ",
      ],
      styleset: "",
    },
    //   { lable: "Ordinals",
    // glyphs: ""},
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
        // "ª",
      ],
      styleset: "ss01",
    },
    {
      lable: "Stylistic Set 2",
      glyphs: ["ğ", "ĝ", "ģ", "ġ", "ḡ", "ǥ", "ǧ"],
      styleset: "ss02",
    },
    {
      lable: "Stylistic Set 3",
      glyphs: ["7", "₇", "⁷", "⅞"],
      styleset: "ss03",
    },
    {
      lable: "Stylistic Set 4",
      glyphs: ["®"],
      styleset: "ss04",
    },
    { lable: "Standard Ligatures", glyphs: ["ff", "fi", "fl", "ffi", "ffl"] },
    {
      lable: "Discretionary Ligatures",
      glyphs: [
        "fb",
        "fh",
        "fj",
        "fk",
        "ft",
        "fä",
        "fö",
        "fü",
        "tt",
        "ffb",
        "fff",
        "ffh",
        "ffk",
        "fft",
        "Th",
        "Tk",
        "Tl",
        "AA",
        "TT",
      ],
    },
    {
      lable: "Small Caps",
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
      smallCaps: true,
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
        // [{ textFigures: true, figure: "0" }],
        "1",
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
        // "Ⅺ",
        // "Ⅻ",
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
        "⁄",
        "⅟",
        "½",
        // "⅓",
        "¼",
        "¾",
        // "⅕",
        "⅛",
        "⅜",
        "⅝",
        "⅞",
      ],
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
        "¯",
        ",",
        "¯",
        "¸",
        "˛",
      ],
    },
    {
      lable: "Greek",
      glyphs: ["∆", "Θ", "Ξ", "Ω", "π", "µ"],
    },
    {
      lable: "Currency Symbols",
      glyphs: [
        "£",
        "€",
        "$",
        "¢",
        "¥",
        "₿",
        "¤",
        "ƒ",
        // "₡",
        // "₤",
        // "$",
        // "¢",
        // "₥",
        // "₦",
        // "₨",
        // "₩",
        // "₪",
        // "₫",
        // "€",
        // "₭",
        // "₮",
        // "₱",
        // "₲",
        // "₴",
        // "₵",
        // "₸",
        // "₹",
        // "₺",
        // "₼",
        // "₽",
        // "₾",
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
        "♳",
        "♴",
        "♵",
        "♶",
        "♷",
        "♸",
        "♹",
        "♺",
        "♻",
        // "♾",
        "⚀",
        "⚁",
        "⚂",
        "⚃",
        "⚄",
        "⚅",
        // "⚠",
        "⚰",
        "⚱",
        // "⛔",
        "✓",
        "✕",
        "@",
        "&",
        "¶",
        "§",
        "©",
        "®",
        "℗",
        // "℅",
        "°",
        "⌀",
        "|",
        "¦",
        "†",
        "ℓ",
        "‡",
        "℮",
        // "№",
        // "℆",
        // "℻",
        // "⌫",
        // "⌦",
        // "⏏",
        // "⏎",
        // "℠",
        // "℡",
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
              <p>&#8594; Weight </p>
              <Slider
                className="glyphchartSlider"
                min={100}
                max={800}
                step={1}
                defaultValue={400}
                onChange={changeWght}
              />
            </div>
            <div>
              <p>&#8594; Oblique</p>
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
            <div style={glyphDisplayLetter}>{glyph}</div>
          </div>
        </div>
        <div className="glyphchartTable">
          <div className="glyphchartDisplayMobile" style={glyphDisplay}>
            <span style={glyphDisplayLetter}>{glyph}</span>

            <div className="glyphchartSliderMobile" style={glyphDisplay}>
              <div className="glyphchartSliderSingle">
                <p>&#8594; Weight</p>
                <Slider
                  min={100}
                  max={800}
                  step={1}
                  defaultValue={400}
                  onChange={changeWght}
                />
              </div>
              <div className="glyphchartSliderSingle">
                <p>&#8594; Oblique</p>
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
            <div key={i}>
              <p className="glyphchartHeading">&#8594; {category.lable}</p>
              <div
                className="glyphchartLetterWrapper"
                onMouseEnter={() => {
                  changeStyleset(
                    category.styleset ? `"${category.styleset}"` : "normal"
                  ),
                    updateSmallCaps(category.smallCaps ? true : false);
                }}
              >
                {category.glyphs.map((letter, i) => (
                  <Glyphchartletter
                    key={i}
                    lable={letter}
                    changeGlyph={(glyph) => setGlyph(glyph)}
                    wght={400}
                    ss={category.styleset}
                    smallCaps={category.smallCaps}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Glyphchart;
