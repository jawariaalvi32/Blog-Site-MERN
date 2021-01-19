import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/posts/" + id)
      .then((res) => res.json())
      .then((res) => {
          console.log(res)
          setPost(res.data)
        })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Row className="mt-5">
      <Col lg={3} md={2} sm={1} xs={1}></Col>
      <Col lg={6} md={8} sm={10} xs={10}>
        <ListGroup>
          <ListGroup.Item variant="primary" className="col-headers">
            Posts
          </ListGroup.Item>
          <ListGroup.Item variant="light">
            <Row>
              <Col className="col-headers">ID</Col>
              <Col>{post?._id}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Title</Col>
              <Col>{post?.title}</Col>
            </Row>
            <Row>
              <Col className="col-headers">Desc</Col>
              <Col>{post?.description}</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col lg={3} md={2} sm={1} xs={1}></Col>
    </Row>
  );
};

export default SinglePost;
