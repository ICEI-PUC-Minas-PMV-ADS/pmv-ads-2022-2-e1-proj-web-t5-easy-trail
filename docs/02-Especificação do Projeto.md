# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A melhor forma de entender validar realmente as dificuldades que os praticantes do ciclismo têm na busca por trilhas e ouvi-los. Desta forma, confeccionamos um formulário extremamente objetivo, visando entender, na visão de vários ciclistas, quais são as dores principais podendo relacioná-los em personas e suas histórias, desta forma, o trabalho de atendimento das expectativas destes stakeholders será mais assertivo.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

* `Carlos Soares` tem 42 anos, pratica o ciclismo a 4 anos é um ciclista com boa experiência. Prefere realizar trilhas em ambientes rurais, mas afastados da cidade vista que, adora a sensação de liberdade que o esporte o proporciona além de todos os desafios que o são impostos. Carlos é um amante do ciclismo que tem grande dificuldade em pedais que são realizados em dia de sol muito forte, sua resistência diminui consideravelmente.O carlo preza pela segurança e tem dificuldades de conseguir amigos para pedalar.

* `Amélia Maria`tem 26 anos, está a pouco tempo no ciclimo cerca de 1 ano. Teve como grande motivação os benefícios gerados pelo escopo, além da possibilidade de conhecer novos lugare através de passeios com amigos. Como está iniciando, tem grande dificuldade em subidas e em acompanhar os outros em face do seu condicionamento físico.

* `Osvaldo Rodrigues` tem 60 anos, é um ciclismo experiente que preza pela execução de uma atividade física, de manter seu corpo em movimento, gosta mais das trilhas urbanas em face destas, apresentarem menores riscos do que as trilhas rurais. Ele não tem em seu ciclo de amizade, vários ciclistas que possam acompanha-ló, sendo este, um grande problema que enfrenta para realização de suas trilhas.

* `Rodolfo Nogueira` é o mascote das nossas personas, ele tem 15 anos é está iniciando a prática do ciclismo como sua rotina de exercícios. Como a Amélia, gosta mais de trilhas urbanas e vê na sensação de liberdade, de conhecer novos lugares seu maior estímulo para realizar suas trilhas. Como é novo no esporte, tem dificuldade em achar boas trilhas direcionadas a seu perfil e quem tenham segurança.

* `Augusto Ferreira` tem 40 anos, é o ciclista mais experiente das personas que mapeamos, tem 20 anos de ciclismo e foi um dos motivadores da Easy Trail, pois, em suas várias trilhas realizadas, identificou que existinha pouca ou nenhuma informação de trilhas para os ciclistas, sejam novatos ou experientes. Ele foi levado ao ciclismo pela senção de liberdade, adora pedalar na zona rural, gosta do contato com a natureza, mas como o Carlos, odeia o sol quente.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Ciclista | Informações sobre locais com sinal de celular durante o percurso da trilha  | Obter um melhor aproveitamento da trilha sozinho ou em grupo|
| Ciclista | Indicativo de pontos de apoio para ciclistas | Saber onde encontrar ajuda em caso de algum imprevisto |
| Ciclista | Grau de dificuldade de trilhas rurais em relação a subidas, descidas, tipo do terreno | Ter conhecimento prévio sobre o grau de dificuldade de uma trilha |
| Ciclista | Informações seguras para encontrar trilhas adequadas ao seu perfil iniciante | Melhorar sua saúde e condição física|
| Ciclista | Conhecer várias localidades situadas no entorno da cidade | Desfrutar de bons passeios com amigos |
| Ciclista | Informações sobre percursos percorridos, locais visitados em um mapa de desenvolvimento | Saber quais percursos já foram percorridos e o quanto já evolui nas trilhas expostas no sistema |
| Ciclista | Obter informações sobre programação de passeios por grupos de ciclismos| Ter companhia na realização de seus pedais |
| Ciclista | Conhecer outros ciclistas com perfil similar | Compartilhar experiências e conhecer outras realidades|
| Ciclista | Dicas de cuidado e prevenção de lesões decorrentes do esporte | Cuidar da saúde do corpo e da mente|
| Ciclista | Informações sobre a distância total (Quilometragem) das trilhas | Saber se consegue finalizar o percurso
| Ciclista | Fotos dos locais que vai ver durante o percurso | Se sentir motivado a iniciar a trilha|
| Administrador | Informações sobre a quantidade de pessoas que normalmente frequentam os locais | Saber se deve ir acompanhado de algum responsável|
| Administrador | Obter informações sobre quantidade de acessos ao site| Saber alcance do site para decidir sobre investimento em divulgação|
| Administrador | Obter informações sobre idade e perfil dos usuários| Desenvolver conteúdos adequados para os usuários do site|
| Administrador | Obter feedbacks dos usuários referentes as informações disponíveis na plataforma| Para entender necessidade de revisar informações disponíveis na plataforma |

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O software deve mostrar as trilhas por ordem de dificuldade | ALTA |
|RF-002| O software deve permitir que o usuário cadastre novas trilhas | MÉDIA |
|RF-003| O software deve ter uma funcionalidade de indicações de trilhas | ALTA |
|RF-004| O software deve mostrar o mapa/rota da trilha | ALTA |
|RF-005| O software deve mostrar a previsão do tempo dia/hora, para que o usuário saiba se e possível realizar a trilha | ALTA |
|RF-006| O software deve ter um fórum para que os ciclistas possam interagir com outros ciclistas | MÉDIA |
|RF-007| O software deve mostrar uma frase motivacional após a "PRESENÇA" marcada em uma trilha| MÉDIA |
|RF-008| O software deve poder mostrar as trilhas mais próximas da localização atual do usuário| BAIXA |
|RF-009| O software deve recomendar trilhas para realização em grupo ou individual| BAIXA |
|RF-010| Sistema deverá listar os usuários cadastrados conforme: idade, tempo no ciclismo, preferência de trilhas| BAIXA |
|RF-011| Sistema deverá fornecer relatórios sobre dados de acesso, idade, perfil e feedback dos usuários| MÉDIA |
|RF-012| Sistema deverá indicar cuidados e prevenções necessárias para a realização da trilha escolhida pelo usuário| MÉDIA |
|RF-013| Usuário poderá enviar fotos de suas trilhas realizadas com comentários para elas | BAIXA |
|RF-014| Para mostrar uma frase motivacional deve ser necessário que o usuário marque presença dentro de uma trilha| MÉDIA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID       | Descrição do Requisito  |Prioridade |
|---------|-------------------------|----|
| RNF-01 | O sistema deverá funcionar em ambiente WEB e deverá rodar nos navegadores com suporte para HTML5 e CSS3. | ALTA |
| RNF-02 | O sistema deve ser responsivo, ou seja, deve se adaptar aos diferentes tipos de tela e janelas.| ALTA |
| RNF-03 | O sistema será desenvolvido com as linguagens HTML, CSS e JavaScript.| ALTA |
| RNF-04 | O sistema deverá seguir as normas estabelecidas pela Legislação de privacidade do usuário.| ALTA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022. |
|02| O site deve utilizar às tecnologias HTML, CSS e JavaScript, para construção do Front-end. da aplicação. |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho. |
|04| O projeto deverá ser feito por todos os membros da equipe do projeto. |
|05| Os códigos do site deverão ser postados no GitHub. |
