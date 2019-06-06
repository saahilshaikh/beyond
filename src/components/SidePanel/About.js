import React from "react";
import { Grid, Image, Segment, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/beyond-edd3a.appspot.com/o/Untitled-1.jpg?alt=media&token=07e81fdb-ae97-4cc5-9c1e-e96277820fb3"
            className="about__image"
          />
        </div>

        <Grid columns={3} divided style={{ marginLeft: "15px" }}>
          <Grid.Row>
            <Grid.Column>
              <Image src="https://firebasestorage.googleapis.com/v0/b/beyond-edd3a.appspot.com/o/uzair.jpg?alt=media&token=52fe5936-774d-49e8-89b3-dd55e018229a" />
              <Segment>
                <Label as="a" color="orange" ribbon="left">
                  Name
                </Label>
                Mohammad Uzair
              </Segment>
              <Segment>
                <Label as="a" color="red" ribbon="left">
                  Qualification
                </Label>
                B.Tech in ComputerScience
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/beyond-edd3a.appspot.com/o/robot-pro.png?alt=media&token=1ce8a902-dd33-4eef-802d-41175cea45f8"
                style={{ height: "350px" }}
              />
              <Segment>
                <Label as="a" color="orange" ribbon="left">
                  Name
                </Label>
                Sohail Qadir
              </Segment>
              <Segment>
                <Label as="a" color="red" ribbon="left">
                  Qualification
                </Label>
                B.Tech in ComputerScience
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Image src="https://firebasestorage.googleapis.com/v0/b/beyond-edd3a.appspot.com/o/IMG_20181229_153907.jpg?alt=media&token=e8252f63-2c09-46b9-9874-8ea6adf417e6" />
              <Segment>
                <Label as="a" color="orange" ribbon="left">
                  Name
                </Label>
                Shaikh Ahmaduddin
              </Segment>
              <Segment>
                <Label as="a" color="red" ribbon="left">
                  Qualification
                </Label>
                B.Tech in ComputerScience
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button style={{ margin: "5% 0% 5% 45%" }}>
          <Link to="/beyond/">Go back to Chat Room</Link>
        </Button>
      </div>
    );
  }
}

export default About;
