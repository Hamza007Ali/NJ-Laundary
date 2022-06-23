import './assets/style/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import ResidentalWashFlod from './pages/residentalWashAndFlod';
import Fold from './pages/fold';
import Load from './pages/load';
import InProgress from './pages/progress';
import AttendenceDriver from './pages/AttendenceDriver/index.jsx';
import Layout from './components/layout';
import { useState } from 'react';
const App = () => {
  const[headerBtnShow, setHeaderBtnShow] = useState(false);
  return (
    <Router>
      <Layout headerText="Testing" headerBtnShow={headerBtnShow}>
        <Routes>
          <Route exact path="/" element={<Home setHeaderBtnShow ={setHeaderBtnShow} />}  />
          <Route exact path="/residental-wash-&-flod" element={<ResidentalWashFlod />} />
          <Route exact path="/fold" element={<Fold />} />
          <Route exact path="/load" element={<Load />} />
          <Route exact path="/in-progress" element={<InProgress />} />
          <Route exact path="/attendance" element={<AttendenceDriver />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
