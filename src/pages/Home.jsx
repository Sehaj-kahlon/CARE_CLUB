import React from "react";
import back from "../img/bckground.png";
import pic2 from "../img/pic2.jpg";
import pic3 from "../img/pic3.jpg";
import pic4 from "../img/pic4.jpg";
import pic5 from "../img/pic5.jpg";
import pic6 from "../img/pic6.jpg";
import pic7 from "../img/pic7.jpg";
import pic8 from "../img/pic8.jpg";
import pic9 from "../img/pic9.jpg";
import pic10 from "../img/pic10.jpg";
import pic11 from "../img/pic11.jpg";
import pic12 from "../img/pic12.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="continer">
        <div class="about" id = "about">
          <img src={back} alt="Logo" />

          <h2 class="title">ABOUT US</h2>
          <p>
            <strong>How long has it been since you have eaten your last meal?</strong>
            <br />
            <br />
            2-3 hours?
            <br />
            1 hour?
            <br />
            30 min?
            <br /> Or maybe less than that
            <br />
            <br />
            Some people haven’t had a wholesome meal for quite a long while. There could be nothing
            as unfortunate as seeing a person in this situation.
            <br />
            <br />
            <strong>Want to help ? </strong>
            <i>Care Club </i>comes to your rescue.
            <br />
            The excess food at your place can help us feed someone’s empty stomach. Our app provides
            a user-friendly platform wherein donors from hotels, restaurants or people with extra
            food can link up with the NGOs that are best suited to them so they can further help the
            needy.
            <br />
            <br />
            <strong>Our Vision -</strong>
            <br />
            Currently, the app deals with the provision of food only. Still, with your support and
            help, we could also cover areas like the provision of clothes, recycled products, books
            and anything that other people could reuse.
            <br />
            Food shortage is not the issue. What the real problem is, its availability to the needy
            people.
            <br />
            <br />
            Become a part of the Care Club community and contribute to the society, whether big or
            small. After all,
            <strong> We can’t help everyone, but everyone can help someone.</strong>
          </p>
        </div>
        <div className="gallery" id="gallery">
          <div className="tall">
            <div className="photos">
              <img src={pic2} alt="Logo" />
            </div>
          </div>
          <div className="short">
            <div className="photos">
              <img src={pic4} alt="Logo" />
            </div>
          </div>
          <div className="photos">
            <img src={pic11} alt="Logo" />
          </div>
          <div className="photos">
            <img src={pic3} alt="Logo" />
          </div>
          <div className="short">
            <div className="photos">
              <img src={pic5} alt="Logo" />
            </div>
          </div>
          <div className="photos">
            <img src={pic6} alt="Logo" />
          </div>
          <div className="photos">
            <img src={pic7} alt="Logo" />
          </div>
          <div className="photos">
            <img src={pic10} alt="Logo" />
          </div>
          <div className="tall">
            <div className="photos">
              <img src={pic9} alt="Logo" />
            </div>
          </div>
          <div className="short">
            <div className="photos">
              <img src={pic8} alt="Logo" />
            </div>
          </div>
          <div className="photos">
            <img src={pic12} alt="Logo" />
          </div>
        </div>
        <div className="feedback" id = "feedback">
          <div className="rev1">
            <p>
            Food shortage is an issue of grave concern. If you feel like giving back to the community, this is the place!
            <br/>
            - BRAC(NGO)
            </p>
          </div>
          <div className="rev2">
            <p>
            So, Every time there is a celebration in the family, we don’t have to worry about the excess food left because NGOs can be found easily on CARE CLUB
              <br/>
              - Patrick 
            </p>
          </div>
          <div className="rev3">
            <p>
              We are now able to connect with the donators easily. Great experience Care Club thank you.
              <br/>
              - Pratham (NGO)
            </p>
          </div>
          <div className="rev4">
            <p>
            Thank you, Care Club, for providing me with the opportunity to help needy people. Nobody should sleep empty stomach.
            <br/>
            - Jessica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
