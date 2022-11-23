# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>

A finalidade do Plano de Teste é reunir todas as informações necessárias para planejar e controlar o esforço de teste referente a uma iteração específica. Ele descreve a abordagem dada ao teste do software e é o plano de nível superior gerado e usado para coordenar o esforço de teste.

OS requisitos para realização do testes são:
* Site hospedado no Heroku
* Compatibilidade com os navegadores de internet chrome e Edge
* Site responsivo para celulares com sistema operacional Android ou iOS

 
<h2>Casos de Testes</h2>
Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

<table border="0" id="CT01 - Pesquisa Trilha">
    <tr>
        <th>Caso de Teste</th>
        <th>CT-01 Pesquisa de Trilha</th>
    </tr>
    <tr>
        <td rowspan="2"><b>Requisitos Associados</b></td>
        <td>RF-001 O software deve mostrar as trilhas por ordem de dificuldade</td>
    </tr>
    <tr>
        <td>RF-009 O software deve recomendar trilhas para realização em grupo ou individual</td>
    </tr>
    <tr>
        <td><b>Objetivo do Teste</b></td>
        <td>Verificar se a barra de pesquisa busca trilhas conforme as escolhas realizadas pelo usuário</td>
    </tr>
    <tr>
        <td rowspan="6"><b>Passos</b></td>
        <td>1. Acessar o Navegador</td>
    </tr>
    <tr>
        <td>2. Informar o endereço do Site</td>
    </tr>
    <tr>
        <td>3. Visualizar a página principal</td>
    </tr>
    <tr>
        <td>4. Digitar a cidade desejada no campo "cidade"</td>
    </tr>
    <tr>
        <td>5. Selecionar a Dificuldade no campo "dificuldade"</td>
    </tr>
    <tr>
        <td>6. Selecionar a Data no campo "data"</td>
    </tr>
    <tr>
        <td><b>Critério de Êxito</b></td>
        <td>Os resultados exibidos após a busca do usuário, devem considerar a cidade, o grau de dificuldade e a data escolhida pelo usuário no momento da pesquisa. Deve ser exibida todas as trilhas cadastradas no sistema, que atendam aos critérios definidos pelo usuário em sua pesquisa</td>
    </tr>
    </table>
<br>

<table border="0" id="CT02 - Exibir detalhe da trilha">
    <tr>
        <th>Caso de Teste</th>
        <th>CT-02 Exibir detalhe da trilha</th>
    </tr>
    <tr>
        <td rowspan="3"><b>Requisitos Associados</b></td>
        <td>RF-004 O software deve mostrar o mapa/rota da trilha</td>
    </tr>
    <tr>
        <td>FR-005 O software deve mostrar a previsão do tempo dia/hora, para que o usuário saiba se e possível realizar a trilha</td>
    </tr>
    <tr>
        <td>RF-006 O software deve ter um fórum para que os ciclistas possam interagir com outros ciclistas</td>
    </tr>
    <tr>
        <td><b>Objetivo do Teste</b></td>
        <td>Validar se a página da trilha escolhida, exibi todas as informações cadastradas</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Passos</b></td>
        <td>1. Visualizar a página principal</td>
    </tr>
    <tr>
        <td>2. Escolhar uma das trilhas exibidas pelo sistema ou pesquisada pelo usuário</td>
    </tr>
    <tr>
        <td>3. Visualizar a página de detalhe da trilha escolhida.</td>
    </tr>
    <tr>
        <td>4. Visualizar informações relacionadas a altimetria, dificuldade, fotos, indicação de uma trilha ideal para um grupo ou individual, previsão do tempo para data escolhida</td>
    </tr>
    <tr>
        <td><b>Critério de Êxito</b></td>
        <td>Página de detalhamento da trilha escolhida pelo usuário deve apresentar todas as informações de detalhamento cadastradas para a trilha</td>
    </tr>
    </table>
<br>

<table border="0" id="CT03 - Cadastro de Trilha">
    <tr>
        <th>Caso de Teste</th>
        <th>CT-03 Cadastro de Trilhas</th>
    </tr>
    <tr>
        <td rowspan="2"><b>Requisitos Associados</b></td>
        <td>RF-002 O software deve permitir que o usuário cadastre novas trilhas</td>
    </tr>
    <tr>
        <td>RF-013 Usuário poderá enviar fotos de suas trilhas realizadas com comentários para elas</td>
    </tr>
    <tr>
        <td><b>Objetivo do Teste</b></td>
        <td>Verificar se é possível que um usuário possa cadastrar uma nova trilha</td>
    </tr>
    <tr>
        <td rowspan="9"><b>Passos</b></td>
        <td>1. Acessar o Navegador</td>
    </tr>
    <tr>
        <td>2. Informar o endereço do Site</td>
    </tr>
    <tr>
        <td>3. Visualizar a página principal</td>
    </tr>
    <tr>
        <td>4. Realizar seu login</td>
    </tr>
    <tr>
        <td>5. Selecionar a opção "cadastrar nova trilha"</td>
    </tr>
    <tr>
        <td>6. Cadastrar informações para uma nova trilha</td>
    </tr>
    <tr>
        <td>7. Carregar uma foto da trilha durante o cadastro</td>
    </tr>
    <tr>
        <td>8. Salvar informações da trilha após o cadastro</td>
    </tr>
    <tr>
        <td>9. Enviar informações da trilha após o cadastro</td>
    </tr>
    <tr>
        <td><b>Critério de Êxito</b></td>
        <td>Ser possível que um usuário logado, posso cadastrar um nova trilha quando desejado, podendo enviar uma foto, se desejado for</td>
    </tr>
    </table>
<br>

<table border="0" id="CT04 - Trilhas Recomendadas ">
    <tr>
        <th>Caso de Teste</th>
        <th>CT-04 Trilhas Recomendadas</th>
    </tr>
    <tr>
        <td rowspan="2"><b>Requisitos Associados</b></td>
        <td>RF-003 O software deve ter uma funcionalidade de indicações de trilhas</td>
    </tr>
    <tr>
        <td>RF-008 O software deve poder mostrar as trilhas mais próximas da localização atual do usuário</td>
    </tr>
    <tr>
        <td><b>Objetivo do Teste</b></td>
        <td>Validar se o sistema está indicado trilhas ao usuário</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Passos</b></td>
        <td>1. Acessar o Navegador</td>
    </tr>
    <tr>
        <td>2. Informar o endereço do Site</td>
    </tr>
    <tr>
        <td>3. Visualizar a página principal</td>
    </tr>
    <tr>
        <td>4. Visualizar recomendações de trilhas na página</td>
    </tr>
    <tr>
        <td><b>Critério de Êxito</b></td>
        <td>Sistema deve indicar trilhas para o usuário em sua página principal</td>
    </tr>
    </table>
<br>

<table border="0" id="CT05 - ">
    <tr>
        <th>Caso de Teste</th>
        <th>CT-05</th>
    </tr>
    <tr>
        <td><b>Requisitos Associados</b></td>
        <td></td>
    </tr>
    <tr>
        <td><b>Objetivo do Teste</b></td>
        <td> </td>
    </tr>
    <tr>
        <td><b>Passos</b></td>
        <td> </td>
    </tr>
    <tr>
        <td><b>Critério de Êxito</b></td>
        <td> </td>
    </tr>
    </table>
<br>



