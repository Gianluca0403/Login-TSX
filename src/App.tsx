import { useState } from "react";
import { PageContainer, Paragrafo, Title, Login } from "./Styles";
import { GlobalStyles } from "./GlobalStyles";
import { Input } from "./componets/Inputs/Index";
import { Button } from "./componets/Button/Index";
import { RememberButton } from "./componets/Checkbox/Index";
import { Chekbox } from "./componets/Checkbox/Index";

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
      <GlobalStyles />
      <Title>Log in</Title>

      <Login>
        <Input placeholder="Usuario"></Input>
        <Input placeholder="Senha"></Input>
      </Login>

      <Chekbox>
        <RememberButton />
        OI
      </Chekbox>

      <Button onClick={HandleClicks}>Login</Button>
      <Paragrafo>{`Houve ${cliques} Logins`}</Paragrafo>
    </PageContainer>
  );
}

export default App;
