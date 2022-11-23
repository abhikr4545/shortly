import { useState, useEffect } from 'react'
import StatisticsCard from '../statisticscard/StatisticsCard';
import LinkInput from '../linkinput/LinkInput';
import LinkResultContainer from '../linkresultcontainer/LinkResultContainer';

import Graph from "../../images/icon-brand-recognition.svg";
import Record from "../../images/icon-detailed-records.svg";
import Customize from "../../images/icon-fully-customizable.svg";

import "./Statistics.scss";

const cardDetails = [
  {
    id: 1,
    heading: "Brand Recognition",
    info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    image: Graph
  },
  {
    id: 2,
    heading: "Detailed Records",
    info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: Record
  },
  {
    id: 3,
    heading: "Fully Customizable",
    info: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    image: Customize
  },
]

const Statistics = () => {
  const [linkInput, setLinkInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [urlArray, setUrlArray] = useState([]);

  const fetchShortUrl = async () => {

    if (linkInput === "") {
      setIsValid(true);
      return;
    }

    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput}`);
    const data = await response.json();
    setLinkInput("");

    const newUrlArray = [ { key: data.result.code , url: linkInput, sortedUrl: data.result.full_short_link }, ...urlArray];
    setUrlArray(newUrlArray);
  }
  
  useEffect(() => {
    setTimeout(() => setIsValid(false), 2000);
  }, [isValid])

  return (
    <div className="container">
      <section className='statistics'>
        <LinkInput linkInput={linkInput} setLinkInput={setLinkInput} fetchShortUrl={fetchShortUrl} isValid={isValid} />
        <LinkResultContainer urlArray={urlArray} />
        <h1 className='heading'>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
        <div className="card-container">
          {cardDetails.map((card) => (
            <StatisticsCard key={card.id} heading={card.heading} info={card.info} icon={card.image} />
          ))}
        </div>
      </section> 
    </div>
  )
}

export default Statistics;