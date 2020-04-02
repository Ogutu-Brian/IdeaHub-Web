import React from "react";
import { ReactWrapper, mount } from "enzyme";

import { Idea } from "../";
import { MockData } from '../../../MockData';

describe("Tests for idea", () => {
  const wrapper: ReactWrapper = mount(<Idea idea={MockData.Ideas[0]} />);

  it("Should mount idea without crushing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
