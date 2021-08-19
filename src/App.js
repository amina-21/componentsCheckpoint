import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Foot from './Component/Foot/Foot';
import NavBar from './Component/NavBar/NavBar';
import Adress from './Component/Profile/Adress/Adress';
import FullName from './Component/Profile/FullName/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto/ProfilePhoto';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      <Foot/>
    </div>
  );
}

export default App;
