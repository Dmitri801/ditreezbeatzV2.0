import React from "react";
import { Container } from "semantic-ui-react";

const BeatStore = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <iframe
        src="//www.beatstars.com/player/?storeId=8013"
        scrolling="no"
        width="100%"
        height="500"
        style={{
          maxWidth: "1040px",
          boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.1),0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
        }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="beatStore"
      >
        {" "}
        -- none --{" "}
      </iframe>
    </Container>
  );
};

export default BeatStore;
