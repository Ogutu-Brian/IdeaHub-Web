import React from "react";
import { Row } from "antd";

import styles from "./LandingPage.module.scss";

interface Props {}

const LandingPage: React.FC<Props> = props => {
  return <Row className={styles.landingPage}>Welcome to IdeaHub</Row>;
};

export default LandingPage;
