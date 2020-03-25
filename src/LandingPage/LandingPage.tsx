import React from "react";
import { Row } from "antd";

import { Header } from "../Components";

import styles from "./LandingPage.module.scss";

interface Props {}

const LandingPage: React.FC<Props> = props => (
  <Row className={styles.landingPage}>
    <Header title={"IdeaHub"} />
  </Row>
);

export default LandingPage;
