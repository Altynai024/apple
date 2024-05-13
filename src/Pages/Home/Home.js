import Button from '../../Components/Button/Button';
import HomeSec from '../../Components/HomeSec/HomeSec';
import HomeTxt from '../../Components/HomeTxt/HomeTxt';
import './Home.css';

function Home() {
  return (
    <>
    <div className="Home_sec Home_sec__white Home_sec__iphone15">
      <div className="container">
        <HomeSec>iPhone 15 Pro</HomeSec>
        <HomeTxt>Titanium. So strong. So light. So Pro.</HomeTxt>
        <div className="Home_buttons flex">
          <Button path='/cart'>Learn More</Button>
          <Button>Buy</Button>
        </div>
      </div>
    </div>
    <div className="Home_sec Home_sec__black Home_sec__iphone15-2">
      <div className="container">
        <HomeSec>iPhone 15</HomeSec>
        <HomeTxt>New camera. New design. Newphoria.</HomeTxt>
        <div className="Home_buttons flex">
          <Button path='/cart'>Learn More</Button>
          <Button>Buy</Button>
        </div>
      </div>
    </div>
    <div className="Home_sec Home_sec__white Home_sec__iphone15">
      <div className="container">
        <HomeSec>iPhone 15 Pro</HomeSec>
        <HomeTxt>Titanium. So strong. So light. So Pro.</HomeTxt>
        <div className="Home_buttons flex">
          <Button path='/cart'>Learn More</Button>
          <Button>Buy</Button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;