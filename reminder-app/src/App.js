/**
 * The App component is the root component of the application. 
 * It imports the NavBar, ReminderItem, and ReminderList components and renders them inside a container div. 
 * The NavBar component displays the application name, the ReminderItem 
 */


import './App.scss';
import NavBar from './NavBar/NavBar';
import ReminderItem from './ReminderItem/ReminderItem';
import ReminderList from './ReminderList/ReminderList';

function App() {
  return (
    <div>
    
    <div className="container">
      <NavBar />  {/* Renders the navigation bar component */}
      <ReminderItem /> {/* Renders the ReminderItem bar component */}
      
      <ReminderList />  {/* Renders the ReminderList bar component */}


    </div>
    
    </div>
  );
}


//Export ReminderItem
export default App;
