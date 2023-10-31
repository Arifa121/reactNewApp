
import './App.css';
import AppBar from './Components/Appbar';
import Banner from './Components/Banner';
import Comments from './Components/Comments';
import Menu from './Components/Menu'
import PicofWeek from './Components/PicofWeek';
function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <PicofWeek />
      <Comments />
      <div className="text-center my-3 text-primary small">
        Copyright 2022-2023
      </div>
    </>
  );
}

export default App;
