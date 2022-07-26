import React, { useState, useEffect } from "react";

const HeaderAnimationProtest = () => {
  const [index, setIndex] = useState(0);

  const array = [
    "Following on from the house’s ‘Afterworld: The Age of Tomorrow’ videogame.",
    "In the footwear department, the Spanish-French label flexed its new HD Sneaker, the Knife Wader",
    "Balenciaga Invites Guests to Its Spring 2023 Show With a Stack of Faux Cash",
    "Practicing Demna’s “Raw Architecture” concept. Practicing Demna’s “Raw Architecture” concept.",
    "Joe Freshgoods' instant sell-out collection, the 9060 has since been spotted on the runway for Mowalola's triumphant return",
    "A standout element was Balenciaga’s custom packaging tape which either acted as a belt around a wrap coat or baggy pants",
    "ProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtestProtest",
    "GroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGroteskGrotesk"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(Math.floor(Math.random() * array.length));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={"headerAnimationWrapper"}>
        <div className={"headerAnimationSubWrapper"}>
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
          <div className={"row2"}>
            <p>
              {array[index]}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAnimationProtest;
