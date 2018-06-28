import React from "react";
import {
  Container,
  Card,
  Segment,
  Divider,
  Icon,
  Grid,
  Button
} from "semantic-ui-react";
import ScrollableAnchor from "react-scrollable-anchor";
const Licensing = () => {
  return (
    <ScrollableAnchor id="licensing">
      <div>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px"
          }}
        >
          <Segment
            style={{
              minHeight: "100px",
              width: "100%",
              height: "800px",
              background:
                "url('https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
              filter: "grayscale(1)",
              backgroundPosition: "center",
              boxShadow:
                "0 16px 24px 2px rgba(0, 0, 0, 0.1),0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "0"
            }}
          >
            <Grid container textAlign="center">
              <Grid.Row columns={3} className="d-none d-lg-block">
                <Grid.Column />
                <Grid.Column>
                  <Icon name="suitcase" size="massive" color="black" fitted />
                </Grid.Column>
                <Grid.Column />
              </Grid.Row>
            </Grid>
            <Divider section className="d-none d-lg-block" />
            <Card.Group
              style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <Card style={{ height: "500px" }} color="black">
                <Segment
                  style={{
                    backgroundColor: "black",
                    color: "white",

                    padding: "50px",
                    border: "none",
                    margin: "0",
                    paddingTop: "25px"
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  >
                    Basic
                  </h1>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "10px",

                      marginRight: "120px",
                      padding: "10px 10px"
                    }}
                  >
                    <Icon name="dollar sign" size="big" />
                    <span
                      style={{
                        fontSize: "70px",
                        position: "absolute",
                        marginTop: "30px"
                      }}
                    >
                      15
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        position: "absolute",
                        marginTop: "30px",
                        marginLeft: "70px"
                      }}
                    >
                      /Beat
                    </span>
                  </div>
                </Segment>
                <Segment
                  style={{
                    backgroundColor: "rgb(68, 68, 68)",
                    width: "100%",
                    height: "100%",
                    marginTop: "0"
                  }}
                >
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">mp3 Mixed Version</p>
                    </Card.Description>
                  </Card.Content>
                  <Divider />
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">No Audio Tag</p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">Sell Up To 5000 Copies</p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">
                        Must Credit Ditreez Beatz
                      </p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <Button
                        inverted
                        fluid
                        color="black"
                        circular
                        size="massive"
                      >
                        Buy Now
                      </Button>
                    </Card.Description>
                  </Card.Content>
                </Segment>
              </Card>
              <Card style={{ height: "500px" }} color="black">
                <Segment
                  style={{
                    backgroundColor: "black",
                    color: "white",

                    padding: "50px",
                    border: "none",
                    margin: "0",
                    paddingTop: "25px"
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  >
                    Premium
                  </h1>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "10px",

                      marginRight: "120px",
                      padding: "10px 10px"
                    }}
                  >
                    <Icon name="dollar sign" size="big" />
                    <span
                      style={{
                        fontSize: "70px",
                        position: "absolute",
                        marginTop: "30px"
                      }}
                    >
                      30
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        position: "absolute",
                        marginTop: "30px",
                        marginLeft: "70px"
                      }}
                    >
                      /Beat
                    </span>
                  </div>
                </Segment>
                <Segment
                  style={{
                    backgroundColor: "rgb(68, 68, 68)",
                    width: "100%",
                    height: "100%",
                    marginTop: "0"
                  }}
                >
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">High Quality WAV File</p>
                    </Card.Description>
                  </Card.Content>
                  <Divider />
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">No Audio Tag</p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">
                        Sell Up To 10000 Copies
                      </p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">
                        Must Credit Ditreez Beatz
                      </p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <Button
                        inverted
                        fluid
                        color="black"
                        circular
                        size="massive"
                      >
                        Buy Now
                      </Button>
                    </Card.Description>
                  </Card.Content>
                </Segment>
              </Card>
              <Card
                style={{ height: "500px" }}
                color="black"
                className="lastCard"
              >
                <Segment
                  style={{
                    backgroundColor: "black",
                    color: "white",

                    padding: "50px",
                    border: "none",
                    margin: "0",
                    paddingTop: "25px"
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontWeight: "bold"
                    }}
                  >
                    Exclusive
                  </h1>
                  <div
                    style={{
                      display: "block",
                      textAlign: "center",
                      marginTop: "10px",

                      marginRight: "120px",
                      padding: "10px 10px"
                    }}
                  >
                    <Icon name="dollar sign" size="big" />
                    <span
                      style={{
                        fontSize: "70px",
                        position: "absolute",
                        marginTop: "30px"
                      }}
                    >
                      50
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        position: "absolute",
                        marginTop: "30px",
                        marginLeft: "70px"
                      }}
                    >
                      /Beat
                    </span>
                  </div>
                </Segment>
                <Segment
                  style={{
                    backgroundColor: "rgb(68, 68, 68)",
                    width: "100%",
                    height: "100%",
                    marginTop: "0"
                  }}
                >
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">Tracked Out WAV Files</p>
                    </Card.Description>
                  </Card.Content>
                  <Divider />
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">No Audio Tag</p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">
                        Distribute Unlimited Quantities
                      </p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <p className="text-light lead ">
                        Must Credit Ditreez Beatz
                      </p>
                    </Card.Description>
                    <Divider />
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <Button
                        inverted
                        fluid
                        color="black"
                        circular
                        size="massive"
                      >
                        Buy Now
                      </Button>
                    </Card.Description>
                  </Card.Content>
                </Segment>
              </Card>
            </Card.Group>
          </Segment>
        </Container>
      </div>
    </ScrollableAnchor>
  );
};

export default Licensing;
