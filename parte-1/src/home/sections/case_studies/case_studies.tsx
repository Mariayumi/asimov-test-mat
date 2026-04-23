import { Link } from "react-router";
import "../../page.css";
import "./case_studies.css";
import React from "react";
import { arrow_green } from "../../../assets";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      description:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "https://www.google.com",
    },
    {
      description:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "https://www.google.com",
    },
    {
      description:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "https://www.google.com",
    },
  ];

  return (
    <section>
      <div className="titulo-section">
        <h2>Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="case-studies-container">
        {caseStudies.map((caseStudy, index) => (
          <>
            <div className="case-study-wrapper" key={index}>
              <div className="case-study">
                <p>{caseStudy.description}</p>
                <Link to={caseStudy.link}>
                  Learn More <img src={arrow_green} alt="Arrow" className="case-study-arrow" />
                </Link>
              </div>
            </div>
            {index < caseStudies.length - 1 && (
              <hr className="vertical-divider" />
            )}
          </>
        ))}
      </div>
    </section>
  );
}
