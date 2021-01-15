import * as React from "react";
import styles from "./styles.module.css";

export const Lead = () => (
  <div className={styles.module}>
    <p>
      "Atomic ReDesign" is an extension of the famous "Atomic Design". When
      designing components such as React and Vue.js, We often had trouble. UI
      granularity classification constraints can prevent component design
      optimization.
    </p>
    <p>
      There was no unified solution to the question, "Where do components of
      this granularity belong?", And it had to be determined by the nature of
      each product. Also, the scattered context caused a loss of concentration
      on the code.
    </p>
    <p>
      Atomic ReDesign aims to capture the actual "The gap between Atomic Design
      and application design" and become a realistic design guideline.
    </p>
  </div>
);
