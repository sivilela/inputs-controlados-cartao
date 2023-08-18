//declare todo o componente formulário e seus inputs. Exporte o formulário.

import React from "react";

const Formulario = ({
  formaDePagamento,
  nomeDoCartao,
  numeroDoCartao,
  dataDeValidade,
  cvc,
  funcaoPagamento,
  funcaoNome,
  funcaoNumero,
  funcaoValidade,
  funcaoCvc,
  submeterFormulario
}) => {
  return (
    <form>
      <select value={formaDePagamento} onChange={funcaoPagamento}>
        <option>Selecione</option>
        <option>Crédito</option>
        <option>Débito</option>
      </select>
      <br />
      <label>
        Nome:
        <input
          type="text"
          value={nomeDoCartao}
          onChange={funcaoNome}
          placeholder="Nome"
        />
      </label>
      <br />
      <label>
        Numero do cartão:
        <input
          type="number"
          value={numeroDoCartao}
          onChange={funcaoNumero}
          placeholder="Numero do cartão"
        />
      </label>
      <br />
      <label>
        Validade do Cartão:
        <input
          type="date"
          value={dataDeValidade}
          onChange={funcaoValidade}
          placeholder="Validade do cartão"
        />
      </label>
      <br />
      <label>
        CVC:
        <input value={cvc} onChange={funcaoCvc} placeholder="CVC" />
      </label>
      <br />
      <button onClick={submeterFormulario}>Cadastrar Cartão</button>
    </form>
  );
};

export default Formulario;
