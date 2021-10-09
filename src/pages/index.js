import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import useImageUrlBuilder from "../hooks/use-image-url-builder";

export const query = graphql`
  {
    allSanityArticle(limit: 6, sort: { fields: publishDate___local, order: DESC }) {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        synopsis
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
      }
    }
    allSanityEvent {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        talks {
          title
          slug {
            current
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
        }
      }
    }
    allSanityVideo {
      nodes {
        title
        slug {
          current
        }
        publishDate {
          local
        }
        synopsis
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
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const builder = useImageUrlBuilder();

  const latest = [];
  data.allSanityArticle.nodes.forEach((item) => {
    latest.push({
      type: "articles",
      date: item.publishDate.local,
      link: `/articles/${item.slug.current}`,
      item,
    });
  });
  // data.allSanityEvent.nodes.forEach((item) => {
  //   latest.push({
  //     type: "events",
  //     date: item.publishDate.local,
  //     link: `/events/${item.slug.current}`,
  //     item,
  //   });
  // });
  data.allSanityVideo.nodes.forEach((item) => {
    latest.push({
      type: "videos",
      date: item.publishDate.local,
      link: `/videos/${item.slug.current}`,
      item,
    });
  });

  return (
    <Layout title="Home">
      <section className="hero">
        <p className="quote">
          A creative, entertaining, and highly technical public speaker, Ben excels at connecting and engaging with audiences of all levels and making any topic
          fun.
        </p>
        <img alt="Ben Dechrai at a community event" src="/images/bendechrai.jpg" />
        <Link to="/about/" className="button button-big full-width">
          Read all testimonials, and book me to speak at your event!
        </Link>
      </section>
      <section>
        <div className="split split-highlight content-list">
          <h2>Recent Articles</h2>
          {latest.splice(0, 6).map((content) => (
            <Link to={content.link} className="content-item" key={content.item.slug.current}>
              <h3>{content.item.title}</h3>
              {(content.item.image && (
                <img src={builder.image(content.item.image).width(400).height(225).url()} alt={content.item.image.alt} title={content.item.image.alt} />
              )) || (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  src="../images/flamingo.jpg"
                  alt="There was no image for this content, so here's a photo of a flamingo instead."
                  title="There was no image for this content, so here's a photo of a flamingo instead."
                />
              )}
              <p>{content.item.synopsis}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="split">
        <div>
          <h2>Where To Find Me</h2>
          <StaticImage src="../images/ipc.jpg" alt="" />
          <p>
            <Link to="/events/international-php-conference-2021" className="button full-width">
              International PHP Conference
            </Link>
          </p>
          <p>Being held online and in person in München, Germany. I'll be talking about kittens, and their use in laundry-as-a-service operations.</p>
        </div>
        <div>
          <h2>About Me</h2>
          <StaticImage src="../images/ben-speaking.jpg" alt="" />
          <p>
            <Link to="/about/" className="button full-width">
              Get the low-down...
            </Link>
          </p>
          <p>Want to know more about me, what I do, and what others think of me? This is the page for you.</p>
        </div>
        <div>
          <h2>Get In Touch!</h2>
          <StaticImage src="../images/contact-form.jpg" alt="" />
          <p>
            <Link to="/contact/" className="button full-width">
              Find a contact option...
            </Link>
          </p>
          <p>Whatever the reason, there's probably some useful information on this page that'll help you...</p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
