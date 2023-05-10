import Home from './components/Home/Home';
import "./App.css"
import Search from './components/Search/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from './components/Result/Result';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Movies</h1>
        <Search />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/result" element={<Result />} />        
        </Routes>
      </div></BrowserRouter >
  );
}

export default App;
