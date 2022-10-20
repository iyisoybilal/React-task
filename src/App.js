import './App.css';
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Todos from './pages/Todos';
import Users from './pages/Users';
import Layout from './pages/Layout';
import Comments from './pages/Comments';
const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="" element={<Todos />} />
            <Route path="users" element={<Users />} />
            <Route path="comments" element={<Comments />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
