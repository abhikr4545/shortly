import React from 'react'

import "./LinkInput.scss";

const LinkInput = ({ linkInput, setLinkInput, fetchShortUrl, isValid }) => {

  const handleChange = (e) => {
    setLinkInput(e.target.value);
  }

  return (
    <article className='link-input'>
      <div className="input">
        <input type="text" value={linkInput} onChange={handleChange} placeholder='Shorten a link here...' />
        <span className={`${isValid ? "invalid" : ""}`}>Please add a Link</span>
      </div>
      <button className='submit-button' onClick={fetchShortUrl}>
        Shorten It!
      </button>
    </article>
  )
}

export default LinkInput