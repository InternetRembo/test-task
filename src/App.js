import './App.css';
import styled from "styled-components";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
  background-color: #e5e1ee;

`

function App() {
  return (
      <AppWrapper>
          <Header/>
          <MainContent/>
      </AppWrapper>
  )
}

export default App;
