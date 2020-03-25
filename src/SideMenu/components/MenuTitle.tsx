import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface Props {
  icon: IconDefinition;
  label: string;
}

const MenuTitle: React.FC<Props> = props => (
  <Row type="flex" gutter={16}>
    <Col>
      <FontAwesomeIcon icon={props.icon} style={{ fontSize: 20 }} />
    </Col>
    <Col style={{ fontWeight: "bold" }}>{props.label}</Col>
  </Row>
);

export default MenuTitle;
