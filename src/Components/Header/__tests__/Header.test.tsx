import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { PageHeaderProps } from "antd/lib/page-header";

import Header from "../Header";

describe("header Tests", () => {
  const props: PageHeaderProps = {
    title: "Example Page"
  };

  const wrapper: ReactWrapper = mount(<Header {...props} />);
  it("Should render header without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
