import React from "react";
import {
  FaArrowRight,
  FaDatabase,
  FaUsers,
  FaSyncAlt,
  FaCube,
} from "react-icons/fa";
import "./index.css"; // Make sure to import the CSS

const timelineItems = [
  {
    icon: <FaArrowRight className="icon" />,
    title: "Ready to Go Algos",
    description:
      "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
    position: "top",
  },
  {
    icon: <FaDatabase className="icon" />,
    title: "Multi-source data",
    description:
      "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
    position: "bottom",
  },
  {
    icon: <FaUsers className="icon" />,
    title: "Stakeholder alignment",
    description:
      "No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
    position: "bottom",
  },
  {
    icon: <FaCube className="icon" />,
    title: "Internal capability building",
    description:
      "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
    position: "top",
  },
  {
    icon: <FaSyncAlt className="icon" />,
    title: "Continuous engagement",
    description:
      "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
    position: "bottom",
  },
];

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className={`dot ${item.position}`}></div>
            <div className={`content ${item.position}`}>
              {item.icon}
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
