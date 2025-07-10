import "./about.css";
import banner from "../../assets/images/chef-megan-gajewski-kitchen.jpg";

function About() {
  return (
    <section>
      <article>
        As a little girl, I have always admired those around me and their
        ability to cook incredible meals. From my mom and dad creating their
        ultimate comfort food for me as a child to my grandpa and his
        world-famous bigos that still warms my soul. I couldn’t imagine any
        other world, one that inspires me to this day. I began cooking at a
        young age, and it soon became my passion. I love that even now I still
        smile when sautéing onions hearing that sizzle, watching the steam rise
        around my face. It never gets old. My journey began 19 years ago and led
        me here to Morsel. I am so glad I’m here. And I’m glad you are too.
      </article>
      <img src={banner} alt="text" />
      <h2>Background</h2>
      <p>
        ServSafe Certified | Certified Food Manager | Bartender's License |
        AllerTrain Training | Stone Creek Coffee Barista Training | HeartSaver
        CPR & AED Training
      </p>
      <p>
        ​B.A. Business Administration emp. Hospitality Management | A.A.
        Culinary Arts | Attended Apicius Intl. School of Hospitality in
        Florence, Italy | 18+ years Foodservice Experience | Staged for Charlie
        Trotter, Justin Carlisle, Karen Bell, and more | Volunteered at PBS
        events with Lidia Bastianich and Rick Bayless
      </p>
      <h2>Cuisines & Specialties</h2>
      <p>
        American, French, Italian, Polish, German, Mexican, Indian, Asian
        Allergy-friendly, Dairy-free, Gluten-free, Ketogenic, Paleo, Vegan,
        Vegetarian, Raw
      </p>
      <h2>Experience</h2>
      <p>
        Executive chef, sous chef, catering chef, pastry chef at university,
        stadium, restaurant, museum, cafe, family functions, private events.
        Personal chef for families, couples, individuals, professionals,
        athletes, celebrities.{" "}
      </p>
      <p>
        MILWAUKEE PUBLIC MARKET 2019 - 2021 marquette university 2012 – 2020 THE
        PASTA TREE 2009 – 2011 milWAUKEE ART MUSEUM 2007 – 2009 miller park 2004
        – 2010
      </p>
    </section>
  );
}

export default About;
