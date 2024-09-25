// Função para adicionar uma tarefa à tabela
function adicionarTarefa(tarefa, resultado = '') {
  const tabelaTarefas = document.getElementById('task-table');
  const row = tabelaTarefas.insertRow();

  const cellTarefa = row.insertCell(0);
  const cellResultado = row.insertCell(1);
  const cellDelete = row.insertCell(2);

  cellTarefa.textContent = tarefa;
  cellResultado.textContent = resultado;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Excluir';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    tabelaTarefas.deleteRow(row.rowIndex);
  });

  cellDelete.appendChild(deleteBtn);
}

// Função para calcular dois números
function calcularSoma() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultado = num1 + num2;
  document.getElementById('calc-result').textContent = `Resultado: ${resultado}`;
  adicionarTarefa(`Soma de ${num1} e ${num2}`, `Resultado: ${resultado}`);
}

// Função para adicionar a rotina diária
function rotinaDiaria() {
  const rotina = document.getElementById('rotina-input').value;
  adicionarTarefa('Rotina Diária', rotina);
}

// Função para adicionar e remover matérias para estudar
function adicionarMateria() {
  const materiaInput = document.getElementById('materia-input');
  if (materiaInput.value.trim() === '') {
    return;
  }
  adicionarTarefa(`Matéria para estudar`, materiaInput.value);
  materiaInput.value = '';
}

// Configurações de eventos para os botões
document.addEventListener('DOMContentLoaded', () => {
  // Botão para calcular a soma dos números
  document.getElementById('calc-btn').addEventListener('click', calcularSoma);

  // Botão para adicionar rotina diária
  document.getElementById('rotina-btn').addEventListener('click', rotinaDiaria);

  // Botão para adicionar matéria de estudo
  document.getElementById('add-materia-btn').addEventListener('click', adicionarMateria);
});
