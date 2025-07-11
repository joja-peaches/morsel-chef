import "./about.css";
// import banner from "../../assets/images/chef-megan-gajewski-kitchen.jpg";
import portrait from "../../assets/images/chef-megan-gajewski-wisconsin.jpg";
import yogurt from "../../assets/images/strawberry-yogurt-milwaukee.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__banner" />
      <h1 className="about__title">About Morsel</h1>
      <article className="about__text">
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
      </article>
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
      <p className="about__text">
        ServSafe Certified | Certified Food Manager | Bartender's License |
        AllerTrain Training | Stone Creek Coffee Barista Training | HeartSaver
        CPR & AED Training
      </p>
      <p className="about__text">
        ​B.A. Business Administration emp. Hospitality Management | A.A.
        Culinary Arts | Attended Apicius Intl. School of Hospitality in
        Florence, Italy | 18+ years Foodservice Experience | Staged for Charlie
        Trotter, Justin Carlisle, Karen Bell, and more | Volunteered at PBS
        events with Lidia Bastianich and Rick Bayless
      </p>
      <h2 className="about__subtitle">Cuisines & Specialties</h2>
      <p className="about__text">
        American, French, Italian, Polish, German, Mexican, Indian, Asian
        Allergy-friendly, Dairy-free, Gluten-free, Ketogenic, Paleo, Vegan,
        Vegetarian, Raw
      </p>
      <h2 className="about__subtitle">Experience</h2>
      <p className="about__text">
        Executive chef, sous chef, catering chef, pastry chef at university,
        stadium, restaurant, museum, cafe, family functions, private events.
        Personal chef for families, couples, individuals, professionals,
        athletes, celebrities.{" "}
      </p>
      <p className="about__text">
        MILWAUKEE PUBLIC MARKET 2019 - 2021 marquette university 2012 – 2020 THE
        PASTA TREE 2009 – 2011 milWAUKEE ART MUSEUM 2007 – 2009 miller park 2004
        – 2010
      </p>
      <blockquote>
        "Megan has discerning taste, a sharp eye for presentation, and a deep
        passion for cooking that is unparalleled!"
      </blockquote>
      <p>Satisfied Client</p>
    </section>
  );
}

export default About;
