import { RecoilRoot } from "recoil";
import styled from "styled-components";

import GlobalStyle from "$components/GlobalStyle";
import Input from "$components/Input";
import Output from "$components/Output";
import RootKeySelector from "$components/RootKeySelector";
import pxToRem from "$utils/pxToRem";
import { media } from "$utils/theme";

const Container = styled.div`
  padding: ${pxToRem(24)};
`;

const H1 = styled.h1`
  text-align: center;
`;

const InputOutputContainer = styled.div`
  @media only screen and (min-width: ${media.smallUp}) {
    display: flex;
    gap: ${pxToRem(24)};
  }
`;

const InputOutputWrapper = styled.div`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Container>
          <H1>Spell Chords</H1>
          <RootKeySelector />
          <InputOutputContainer>
            <InputOutputWrapper>
              <Input />
            </InputOutputWrapper>
            <InputOutputWrapper>
              <Output />
            </InputOutputWrapper>
          </InputOutputContainer>
        </Container>
      </RecoilRoot>
    </>
  );
};

export default App;
