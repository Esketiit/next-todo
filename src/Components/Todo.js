import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function handleDelete () {
  setModalIsOpen(true)
}

function closeModalHandler () {
  setModalIsOpen(false)
}

function Todo(props) {
  let [modalIsOpen, setModalIsOpen] = useState()

  return (
    <div className="card">
        <h2>Title</h2>
        <div className="actions">
          <button className="btn" onClick={handleDelete}>Delete</button>
        </div>
        {modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null}
        {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}
      </div>
  )
}

export default Todo;