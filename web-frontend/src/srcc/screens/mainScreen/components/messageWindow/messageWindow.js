import './mainScreen.css';

function MainScreen() {
  return (
    <div className="app">
      <div className="app__body"> 
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default MainScreen;
