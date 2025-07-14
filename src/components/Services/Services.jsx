import "./Services.css";
import serving from "../../assets/images/best-wisconsin-chef-serving.jpg";
import cutting from "../../assets/images/megan-morsel-chef-cutting-tomato.jpg";
import spices from "../../assets/images/spices-personal-chef.jpg";
import pans from "../../assets/images/wisconsin-foodie-fine-dining.jpg";
import tupperware from "../../assets/images/morsel-chef-tupperware.jpg";

function Services() {
  return (
    <article className="services">
      <div className="services__banner_type_top" />
      <h1 className="services__title">Hybrid Meal Planning</h1>
      <h2 className="services__subtitle">Your home, your table, your way</h2>
      <section className="services__text services__text-intro">
        Welcome to Morsel’s hybrid meal planning service. Chef Megan will
        customize your weekly meals to your exact specifications and leave you
        wanting more!
      </section>
      <div className="services__photo-pair">
        <img
          src={tupperware}
          alt="flash photo of stacked tupperware inside kitchen on granite countertop"
          className="services__photos"
        />
        <img
          src={serving}
          alt="flash photo of chef pouring corn from a pan into tupperware dishes sitting on a table"
          className="services__photos"
        />
      </div>
      <section className="services__text">
        Chef Megan will do the grocery shopping, prepare your meal(s) in your
        home, cook them, and store them in an approved heating vessel. Clean up
        is included and a spotless kitchen is to be expected.
        <br />
        <br />
        This service is perfect for anyone looking for a ready-to-eat meal
        offering all the good and none of the bad. What are you waiting for?
        Reach out today!
      </section>
      <div className="services__banner_type_middle" />
      <h2>Details</h2>
      <section className="services__text">
        <img
          src={spices}
          alt="cutting board and knife on granite counter with an open cupboard revealing shelves full of spices"
          className="services__image-float"
        />
        Hybrid meal planning is a unique service that includes the best of both
        worlds: ready-to-eat meals and a professional chef in your home. This
        service can be catered to your meal needs whether lunch or dinner and be
        packed individually or family-style in one large dish.
        <br />
        <br />
        This service is great for individuals, couples, or families; however,
        the maximum meals and portions allowed per service is a 3x4. Please note
        this service is only available within 10 miles of Milwaukee proper.
        <br />
        <br />
        Client’s form of payment i.e. a credit card must be available for Morsel
        to use to purchase groceries.
        <br />
        <br />
        If you are located in downtown Milwaukee in a high-rise or other
        non-traditional home setting, Morsel must have access to free parking
        (street or underground) and unequivocal access to building and home
        through the use of a fob, keycard, key, and/or passcode.
      </section>
      <div className="services__photo-pair">
        <img
          src={cutting}
          alt="flash photo of chef cutting red tomatoes and yellow bell peppers"
          className="services__photos"
        />
        <img
          src={pans}
          alt="flash photo of meals being cooked on the stove"
          className="services__photos"
        />
      </div>
      <section className="services__text">
        <span className="services__text-oblique">
          Please note that groceries are not included in base price for this
          service. Full service fee is due immediately upon request of service
          to secure service date and time. Groceries are to be paid upon
          completion of service. Taxes may apply. Please get in touch for
          pricing details.
        </span>
      </section>
      <div className="services__quote-container">
        <div className="services__quote-block">
          <blockquote className="services__quote">
            “I know once people get connected to real food, they never change
            back.”
          </blockquote>
          <p className="services__quote-text">- Alice Waters</p>
        </div>
      </div>
    </article>
  );
}

export default Services;
