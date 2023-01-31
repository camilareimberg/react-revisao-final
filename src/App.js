import GlobalState from "./GlobalState/GlobalSate";
import Router from "./Router/Router";
import "./styles.css";

export default function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

//orderm de como codamos:
// Primeiro criamos as rotas e chamamos no app
//pagamos um template no site chakra https://chakra-templates.dev/forms/authentication
//fomos no site https://unsplash.com/pt-br/s/fotografias/receip e procuramos uma imagem aleatória. Baixamos gratuitamente e fizemos uma pasta assets e arrastamos a imagem dentro
//no SignupFormm chamamos a imagem embaixo como receita e importamos
//colocamos mais um input no chakra que pegamos para acrescentar o nome
//criamos o estado global para criar as requisições
