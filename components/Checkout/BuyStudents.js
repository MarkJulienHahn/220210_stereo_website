import ProductChoice from "./ProductChoice";
import styles from "../../styles/Buy.module.css";

const varObject = [
  [
    {
      bundle: true,

      styles: [
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Thin",
          wght: 40,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Thin Italic",
          wght: 40,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Light",
          wght: 70,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Light Italic",
          wght: 70,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Regular",
          wght: 100,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Regular Italic",
          wght: 100,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Book",
          wght: 130,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Book Italic",
          wght: 130,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Medium",
          wght: 160,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Medium Italic",
          wght: 160,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Bold",
          wght: 190,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Bold Italic",
          wght: 190,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Heavy",
          wght: 220,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Heavy Italic",
          wght: 220,
          ital: 100,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Black",
          wght: 250,
          ital: 0,
        },
        {
          fontFamily: "Protest",
          lable: "Protest Grotesk Black Italic",
          wght: 250,
          ital: 100,
        },
      ],
    },
  ],
  [
    {
      bundle: true,

      styles: [
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Light",
          wght: 100,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Light Italic",
          wght: 100,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Regular",
          wght: 200,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Regular Italic",
          wght: 200,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Book",
          wght: 300,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Book Italic",
          wght: 300,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Medium",
          wght: 400,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Medium Italic",
          wght: 400,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Bold",
          wght: 500,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Bold Italic",
          wght: 500,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Heavy",
          wght: 600,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Heavy Italic",
          wght: 600,
          ital: 100,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Black",
          wght: 700,
          ital: 0,
        },
        {
          fontFamily: "Giallo",
          lable: "Giallo Roman Black Italic",
          wght: 700,
          ital: 100,
        },
      ],
    },
  ],
  [
    {
      bundle: true,

      styles: [
        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Thin",
          wght: 40,
          ital: 0,
        },
        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Light",
          wght: 70,
          ital: 0,
        },

        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Regular",
          wght: 100,
          ital: 0,
        },

        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Book",
          wght: 130,
          ital: 0,
        },

        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Medium",
          wght: 160,
          ital: 0,
        },

        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Bold",
          wght: 190,
          ital: 0,
        },

        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Heavy",
          wght: 220,
          ital: 0,
        },

        {
          fontFamily: "ProtestMono",
          lable: "Protest Grotesk Mono Black",
          wght: 250,
          ital: 0,
        },
      ],
    },
  ],
];

const BuyProtest = ({
  licenseChoice,
  LicenseUser,
  products,
  onAddToVirtualCart,
  onRemoveFromVirtualCart,
  cart,
  virtualCart,
  setFontPreview,
}) => {
  const studentPacks = products.filter((x) =>
    x.categories.find((y) => y.name === "Student Packs")
  );

  const items = virtualCart;

  return (
    <div>
      <p className={styles.buyConfigurationHead}>Student Packs</p>

      <div className={styles.buySectionWrapper}>
        {studentPacks.map((product, i) => (
          <div key={i}>
            <div key={i} className={styles.choiceWrapper}>
              <div
                className={styles.varValues}
                onClick={() => {
                  setFontPreview(varObject[i]);
                }}
              >
                SHOW
              </div>
              <div
                item
                onClick={
                  licenseChoice &&
                  LicenseUser &&
                  !virtualCart?.some((item) => item.product_id === product.id)
                    ? () => {
                        onAddToVirtualCart(
                          product.id,
                          1,
                          product.name,
                          product.price.raw,
                          720
                        );
                      }
                    : () => onRemoveFromVirtualCart(product.id)
                }
              >
                <ProductChoice
                  product={product}
                  name={product.name}
                  price={"EUR 50.00"}
                  discountPrice={"EUR 720.00"}
                  items={items}
                  cart={cart}
                  virtualCart={virtualCart}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyProtest;
