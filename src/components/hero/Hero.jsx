import HeroImage from "../../images/illustration-working.svg";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={HeroImage} alt="Working" />
      </div>
      <div className="hero-info">
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights 
        on how your links are performing.</p>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default Hero