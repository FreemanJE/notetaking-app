import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NoteList from './components/NoteList/NoteList';
import NoteView from './components/NoteView/NoteView';
import data from './data/data.json'
import { useState } from 'react';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation'

function App() {

  const [list, setList] = useState(data)
  console.log(list)

  return (
    <div className="App">

      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<About />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/list' element={<NoteList list={list} setList={setList} />}>
              {/* <Route index element={<main style={{ padding: "2rem" }}><h2>Title and Body</h2></main>} /> */}
              <Route path='/list/:id' element={<NoteView list={list} setList={setList} />} />
            </Route>
            <Route path="*" element={<Home />} />
          {/* </Route> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;