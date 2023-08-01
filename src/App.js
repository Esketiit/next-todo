import Todo from './Components/Todo'
import Modal from './Components/Modal'
import Backdrop from './Components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text={"Complete exam review"}/>
      <Todo text={"Finish work contack list"}/>
      <Todo text={"Take a walk around Hudson Yards"}/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
