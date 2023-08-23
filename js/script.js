const tabela = document.getElementById('tabela');
const cadastrarBtn = document.getElementById('cadastrarBtn');
let pessoas = [];
let idCount = 1;

function cadastro() {
  const pessoa = {
    id: idCount++,
    nome: document.getElementById('txtNome').value,
    telefone: document.getElementById('txtTel').value,
  }
  pessoas.push(pessoa);
  atualizarTb();
}
cadastrarBtn.addEventListener('click', cadastro);

function atualizarTb() {
  tabela.innerHTML = `
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Deletar</th>
      </tr>
    </thead>

    <tbody> 
    ${pessoas.map((pessoa) => {
      return `
              <tr>
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.telefone}</td>
                <td><button onClick='deletar(${pessoa.id})'>DELETAR</button></td>
              </tr>`}).join("")}
    </tbody> `;
}

function deletar(id) {
  pessoas = pessoas.filter(pessoa => pessoa.id != id)
  atualizarTb()
}

atualizarTb();