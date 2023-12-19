import JournalEntry from "../../components/JournalEntry";
import Footer from "../../components/Footer";
import Head from "next/head";

import client from "../../client";

export async function getStaticPaths() {
  const res = await client.fetch(`*[_type == "journal"]`);
  const data = await res;

  const paths = data.map((journal) => {
    return { params: { slug: journal.slug.current.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const journal = await client.fetch(`
  *[slug.current == "${slug}"]{..., "introImage": introImage{..., "asset": asset->{...}}, "content": content[]{..., asset->{...}}}`);

  const links = await client.fetch(`  *[_type == "journal"]  {
    titel, slug
      }`);

  return {
    props: {
      journal,
      links,
    },
    revalidate: 10,
  };
}

const single = ({
  journal,
  cart,
  products,
  checkoutToken,
  handleAddToCart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleUpdateCartPrice,
  onCaptureCheckout,
  setCart,
  handleCouponCode,
  loading,
  getLiveObject,
  live,
  getPaypalPaymentId,
  refreshCart,
  darkMode,
  setDarkMode,
  dark,
}) => {
  const stringifyBlockContent = (blockContent) => {
    let textContent = "";

    if (blockContent && Array.isArray(blockContent)) {
      blockContent.forEach((block) => {
        if (block._type === "block" && block.children) {
          block.children.forEach((child) => {
            if (child._type === "span" && child.text) {
              textContent += `${child.text} `;
            }
          });
        }
      });
    }
    return textContent.trim();
  };

  const convertedString = stringifyBlockContent(
    journal[0].content.slice(0, 160)
  );

  function truncateString(inputString, maxLength) {
    if (inputString.length > maxLength) {
      return inputString.slice(0, maxLength);
    }
    return inputString;
  }

  const maxLength = 160;

  const truncatedString = truncateString(convertedString, maxLength);

  return (
    <div style={darkMode ? dark : {}}>
      <Head>
        <title>{`${journal[0].title} | Stereo Typefaces®`}</title>
        <meta name="description" content={truncatedString} />
      </Head>
      <JournalEntry
        entry={journal[0]}
        cart={cart}
        dark={dark}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        products={products}
        live={live}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleUpdateCartPrice={handleUpdateCartPrice}
        onCaptureCheckout={onCaptureCheckout}
        handleCouponCode={handleCouponCode}
        getLiveObject={getLiveObject}
        setCart={setCart}
        loading={loading}
        checkoutToken={checkoutToken}
        getPaypalPaymentId={getPaypalPaymentId}
        refreshCart={refreshCart}
        font={""}
      />
      <div style={{ paddingLeft: "var(--margin-M)" }}>
        <Footer />
      </div>
    </div>
  );
};

export default single;
