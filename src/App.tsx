import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Kanbas from './Kanbas';
import Assignment3 from './labs/a3';
import HelloWorld from './labs/a3/HelloWorld';
import Landing from './landing';
import './libs/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/kanbas/*" element={<Kanbas />} />
          <Route path="/Labs/a3/*" element={<Assignment3 />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;