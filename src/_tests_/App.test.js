import React from "react";
import App from "../App";
import { shallow,configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe("Content section snapshot test ", () => {
  it("the snapshot should match", () => {
    const container = shallow(<App />);
    expect(container).toMatchSnapshot();
  });
});
