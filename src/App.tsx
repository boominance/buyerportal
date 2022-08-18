
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Explore from "./pages/Item";

import Home from './pages/Home';
import Login from "./pages/login";
import Item from "./pages/Item";
import Register from "./pages/Register";
import Help from "./pages/Help";
import Recommender from "./pages/Recommender";
import ExploreRecommendations from "./pages/Explore";
import Recommenders from "./pages/Recommenders";
function App() {
  return (
    <>
   
    <div className="App">
       <Router>
          <Header />
          <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item" element={<Item />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/help-and-support" element={<Help />} />
            <Route path="/recommender" element={<Recommender />} />
            <Route path="/explore" element={<ExploreRecommendations />} />
            <Route path="/view-all-recommenders" element={<Recommenders />} />

          </Routes>
          </main>
       
        <Footer />
       </Router>
      
    </div>
    </>
  );
}

export default App;
