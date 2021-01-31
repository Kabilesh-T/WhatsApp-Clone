import './App.css';
import Chat from './components/Chat/Chat';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
     <div className="app__body">
      {/* Sidebar */}
      <SideBar/>
      {/* Main Chat */}
      <Chat/>
     </div>
    </div>
  );
}

export default App;
