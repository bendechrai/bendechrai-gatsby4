import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import BlockContent from "@sanity/block-content-to-react";
import BlockSerialiser from "../utils/block-serialiser";

export const query = graphql`
  query ($slug: String!) {
    talk: sanityTalk(slug: { current: { eq: $slug } }) {
      title
      image {
        alt
        asset {
          _id
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
      }
      publishDate {
        local
      }
    }
  }
`;

const Talk = ({ data }) => {
  return (
    <Layout title={data.talk.title}>
      <BlockContent blocks={data.talk._rawContent} serializers={BlockSerialiser} />
    </Layout>
  );
};

export default Talk;
