- SuperBook - Front-end

Este repositório contém o front-end do SuperBook, uma aplicação web desenvolvida utilizando Next.js, React e TypeScript. O projeto tem como objetivo oferecer uma interface simples para que os usuários possam acessar o sistema por meio de login ou criar uma nova conta através da página de cadastro. O front-end também é responsável pela comunicação com o back-end, enviando as informações preenchidas pelo usuário e recebendo as respostas da API.

- Tecnologias utilizadas

O projeto foi desenvolvido utilizando principalmente Next.js 16, React 19 e TypeScript. Para realizar parte da comunicação com o back-end é utilizada a biblioteca Axios. O projeto também possui Tailwind CSS, PostCSS e ESLint configurados, além de utilizar CSS para definir a aparência das páginas.

As principais tecnologias utilizadas são Next.js, React, TypeScript, Axios, CSS, Tailwind CSS, ESLint e PostCSS.

- Estrutura do projeto

O projeto segue a estrutura do App Router do Next.js. Dentro da pasta "src/app" estão as páginas principais da aplicação. O arquivo "page.tsx" representa a página inicial, enquanto a pasta "register" contém a página responsável pelo cadastro de novos usuários. O arquivo "layout.tsx" define a estrutura principal utilizada pelas páginas e o "globals.css" concentra grande parte da estilização geral da aplicação.

A pasta "src/http" possui o arquivo responsável pela configuração da comunicação com a API. Já a pasta "public" é utilizada para armazenar arquivos estáticos, principalmente imagens utilizadas pela interface.

A estrutura principal do projeto é:

superbook-front/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   └── http/
│       └── api.ts
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md

- Página de Login

A página inicial do SuperBook está localizada no arquivo "src/app/page.tsx" e pode ser acessada pela rota "/". Essa é a primeira tela apresentada quando o usuário entra no sistema.

A tela possui os campos de e-mail e senha, além do botão responsável por realizar o login. Também existe um link que direciona o usuário para a página de cadastro caso ele ainda não tenha uma conta.

Quando o formulário é enviado, a função responsável pelo login pega o e-mail e a senha informados pelo usuário e envia esses dados para o back-end. Atualmente, a requisição de login utiliza o endereço "http://localhost:3001/auth/login".

Após o envio, o front-end aguarda a resposta do servidor. Caso os dados estejam corretos, a aplicação informa que o login foi realizado. Caso o e-mail ou a senha estejam incorretos, uma mensagem de erro é apresentada. Também existe um tratamento para situações em que o front-end não consegue se comunicar com o servidor.

- Página de Cadastro

A página de cadastro está localizada em "src/app/register/page.tsx" e pode ser acessada pela rota "/register". Essa página é utilizada para permitir que novos usuários criem uma conta no SuperBook.

O formulário solicita o nome, o e-mail e a senha do usuário. Depois de preencher essas informações e enviar o formulário, os dados são encaminhados ao back-end através da rota "/auth/register".

Diferentemente da página de login, a tela de cadastro utiliza uma instância do Axios já configurada no projeto. Essa configuração permite que o endereço principal da API seja definido em apenas um lugar, deixando o código mais organizado.

Caso o cadastro seja realizado corretamente, o usuário recebe uma mensagem confirmando a criação da conta. Caso ocorra algum problema durante o processo, uma mensagem de erro é apresentada.

- Navegação entre as páginas

A navegação entre login e cadastro é feita através do componente "Link" do Next.js. Na página inicial, o usuário que ainda não possui uma conta pode acessar a rota "/register". Já na página de cadastro, existe uma opção para retornar à página de login através da rota "/".

Isso permite que a navegação entre as duas telas aconteça diretamente dentro da aplicação, sem a necessidade de digitar manualmente os endereços no navegador.

- Comunicação com o Back-end

A comunicação com o back-end é uma das principais partes do projeto, já que as informações de login e cadastro precisam ser enviadas para o servidor.

O arquivo "src/http/api.ts" contém a configuração do Axios. Nele, o endereço principal da API é obtido através da variável de ambiente "NEXT_PUBLIC_API_URL".

Para configurar essa variável, é necessário criar um arquivo chamado ".env.local" na raiz do projeto e adicionar:

"NEXT_PUBLIC_API_URL=http://localhost:3001"

Com isso, as requisições que utilizam o Axios passam a utilizar esse endereço como base.

Atualmente existe uma diferença entre a implementação de login e cadastro. O cadastro utiliza a configuração centralizada do Axios, enquanto o login possui o endereço "http://localhost:3001" diretamente no código. Uma melhoria futura seria utilizar a mesma configuração para as duas páginas, tornando o projeto mais padronizado e facilitando alterações futuras no endereço do servidor.

- Estilização

A maior parte da estilização está localizada no arquivo "src/app/globals.css". A interface possui um estilo escuro, utilizando principalmente tons de azul e roxo.

Esse arquivo controla elementos como o fundo das páginas, campos de texto, botões, títulos, links, posicionamento dos formulários e efeitos de interação. O projeto também possui Tailwind CSS instalado, porém grande parte da estilização atual ainda está concentrada no CSS global.

- Layout da aplicação

O arquivo "src/app/layout.tsx" representa o layout principal do projeto. Ele é utilizado pelo Next.js para criar uma estrutura comum entre todas as páginas da aplicação.

Esse arquivo envolve o conteúdo de cada rota e também é responsável por configurações gerais, como as fontes utilizadas no projeto. Atualmente são utilizadas as fontes Geist e Geist Mono.

Quando o usuário acessa a rota "/", o conteúdo da página de login é carregado dentro desse layout. Quando acessa "/register", o conteúdo da página de cadastro passa a ser exibido utilizando a mesma estrutura principal.

- Como executar o projeto

Para executar o projeto localmente, é necessário possuir Node.js, npm e Git instalados no computador.

Primeiro, clone o repositório utilizando o comando:

"git clone https://github.com/Nickss09/superbook-front.git"

Depois entre na pasta do projeto utilizando "cd superbook-front".

Em seguida, instale as dependências com o comando:

"npm install"

Depois disso, crie o arquivo ".env.local" na raiz do projeto e configure o endereço do back-end:

"NEXT_PUBLIC_API_URL=http://localhost:3001"

O back-end também precisa estar em execução para que as funcionalidades de login e cadastro funcionem corretamente. Na configuração atual, o front-end espera encontrar a API na porta "3001".

Depois de finalizar a configuração, inicie o front-end com:

"npm run dev"

A aplicação ficará disponível normalmente no endereço "http://localhost:3000".

- Rotas disponíveis

Atualmente o projeto possui duas rotas principais. A rota "/" corresponde à página de login e a rota "/register" corresponde à página de cadastro.

O front-end utiliza principalmente duas rotas da API: "/auth/login", responsável por autenticar um usuário, e "/auth/register", responsável por criar uma nova conta.

- Scripts disponíveis

O comando "npm run dev" inicia o projeto em modo de desenvolvimento. O comando "npm run build" gera uma versão otimizada da aplicação para produção. Depois do build, o projeto pode ser iniciado utilizando "npm start". O comando "npm run lint" pode ser utilizado para analisar o código e encontrar possíveis problemas de organização ou padrões incorretos.

- Arquivos de configuração

O arquivo "package.json" contém as dependências e os scripts disponíveis no projeto. O arquivo "tsconfig.json" possui as configurações relacionadas ao TypeScript. O "next.config.ts" é responsável pelas configurações do Next.js e o "postcss.config.mjs" contém configurações utilizadas pelo PostCSS e Tailwind CSS.

Esses arquivos fazem parte da configuração principal do projeto e normalmente não precisam ser alterados durante o uso básico da aplicação.

- Arquivos estáticos

A pasta "public" é utilizada para armazenar imagens e outros arquivos estáticos utilizados pelo front-end.

Atualmente existem referências diferentes para o nome do arquivo da logo em algumas partes do projeto. Uma página utiliza uma referência semelhante a "/Logo.png.png", enquanto outra utiliza "/logo.png". Uma melhoria importante seria padronizar esse nome para evitar problemas, principalmente em ambientes que diferenciam letras maiúsculas e minúsculas.

- Fluxo da aplicação

Ao entrar no SuperBook, o usuário inicialmente encontra a tela de login. Nela, é possível informar o e-mail e a senha e enviar esses dados para o back-end. O servidor verifica as informações e retorna uma resposta para o front-end, que informa se o login foi realizado ou se ocorreu algum erro.

Caso o usuário ainda não possua uma conta, ele pode acessar a página de cadastro. Nessa página são solicitados nome, e-mail e senha. Essas informações são enviadas ao servidor, que realiza o cadastro e retorna o resultado para a interface.

Dessa forma, o front-end funciona como uma ligação entre o usuário e o back-end, sendo responsável por receber as informações digitadas, enviá-las para a API e apresentar ao usuário o resultado das operações.

- Melhorias futuras

O projeto ainda está em desenvolvimento e pode receber diversas melhorias. Entre elas estão a padronização das requisições utilizando Axios, melhoria na validação dos formulários, mensagens de erro mais detalhadas, indicadores de carregamento, redirecionamento automático após login ou cadastro, implementação de autenticação através de token e criação das futuras páginas internas do SuperBook.

Também é possível melhorar a organização do projeto criando componentes reutilizáveis para elementos que aparecem em mais de uma página, além de aprimorar a responsividade e padronizar os nomes dos arquivos.

 - Resumo

O SuperBook Front-end representa a parte visual e interativa da aplicação. Atualmente ele possui uma tela de login, uma tela de cadastro, navegação entre essas páginas e integração com o back-end.

O projeto utiliza Next.js, React e TypeScript como tecnologias principais e já possui uma estrutura preparada para continuar crescendo. Conforme novas funcionalidades forem desenvolvidas, novas páginas e componentes poderão ser adicionados mantendo a estrutura atual do projeto.
