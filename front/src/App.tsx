import ChatBot from '../pages/ChatBot';
import MenuBar from '../pages/MenuBar';

function App() {

  return (
    <>
      <div className="App">
        <MenuBar />
        <h1>Chatbot demo</h1>
        <ChatBot />
      </div>
    </>
  )
}

export default App
