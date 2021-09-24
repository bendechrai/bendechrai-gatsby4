exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const sanityPages = await graphql(`
    {
      allSanityArticle(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
            publishDate {
              local(formatString: "YYYY/MM/DD")
            }
          }
        }
      }
      allSanityTalk(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityEvent(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (sanityPages.errors) throw sanityPages.errors;

  const articles = sanityPages.data.allSanityArticle.edges || [];
  articles.forEach((edge, index) => {
    const oldPath = `/${edge.node.publishDate.local}/${edge.node.slug.current}`;
    const path = `/articles/${edge.node.slug.current}`;
    createRedirect({
      fromPath: oldPath,
      toPath: path,
      redirectInBrowser: true,
      isPermanent: true,
    });
    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const talks = sanityPages.data.allSanityTalk.edges || [];
  talks.forEach((edge, index) => {
    const path = `/talks/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/talk.js"),
      context: { slug: edge.node.slug.current },
    });
  });

  const events = sanityPages.data.allSanityEvent.edges || [];
  events.forEach((edge, index) => {
    const path = `/events/${edge.node.slug.current}`;
    createPage({
      path,
      component: require.resolve("./src/templates/event.js"),
      context: { slug: edge.node.slug.current },
    });
  });
};
