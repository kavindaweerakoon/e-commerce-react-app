import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "../ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library?</span>
          </h2>
          <div className="highlight__wrapper">

            {/* Passing in properties "icon", "subtitle" and "para" into the Highlight .jsx component and doing it 3 times over. */}
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              subtitle="Easy and Quick"
              para={
                <div>
                  Get access to the book you purchased online{" "}
                  <span className="purple">instantly.</span>
                </div>
              }
            />

            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              subtitle="10,000+ Books"
              para={
                <div>
                  Library has books in <span className="purple">all</span> your
                  favorite categories.
                </div>
              }
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              subtitle="Affordable"
              para={
                <div>
                  Get your hands on popular books for as little as{" "}
                  <span className="purple">$10.</span>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
