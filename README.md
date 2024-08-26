<h1 align="center">Estacionamento Project JS 👨🏽‍💻</h1><br>

💻Link Projeto: https://vetormelo.github.io/estacionamento_project_ts/



<h2>🎯 Sobre o Projeto</h2>
<p>Este projeto é um sistema de controle de estacionamento desenvolvido em TypeScript, que utiliza a API do DOM para manipulação de elementos na página e o armazenamento local (localStorage) para persistência dos dados. O objetivo é gerenciar o fluxo de veículos em um estacionamento, registrando a entrada e saída dos carros, calculando o tempo de permanência e o valor a ser pago de forma proporcional ao tempo estacionado.</p>

<h2>🛠 Tecnologias Utilizadas</h2>
<p></p>

<h2></h2>
<h3>TYPESCRIPT</h3>
<p>Escolhi TypeScript para este projeto por causa dos benefícios que ele oferece em termos de tipagem estática, que ajuda a evitar erros comuns de tempo de execução, oferecendo também uma melhor documentação do código através de tipos explícitos. Isso é especialmente útil em projetos em equipe, onde a clareza e a manutenção do código são cruciais.</p>

<H3>Estrutura e Organização do Código</H3>
<p>O código está envolvido em uma IIFE para evitar a poluição do escopo global e garantir que todas as variáveis e funções definidas dentro dela sejam encapsuladas. Isso melhora a segurança e a integridade do código, prevenindo conflitos com outras partes do código ou bibliotecas externas.</p>

<dl>
  <dt>Funções Modulares e Reutilizáveis:
    <dd>O código é organizado em funções pequenas e específicas, cada uma realizando uma tarefa claramente definida:
convertPeriod: Converte um período em milissegundos para uma string legível de minutos e segundos.
calculatePayment: Calcula o valor a ser pago com base no tempo de permanência, considerando um valor de R$8,00 por hora de estacionamento.
renderGarage: Atualiza a interface do usuário com os carros atualmente estacionados.
addCarToGarage: Adiciona um carro à interface, criando elementos de tabela dinamicamente.
checkOut: Calcula o tempo e o valor a ser pago ao retirar um carro, confirmando a operação com o usuário.
getGarage: Recupera os dados de carros do armazenamento local.</dd>
  </dt><br>
  
  <dt>Otimização e Performance:
    <dd>O código minimiza operações de manipulação do DOM, que são relativamente custosas em termos de desempenho. Ao construir elementos de tabela em um fragmento HTML e, em seguida, adicionar à árvore DOM uma vez por função, o número de re-renderizações é reduzido, otimizando a performance da aplicação.</dd>
  </dt><br>

  <dt>Uso de localStorage para Persistência de Dados:
    <dd>O uso do localStorage permite que os dados dos carros estacionados sejam persistidos entre as sessões de usuário, fornecendo uma experiência contínua e conveniente. Isso é uma solução simples e eficiente para persistência de dados em uma aplicação web.</dd>
  </dt><br>

  <dt>Interatividade e Manipulação de Eventos:
    <dd>A aplicação utiliza manipuladores de eventos para responder a ações do usuário, como clicar nos botões para adicionar ou remover carros. Essa abordagem orientada a eventos torna a interface do usuário dinâmica e responsiva, melhorando a experiência do usuário.</dd>
  </dt><br>

  <dt>
    <dd></dd>
  </dt>
</dl>

<h3>Considerações sobre Boas Práticas de Desenvolvimento</h3>

<ul>
  <li>Encapsulamento e Escopo Controlado: O uso de IIFE ajuda a manter o escopo limpo e encapsula as funções e variáveis, prevenindo conflitos e melhorando a segurança do código.</li>
  <li>Claridade e Manutenção: Tipagem estática com TypeScript e funções bem nomeadas melhoram a clareza do código e facilitam a manutenção e a colaboração em equipe.</li>
  <li>Feedback ao Usuário: O uso de confirm e alert proporciona um feedback claro ao usuário, essencial para uma boa experiência de usuário em um sistema interativo.</li>
  <li>Cálculo Proporcional: O cálculo do valor de estacionamento é feito de forma proporcional ao tempo de permanência, demonstrando uma preocupação com a precisão e justiça no cálculo de cobranças.</li>
  <li>Prevenção de Erros: O código faz uso de verificações de nulos e condições para evitar erros comuns, como tentativas de acessar propriedades de elementos null ou indefinidos.</li>
</ul>

<h2 align="center">Conclusão</h2>

<p>Este projeto exemplifica uma abordagem organizada e otimizada para o desenvolvimento de uma aplicação web de controle de estacionamento, utilizando TypeScript para melhorar a robustez e a legibilidade do código. A aplicação é eficiente em termos de desempenho e oferece uma experiência de usuário intuitiva e responsiva, mantendo uma estrutura modular que facilita a expansão e a manutenção futuras.</p>

![estacionamento_project](https://github.com/user-attachments/assets/6b249d70-93fc-4e35-8029-13155d726c9e)
