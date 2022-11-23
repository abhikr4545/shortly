import React from 'react'

import LinkResult from '../linkresult/LinkResult';

import "./LinkResultContainer.scss";

const LinkResultContainer = ({ urlArray }) => {
  return (
    <section className="link-result-container">
      {urlArray.slice(0,3).map((url) => (
        <LinkResult key={url.key} url={url.url} shortedUrl={url.sortedUrl} />
      )) }
    </section>
  )
}

export default LinkResultContainer