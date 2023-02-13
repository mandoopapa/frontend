import styled from "styled-components";
import Layout from "./components/Layout/Layout";

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`

function App() {
  return (
    <StyledAppDiv>
      <Layout />
    </StyledAppDiv>
  );
}

export default App;
