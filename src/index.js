import React from "react";
import { render } from "react-dom";
import FormSimple from "./FormSimple";
import FormSimpleWithValidation from "./FormSimpleWithValidation";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Simple form</h2>
    <FormSimple />
    <br />
    <h2>Simple form with validation</h2>
    <FormSimpleWithValidation />
  </div>
);

render(<App />, document.getElementById("root"));
