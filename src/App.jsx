import styled from "styled-components";
import { Grid } from "@mui/material";
import ProgressBar from "./components/progress-bar/ProgressBar";
function App() {
  return (
    <PageStyled>
      <Grid>
        <ProgressBar />
      </Grid>
    </PageStyled>
  );
}

const PageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgrey;
`;

export default App;
