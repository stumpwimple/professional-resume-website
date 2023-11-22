import React from "react";

const Bio = () => {
  return (
    <div style={bioStyle}>
      <div style={textContentStyle}>
        <h1>Bio</h1>
        <p>
          Hello, I'm Ben - a passionate full stack and backend AI developer with
          a lifelong fascination for technology and an unwavering spirit of
          exploration. My journey began in the lush realms of nature, where
          camping trips with family and scouting adventures ignited my love for
          problem-solving and strategic thinking. My childhood was marked by the
          captivating worlds of Atari games and an early Gateway computer,
          setting me on a path of tech enthusiasm that has spanned decades. This
          early exposure to technology, combined with countless hours unraveling
          puzzles in software demos from an uncle in the computer industry,
          shaped my analytical mind. A true pioneer of the digital age, I was an
          early internet adopter, mastering the art of Google searches and
          navigating the vast seas of the early web with a pirate's curiosity ;)
          But it wasn't just the virtual worlds that enthralled me; board and
          card games have been a constant in my life. From classic holiday games
          to the intricate strategies of Magic: The Gathering since age 10, my
          love for these games evolved into an affinity for Dungeons & Dragons,
          competitive online gaming, and cooperative LAN parties through high
          school. My college years were spent in the realms of World of
          Warcraft, and I continue to enjoy a diverse array of board games, from
          Risk 2210 to Gloomhaven. Now, channeling this eclectic mix of
          passions, I bring a unique perspective to AI development, blending a
          deep understanding of technology with a creative problem-solving
          approach. Let's embark on this digital adventure together and craft
          innovative solutions that push the boundaries of what's possible.
        </p>
        <p>
          As I stand at the forefront of AI and creative application
          development, my aspirations are fueled by a blend of my childhood
          curiosity and a deep-seated passion for technological innovation. My
          aim is to harness the boundless potential of artificial intelligence,
          not just as a tool, but as a canvas for creativity and a catalyst for
          solving complex challenges. My vision is to pioneer in developing AI
          solutions that are not only technically proficient but also imbued
          with a sense of creativity and human touch. I dream of crafting AI
          systems that can think, learn, and evolve - mirroring the intricacies
          of the human mind yet surpassing its limitations. This includes
          pushing the boundaries of language model development and prompt
          engineering, creating AI that can not only understand but also
          anticipate and innovate. Moreover, I am driven to explore the synergy
          between AI and gaming - from enhancing the intelligence of virtual
          worlds to leveraging game mechanics for more engaging and interactive
          AI applications. My goal is to create experiences where technology and
          human creativity meet, leading to immersive and dynamic environments
          that are both entertaining and enlightening. In my pursuit, I am also
          committed to ethical and responsible AI development. I believe in
          creating technology that upholds the values of inclusivity,
          transparency, and fairness, ensuring that the AI of tomorrow benefits
          and uplifts humanity. Ultimately, my journey is about transcending the
          conventional boundaries of AI and application development, venturing
          into uncharted territories where imagination meets intelligence, and
          where every challenge is an opportunity to innovate and inspire.
        </p>
      </div>
      <div style={imageContainerStyle}>
        <img
          src={`${process.env.PUBLIC_URL}/images/BenBioPic.png`}
          alt="Your Name"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

const bioStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "20px",
  marginTop: 50,
};

const textContentStyle = {
  width: "70%",
};

const imageContainerStyle = {
  width: "30%",
  textAlign: "right", // Align the image to the right
};

const imageStyle = {
  width: "80%",
  maxHeight: "80%",
};

export default Bio;
