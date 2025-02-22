import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../propos/Propos.module.scss"; // Import des styles via CSS modules

const CustomCollapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer le collapse

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse l'état d'ouverture
  };

  return (
    <div className={styles.customCollapse}>
      <div
        className={styles.customCollapseHeader}
        onClick={toggleCollapse}
      >
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className={styles.customArrow}
        />
      </div>
      {isOpen && (
        <div className={styles.customCollapseContent}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default CustomCollapse;
