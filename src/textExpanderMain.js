import { useState } from "react";
import React from "react";
let box = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "7px",
  backgroundColor: "#f7f7f7",
};
export default function TextExpanderMain() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Collapse text"
        collapseButtonText="Show more"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}
function TextExpander({
  expanded = false,
  collapsedNumWords = 10,
  collapseButtonText = "Show more",
  expandButtonText = "Show less",
  buttonColor = "darkblue",
  children,
}) {
  let [showMore, setShowMore] = useState(expanded);
  let numsWord = React.Children.toArray(children)[0]
    .split(" ")
    ?.slice(0, collapsedNumWords)
    .join(" ");

  let words = `${showMore ? numsWord : numsWord + `...`}`;

  function handleShow() {
    setShowMore((showMore) => !showMore);
  }
  return (
    <div style={box}>
      <div>
        <span>{showMore ? children : words}</span>
        <span onClick={handleShow} style={{ color: buttonColor }}>
          {showMore ? expandButtonText : collapseButtonText}
        </span>
      </div>
    </div>
  );
}
