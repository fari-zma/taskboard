import React, { useState } from "react";
import "../styles/styles.css";
import { BsThreeDotsVertical, BsCircle } from "react-icons/bs";
import AddIcon from "./AddIcon";
import TaskModal from "./TaskModal";

function Task({ list }) {
  const [showTask, setShowTask] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mx-auto my-2 w-50">
      <div className="text-white task">
        <div className="d-flex justify-content-between mx-2">
          <h5>{list.title}</h5>
          <div className="">
            <BsThreeDotsVertical />
          </div>
        </div>

        <button
          className="d-flex align-items-center m-2 add-btn"
          onClick={() => {
            setShowTask(true);
          }}
        >
          <AddIcon size={"30px"} color="#f0f0f0" />
          <h6 className="ml-2 text-white-50">Add new task</h6>
        </button>

        {list.tasks.map((task) => {
          return (
            <button
              key={task.id}
              className="d-flex align-items-center mx-2 my-2 add-btn"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              <BsCircle size={"30px"} color="#f0f0f0" />
              <div className="ml-4 text-white text-left">
                <h5>{task.title}</h5>
                {showMore ? (
                  <div>
                    <h5>{task.detail}</h5>
                    <h5>{task.date}</h5>
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
      <TaskModal show={showTask} setShow={setShowTask} listId={list.id} />
    </div>
  );
}

export default Task;
