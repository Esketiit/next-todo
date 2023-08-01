function Modal (props) {

  function confirmHandler () {
    props.onConfirm()
  }
  
  function cancelHandler () {
    props.onCancel()
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn--btn alt" onClick={cancelHandler}>No</button>
      <button className="btn" onClick={confirmHandler}>Yes</button>
    </div>
  )
}

export default Modal