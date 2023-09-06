import React from "react";
import { Part } from "./Part";

const Avatar = (
  // avatar random
  {
    body,
    eyes,
    hair,
    clothing1,
    clothing2,
    clothing3,
    mouth,
    eyebrow,
    glasses,
    hats, //
  },
  ref
) => {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="eyes" index={eyes} zIndex={9} />
      <Part path="hair" index={hair} zIndex={6} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={2} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={3} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={4} />
      <Part path="mouths" index={mouth} zIndex={4} />
      <Part path="noses" index={0} zIndex={4} />
      <Part path="eyebrows" index={eyebrow} zIndex={4} />
      <Part path="accessories/glasses" index={glasses} zIndex={5} />
      <Part path="accessories/hats" index={hats} zIndex={5} />
      {/*  */}
    </div>
  );
};

export default Avatar;
