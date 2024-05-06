import Title from '../../Components/Title/Title';
import './About.css';

function About() {
  return (
    <section className="About">
      <Title>About Us</Title>
      <div className="About_in flex">
        <div className="About_img">
          <img src="" alt="" />
        </div>
        <div className="About_txt">
          <h3 className='About_tit'>Apple cuts greenhouse gas emissions in half</h3>
          <p>
            <b>Innovations in clean energy, materials, and recycling are driving progress toward Apple’s ambitious environmental goals</b>
            Apple has reduced its overall greenhouse gas emissions by more than 55 percent since 2015, the company shared today in its 2024 Environmental Progress Report. The milestone marks important progress on the journey toward Apple 2030, the company’s ambitious goal to become carbon neutral across its entire value chain by the end of this decade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;