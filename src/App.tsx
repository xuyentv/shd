import "./App.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import SubMainSection from "./components/SubMainSection/SubMainSection";
function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <MainSection />
        <SubMainSection />
      </div>
    </div>
  );
}

export default App;
