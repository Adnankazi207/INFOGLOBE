
import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
// import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import SearchNews from "./components/SearchNews";
import Login from "./components/Login.";
import Register from "./components/Register";


function App() {
  
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:country" element={<CountryNews />} />
          <Route path="/search/:searchTerm" element={<SearchNews/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        {/* <Cards />  */}
        {/* <Footer />   */}
      </BrowserRouter>
    </div>
  );
}

export default App;