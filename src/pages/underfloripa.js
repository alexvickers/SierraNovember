import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query UnderfloripaQuery {
    underfloripa {
      posts(first: 10) {
        nodes {
          title
          uri
          date
        }
      }
    }
  }
`;

const UnderfloripaPage = ({ data }) => {
  const posts = data.underfloripa.posts.nodes;

  return (
    <div className="container py-5">
      <h1 className="mb-4">Últimos textos no Underfloripa</h1>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.uri} className="list-group-item">
            <a
              href={`https://underfloripa.com.br${post.uri}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{post.title}</strong>
            </a>
            <br />
            <small className="text-muted">
              {new Date(post.date).toLocaleDateString("pt-BR")}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnderfloripaPage;
