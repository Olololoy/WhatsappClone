import './App.css';
import ParentSidebar from './Components/parentSidebar/parentSidebar';
import ActivityWindow from './Components/activityWindow/activityWindow';

function MainScreen() {
  return (
      <div className='mainParentBoundedContainer'>
        <div className='mainContentContainer'>
          <ParentSidebar/>
          <ActivityWindow/>
        </div>
      </div>
  );
}



// function MainScreen() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default MainScreen;
