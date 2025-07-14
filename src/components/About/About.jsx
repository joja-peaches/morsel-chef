import "./about.css";
import portrait from "../../assets/images/chef-megan-gajewski-wisconsin.jpg";
import yogurt from "../../assets/images/strawberry-yogurt-milwaukee.jpg";

function About() {
  return (
    <article className="about">
      <div className="about__banner" />
      <h1 className="about__title">About Morsel</h1>
      <section className="about__text">
        As a little girl, I always admired those around me and their ability to
        cook incredible meals - from my mom and dad creating their ultimate
        comfort food for me as a child, to my grandpa and his world-famous bigos
        that still warm my soul.
        <br />
        <br />I couldn’t imagine any other world, one that inspires me to this
        day. I began cooking at a young age, and it soon became my passion. I
        love that even now I still smile when sautéing onions, hearing that
        sizzle, watching the steam rise around my face. It never gets old.
        <br />
        <br />
        My journey began 19 years ago and led me here to Morsel. I am so glad
        I’m here. And I’m glad you are too.
      </section>
      <div className="about__photo-pair">
        <img
          src={yogurt}
          className="about__photos"
          alt="aerial photo of yogurt and spoon on a marble tabletop"
        />
        <img
          src={portrait}
          className="about__photos"
          alt="Chef Megan Gajewski standing in chef outfit and apron with kitchen behind her"
        />
      </div>
      <h2 className="about__subtitle">Background</h2>
      <section className="about__text about__text-centered">
        ServSafe Certified | Certified Food Manager | Bartender's License
        <br />
        AllerTrain Training | Stone Creek Coffee Barista Training
        <br />
        HeartSaver CPR & AED Training
      </section>
      <section className="about__text about__text-centered">
        ​B.A. Business Administration emp. Hospitality Management
        <br />
        Attended Apicius Intl. School of Hospitality in Florence, Italy
        <br />
        A.A. Culinary Arts | 18+ years Foodservice Experience
        <br />
        Staged for Charlie Trotter, Justin Carlisle, Karen Bell, and more
        <br />
        Volunteered at PBS events with Lidia Bastianich and Rick Bayless
      </section>
      <h2 className="about__subtitle">Cuisines & Specialties</h2>
      <section className="about__text about__text-centered">
        American, French, Italian, Polish, German, Mexican,
        <br />
        Indian, Asian Allergy-friendly, Dairy-free, Gluten-free,
        <br />
        Ketogenic,Paleo, Vegan, Vegetarian, Raw
      </section>
      <h2 className="about__subtitle">Experience</h2>
      <section className="about__text about__text-centered">
        Executive chef, sous chef, catering chef, pastry chef at university,
        stadium, restaurant, museum, cafe, family functions, private events.
        Personal chef for families, couples, individuals, professionals,
        <br />
        athletes, celebrities.
      </section>
      <section className="about__text about__text-resume">
        Milwaukee Public Market{" "}
        <span className="about__text-oblique">2019 - 2021</span>
        <br />
        Marquette University{" "}
        <span className="about__text-oblique">2012 – 2020</span>
        <br />
        The Pasta Tree <span className="about__text-oblique">2009 – 2011</span>
        <br />
        Milwaukee Art Museum{" "}
        <span className="about__text-oblique">2007 – 2009</span>
        <br />
        Miller Park <span className="about__text-oblique">2004 – 2010</span>
      </section>
      <div className="about__quote-container">
        <div className="about__quote-block">
          <blockquote className="about__quote">
            "Megan has discerning taste, a sharp eye for presentation, and a
            deep passion for cooking that is unparalleled!"
          </blockquote>
          <p className="about__quote-text">- Satisfied Client</p>
        </div>
      </div>
    </article>
  );
}

export default About;
