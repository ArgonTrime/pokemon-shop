import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { memo } from "react";

import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>
        © 2023 TeachMeSkills Trainee Project, <span>Igor Trimaylov</span>
      </p>
      <div className={styles.links}>
        <Link to="https://github.com/ArgonTrime" target="_blank">
          <GitHubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/ihar-trymailau" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>
    </footer>
  );
};
export default memo(Footer);
