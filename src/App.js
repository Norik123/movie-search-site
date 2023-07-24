import { Route, Routes } from "react-router";
import "./App.css";
import AllUseStateProvider from "./context/AllUseStateProvider";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FilmCard from "./pages/FilmCard";

function App() {
  return (
    <div className="App">
      <AllUseStateProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<FilmCard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AllUseStateProvider>
    </div>
  );
}

export default App;
