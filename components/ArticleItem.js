/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

export default function ArticleItem({ article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>
          {article.title}
          &rarr;
        </h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
}
