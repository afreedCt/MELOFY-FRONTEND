import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <div>
      <div className="cards d-flex flex-wrap justify-content-center gap-3 my-3">
        <Card style={{ width: "18rem" }} className="rounded-3">
          <Card.Img
            variant="top"
            src="https://media.tenor.com/images/df52aee1ab2d96e32dbd6bb6c9c68420/tenor.gif"
            width={200}
            height={200}
            className="overflow-hidden object-fit"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="rounded-3">
          <Card.Img
            variant="top"
            src="https://media.tenor.com/images/df52aee1ab2d96e32dbd6bb6c9c68420/tenor.gif"
            width={200}
            height={200}
            className="overflow-hidden object-fit"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="rounded-3">
          <Card.Img
            variant="top"
            src="https://media.tenor.com/images/df52aee1ab2d96e32dbd6bb6c9c68420/tenor.gif"
            width={200}
            height={200}
            className="overflow-hidden object-fit"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
