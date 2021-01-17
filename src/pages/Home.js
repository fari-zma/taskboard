import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles.css";
import Task from "../components/Task";
import AddIcon from "../components/AddIcon";
import ListModal from "../components/ListModal";

const getUrl = () => {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  return "https://picsum.photos/id/" + randomNumber + "/info";
};

function Home() {
  const [profilePic, setProfilePic] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    axios({
      url: getUrl(),
    })
      .then((res) => res.data.download_url)
      .then((url) => setProfilePic(url));
  }, []);

  // localStorage.removeItem('lists')
  //console.log(JSON.parse(localStorage.getItem("users")));

  return (
    <div className="tasks">
      {/* NAVBAR START */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid text-white mb-0 ">
          <span className="navbar-brand h2 mr-auto">TasksBoard</span>
          <span className="navbar-brand ml-auto">
            <div className="profile-top m-auto">
              <img
                src={profilePic}
                alt=""
                className="rounded-circle card-img"
              />
            </div>
          </span>
        </div>
      </nav>
      {/* NAVBAR END */}
      {/* BODY START */}
      <div>
        {localStorage.getItem("lists")
          ? JSON.parse(localStorage.getItem("lists")).map((list) => {
              console.log("list ", list);
              return <Task key={list.id} list={list} />;
            })
          : null}
        {/* CUSTOM ADD BUTTON */}
        <button
          className="add-btn add-button"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Add List"
          onClick={() => {
            setShowList(true);
          }}
        >
          <AddIcon size="50px" color="#fff" />
        </button>
      </div>
      {/* BODY END */}
      <ListModal show={showList} setShow={setShowList} />
    </div>
  );
}

export default Home;
