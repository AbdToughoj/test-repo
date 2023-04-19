import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./ModalNews.css";

export default function ModalNews(props) {
  const [showComment, setShowComment] = useState(false);
  const handleCommentBtn = () => setShowComment(!showComment);

  function commentBtnState() {
    return showComment ? "Cancel comment" : "Add comment";
  }

  const commentData = useRef();

  function commentHandler() {
    let commentValue = commentData.current.value;
    props.addCommentProp(commentValue, props.data.id);
  }

  async function addReadLater() {
    const url = `${process.env.REACT_APP_URL}/addNews`;
    const data = {
      source: props.data.source,
      author: props.data.author,
      title: props.data.title,
      description: props.data.description,
      url: props.data.url,
      image: props.data.image,
      publishedat: props.data.publishedat,
      comment: props.data.comment,
    };

    const requestConfigs = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, requestConfigs);
    const resData = await response.json();
    console.log(resData);
  }

  function addReadLaterHandler() {
    props.handleClose();
    commentHandler();
    addReadLater();
    console.log(commentData);
  }

  return (
    <>
      <Modal id="modal" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <a href={props.data.url} className="titleStyle">
              {props.data.title}
            </a>
          </Modal.Title>
        </Modal.Header>
        <img id="modal-img" src={props.data.image} alt={props.data.title} />
        <Modal.Body className="p-4 "> {props.data.description} </Modal.Body>
        <div id="auth-date1">
          <p>{`Author: ${props.data.author}`}</p>
          <p>{`Publish Date: ${props.data.publishedAt.replace(
            /[TZ]/gi,
            " "
          )}`}</p>
        </div>
        <p id="comment">{`Your Note : ${
          props.data.comment || "No Notes added"
        }`}</p>
        {showComment ? (
          <input
            id="updated-inpt"
            ref={commentData}
            type="text"
            placeholder="Add your Note here"
            className="w-100"
          />
        ) : (
          <input type="hidden" ref={commentData} />
        )}
        <Modal.Footer className="p-4  ">
          <Button variant="secondary" onClick={handleCommentBtn}>
            {commentBtnState()}
          </Button>
          <Button variant="primary" onClick={addReadLaterHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
