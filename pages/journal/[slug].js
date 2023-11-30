import React from "react";
import JournalEntry from "../../components/JournalEntry";

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

const single = ({ journal }) => {
  return <JournalEntry entry={journal[0]} />;
};

export default single;
