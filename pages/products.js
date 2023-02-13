import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import image01 from "../public/images/image_07.jpg";
import image02 from "../public/images/image_08.jpg";

import Footer from "../components/Footer";
import Button from "../components/Button";

const Products = ({ products, cart, live }) => {
  const location = useRouter();

  const physical = products.filter((x) =>
    x.categories.find((y) => y.name === "Physical")
  );

  return (
    <main className="AppInner">
      <Head>
        <title>Merchandise | Stereo Typefaces®</title>
      </Head>

      <div className="buttonsLeftWrapper" scroll={false}>
        <Link href="/" scroll={false}>
          <a>
            <Button lable={"Home"} subclass={"tertiary"} />
          </a>
        </Link>

        <Button lable={"Merchandise"} subclass={"quaternaryMuted"} />
      </div>

      <div className="buttonsRightWrapper">
        <Button lable={"Cart (0)"} />
      </div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          initial={{ y: 300, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="shopWrapper">
            {physical.map((product) => (
              <div key={product.id} className="shopItem">
                <p className="shopDescription">
                  {product.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
                <div className="shopMainImageWrapper">
                  <Link href="/" scroll={false}>
                    <div>
                      <p className="shopSubline">{product.name}</p>
                      {product.assets.map((image) => (
                        <>
                          <Image
                            alt="Stereo Magazine / Type as Image"
                            src={image.url}
                            layout="intrinsic"
                            width={image.image_dimensions.width}
                            height={image.image_dimensions.height}
                          />
                        </>
                      ))}
                    </div>
                  </Link>
                </div>
                <p className="shopSubline">
                  Stereo Magazine Volume 1 | Type as Image
                </p>
              </div>
            ))}

            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Products;
