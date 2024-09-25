/**
 * @jest-environment jsdom
 */

describe('Testes das funcionalidades atualizadas', () => {
  let calcBtn, num1, num2, calcResult;
  let rotinaBtn, rotinaInput;
  let addMateriaBtn, materiaInput, taskTable;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <input id="num1" type="number" placeholder="Número 1">
        <input id="num2" type="number" placeholder="Número 2">
        <button id="calc-btn">Calcular Soma</button>
        <div id="calc-result"></div>
      </div>
      <div>
        <textarea id="rotina-input" placeholder="Descreva sua rotina"></textarea>
        <button id="rotina-btn">Adicionar Rotina</button>
      </div>
      <div>
        <input id="materia-input" placeholder="Digite a matéria">
        <button id="add-materia-btn">Adicionar Matéria</button>
      </div>
      <table id="task-table" border="1">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Resultado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `;

    require('./app.js');

    calcBtn = document.getElementById('calc-btn');
    num1 = document.getElementById('num1');
    num2 = document.getElementById('num2');
    calcResult = document.getElementById('calc-result');
    rotinaBtn = document.getElementById('rotina-btn');
    rotinaInput = document.getElementById('rotina-input');
    addMateriaBtn = document.getElementById('add-materia-btn');
    materiaInput = document.getElementById('materia-input');
    taskTable = document.getElementById('task-table').getElementsByTagName('tbody')[0];
  });

  test('Deve realizar a soma de dois números e adicionar à tabela', () => {
    num1.value = 10;
    num2.value = 20;
    calcBtn.click();

    expect(calcResult.textContent).toBe('Resultado: 30');
    expect(taskTable.children.length).toBe(1);
    expect(taskTable.children[0].cells[0].textContent).toBe('Soma de 10 e 20');
    expect(taskTable.children[0].cells[1].textContent).toBe('Resultado: 30');
  });

  test('Deve adicionar a rotina diária na tabela', () => {
    rotinaInput.value = 'Planejar o sábado e domingo';
    rotinaBtn.click();

    expect(taskTable.children.length).toBe(1);
    expect(taskTable.children[0].cells[0].textContent).toBe('Rotina Diária');
    expect(taskTable.children[0].cells[1].textContent).toBe('Planejar o sábado e domingo');
  });

  test('Deve adicionar e remover matéria para estudar', () => {
    materiaInput.value = 'Matemática';
    addMateriaBtn.click();

    expect(taskTable.children.length).toBe(1);
    expect(taskTable.children[0].cells[0].textContent).toBe('Matéria para estudar');
    expect(taskTable.children[0].cells[1].textContent).toBe('Matemática');

    const deleteBtn = taskTable.querySelector('.delete-btn');
    deleteBtn.click();

    expect(taskTable.children.length).toBe(0);
  });
});
