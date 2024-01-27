import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Container from "@mui/material/Container";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation></SimpleBottomNavigation>
    </BrowserRouter>
  );
}

export default App;
