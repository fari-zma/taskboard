import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

function TaskModal(props) {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    let lists = JSON.parse(localStorage.getItem("lists"));
    lists.forEach((list) => {
      if (list.id === props.listId) {
        let tasks = list.tasks;
        tasks.push({
          id: uuidv4(),
          title: title,
          detail: detail,
          date: date,
        });
      }
    });
    localStorage.setItem("lists", JSON.stringify(lists));
    setTitle("");
    setDetail("");
    setDate("");
    props.setShow(false);
    history.replace("/");
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
          <FormControl
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <FormControl
            as="textarea"
            value={detail}
            placeholder="Details"
            className="my-2"
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <FormControl
            value={date}
            placeholder="Date"
            className="my-2"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Button className="add-btn bg-transparent ml-auto" onClick={addTask}>
            <AddIcon size={"30px"} color="#000" />
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TaskModal;
