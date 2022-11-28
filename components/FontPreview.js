import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function FontPreview({ fonts }) {
  const { ref: ref1, inView: isVisible } = useInView();

  return (
    <div className={"fontPreviewWrapper"} ref={ref1}>
      <h2>
        → Check out more Typefaces
        <br />
      </h2>
      <div className={"fontPreviewContainer"}>
        {fonts.map((font, i) => (
          <div key={i} className={"fontPreviewOuter"}>
            <p>
              <span className={"highlight01"}>{font.name}</span>
            </p>
            <p>
              {font.styles} Styles 
              {font.italics ? "+ Italic" : ""}
              {font.oblique ? "+ Oblique" : ""}
            </p>
            <Link href={`${font.slug}`} scroll={false}>
              <div
                className={"fontPreviewInner"}
                style={{
                  fontFamily: font.font,
                  animation: isVisible
                    ? `${font.animation} 2s ease infinite ${
                        font.reversed == true
                          ? "alternate-reverse"
                          : "alternate"
                      }`
                    : "",
                }}
              >
                Gg
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
