import Cartao from "../Componentes/Cartao";
import Formulario from "../Componentes/Formulario";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import { useState } from "react";

function PaginaDoCartao() {
  //declare os estados aqui
  const [pagamento, setPagamento] = useState("");
  const [nome, setNome] = useState("");
  const [numeroDoCartao, setNumeroDoCartao] = useState("");
  const [dataDeValidade, setdataDeValidade] = useState("");
  const [cvc, setCvc] = useState("");

  //declare as funções de controle de inputs aqui
  const formaDePagamento = (e) => {
    setPagamento(e.target.value);
  };

  const alterarNome = (e) => {
    setNome(e.target.value);
  };

  const alterarNumero = (e) => {
    setNumeroDoCartao(e.target.value);
  };

  const alterarDataDeValidade = (e) => {
    setdataDeValidade(e.target.value);
  };

  const alterarCvc = (e) => {
    setCvc(e.target.value);
  };

  const submeterFormulario = (e) => {
    e.preventDefault();
    setPagamento("");
    setNome("");
    setNumeroDoCartao("");
    setdataDeValidade("");
    setCvc("");
    alert("Seu cartão foi cadastrado com sucesso!");
  };

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={numeroDoCartao}
        nome={nome}
        cvc={cvc}
        validade={dataDeValidade}
      />

      <Formulario
        formaDePagamento={pagamento}
        nomeDoCartao={nome}
        numeroDoCartao={numeroDoCartao}
        dataDeValidade={dataDeValidade}
        cvc={cvc}
        funcaoPagamento={formaDePagamento}
        funcaoNome={alterarNome}
        funcaoNumero={alterarNumero}
        funcaoValidade={alterarDataDeValidade}
        funcaoCvc={alterarCvc}
        submeterFormulario={submeterFormulario}
      />

      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
