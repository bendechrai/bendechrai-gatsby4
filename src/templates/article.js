import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

import BlockContent from "@sanity/block-content-to-react";
import BlockSerialiser from "../utils/block-serialiser";
import useImageUrlBuilder from "../hooks/use-image-url-builder";

export const query = graphql`
  query ($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
      title
      publishDate {
        local
      }
      tags {
        id
        name
        slug {
          current
        }
      }
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
      _rawContent
    }
  }
`;

const Article = ({ data }) => {
  const builder = useImageUrlBuilder();

  return (
    <Layout title={data.article.title}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="article">
        <div className="hero">
          {(data.article.image && (
            <img src={builder.image(data.article.image).width(400).height(225).url()} alt={data.article.image.alt} title={data.article.image.alt} />
          )) || (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src="../images/flamingo.jpg"
              alt="There was no image for this content, so here's a photo of a flamingo instead."
              title="There was no image for this content, so here's a photo of a flamingo instead."
            />
          )}
        </div>
        <h1>{data.article.title}</h1>
        <div className="tags">
          <ul>
            {data.article.tags.map((tag) => (
              <li key={tag.id}>
                <Link to={tag.slug.current}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <BlockContent blocks={data.article._rawContent} serializers={BlockSerialiser} />
        </div>
      </div>
    </Layout>
  );
};

export default Article;
