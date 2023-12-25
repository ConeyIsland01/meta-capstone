import React from "react";
import stars from "../../assets/stars.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="spec-header">
        <h1
          style={{ marginBottom: "30px", marginTop: "5px", fontSize: "32px" }}
        >
          Testimonials
        </h1>
      </div>
      <div className="items">
        <section>
          <h3>Rating 5/5</h3>
          <article>
            <img src={stars} alt="5/5" />
            <h3>John Smith</h3>
            <p>Was delicious...</p>
          </article>
        </section>
        <section>
          <h3>Rating 5/5</h3>
          <article>
            <img src={stars} alt="5/5" />
            <h3>Jane Doe</h3>
            <p>Fast Service - 5 Stars!</p>
          </article>
        </section>
        <section>
          <h3>Rating 5/5</h3>
          <article>
            <img src={stars} alt="5/5" />
            <h3>Joe Shmoe</h3>
            <p>Excellent atmosphere!</p>
          </article>
        </section>
        <section>
          <h3>Rating 5/5</h3>
          <article>
            <img src={stars} alt="5/5" />
            <h3>Joe Anybody</h3>
            <p>Had a wonderful time.</p>
          </article>
        </section>
      </div>
    </div>
  );
};
export default Testimonials;
