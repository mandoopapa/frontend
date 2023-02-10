import styled from "styled-components";
import { Connect } from './components/Connect'
import { SignMessage } from "./components/SignMessage";
import { WalletStatus } from "./components/WalletStatus";

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`

function App() {
  return (
    <StyledAppDiv>
      <Connect />
      <WalletStatus />
      <SignMessage />
    </StyledAppDiv>
  );
}

export default App;
