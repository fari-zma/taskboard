import React, { useState } from "react";
import {
  Modal,
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../styles/styles.css";
import AddIcon from "./AddIcon";
import { v4 as uuidv4 } from "uuid";

function ListModal(props) {
  const [title, setTitle] = useState("");

  const addList = () => {
    let lists = [];
    if (localStorage.getItem("lists"))
      lists = JSON.parse(localStorage.getItem("lists"));
    lists.push({
      id: uuidv4(),
      title: title,
      tasks: [],
    });
    localStorage.setItem("lists", JSON.stringify(lists));
    setTitle("");
    props.setShow(false);
  };

  return (
    <div>
      <Modal
        size="sm"
        show={props.show}
        onHide={() => props.setShow(false)}
        centered
      >
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={10}>
                <FormControl
                  value={title}
                  placeholder="Add a list"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Col>
              <Col xs={2}>
                <Button className="add-btn bg-transparent" onClick={addList}>
                  <AddIcon size={"30px"} color="#000" />
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ListModal;
