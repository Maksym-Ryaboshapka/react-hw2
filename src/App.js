import "./App.css";

import Greeting from "./components/Greeting/Greeting";
import Message from "./components/Message/Message";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Greeting name="Іван" />
      <Message text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae praesentium culpa laudantium velit qui dolorem dignissimos tempore aperiam voluptas reprehenderit cumque quae aliquid, consectetur assumenda omnis et provident ipsum, dicta explicabo cum? Suscipit nulla magni expedita earum exercitationem ut sapiente officiis adipisci. Nemo, quam!" />
      <Button
        onClick={() => {
          alert("Message!");
        }}
      />
    </div>
  );
}

export default App;
