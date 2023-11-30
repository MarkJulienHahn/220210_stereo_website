import React from "react";
import Journal from "../components/Journal";

import client from "../client";

const journal = ({ journal }) => {
  return (
    <div>
      <Journal journal={journal} />
    </div>
  );
};

export default journal;

export async function getServerSideProps() {
  const journal = await client.fetch(`
  *[_type == "journal"]{..., "introImage": introImage{..., "asset": asset->{...}}, "content": content[]{..., asset->{...}}}`);

  return {
    props: {
      journal,
    },
  };
}
