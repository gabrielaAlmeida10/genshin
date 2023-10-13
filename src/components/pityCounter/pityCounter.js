import React from "react";

import "./pityCounter.css";

const PityCounter = () => {
  return (
    <div className="pity-counter">
      <h2>Contador de Pity</h2>
      <div className="new-wish">
        <h3>Nova Oração:</h3>
        <form>
          <div>
            <label>Nome:</label>
            <input type="texto" />
          </div>
          <div>
            <label>Estrelas</label>
            <select required>
              <option value="3*">3*</option>
              <option value="4*">4*</option>
              <option value="5*">5*</option>
            </select>
          </div>
          <div>
            <label>Data:</label>
            <div>Data</div>
          </div>
          <div>
            <label>Banner:</label>
            <select required>
              <option value="arma">Arma</option>
              <option value="personagem">Personagem</option>
              <option value="comum">Comum</option>
            </select>
          </div>
        </form>
      </div>
      <div className="data-pity">
        <h3>Dados do Pity</h3>
        <div>Pity: 60</div>
        <div>Ultimo 5*:</div>
        <div>Prox 5* em: </div>
        <div>Ultimo 4*:</div>
        <div>Prox 4* em: </div>
      </div>
      <div className="history">
        <h3>Histórico de Orações:</h3>
        <table>
            <thead>
            <tr>
                <th>Nome</th>
                <th>Estrelas</th>
                <th>Banner</th>
                <th>Data</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tr>
            <tr>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tr>
            <tr>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
              <td>Exemplo</td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default PityCounter;
