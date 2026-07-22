import { useState } from "react";
import { Button, PageContainer, Paragrafo, Title } from "./componets/Styles";
import { GlobalStyles } from "./GlobalStyles";

interface User {
  name: string;
  age: number;
}

function App() {
  const [cliques, setCliques] = useState<number>(0);
  const [user, setUser] = useState<User>({
    name: "Gian",
    age: 19,
  });

  function HandleClicks() {
    return setCliques(cliques + 1);
  }

  return (
    <PageContainer>
      <GlobalStyles/>
      <Title>Gian</Title>
      <Button onClick={HandleClicks}>Cliques</Button>
      <Paragrafo>{`Houve ${cliques} cliques`}</Paragrafo>
    </PageContainer>
  );
}

export default App;
