import { useState, useEffect } from 'react'

import "./LinkResult.scss";

const LinkResult = ({ url, shortedUrl }) => {

  const [copyState, setCopyState] = useState(false);

  const handleClick = async (e) => {
    setCopyState(true);
    await window.navigator.clipboard.writeText(e.target.previousElementSibling.innerText)
  }

  useEffect(() => { 
    setTimeout(() => setCopyState(false), 2200)
   }, [copyState])

  return (
    <article className="link-result">
      <div className="left">
        {url}
      </div>
      <div className="divider"></div>
      <div className="right">
        <div className="result-link">
          {shortedUrl}
        </div>
        <button onClick={handleClick} className={`copy-button ${copyState ? "copy" : ""}`}>
          { copyState ? "Copied!" : "Copy" }
        </button>
      </div>
    </article>
  )
}

export default LinkResult