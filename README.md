# PROJECT+

> Status: Desenvolvendo ⚠️

### Repositório voltado ao desenvolvimento do Gerenciador de Projetos de Softwares

## Passos para rodar a aplicação (Testador | Primeira experiência):

- Instale e configure o Docker Desktop (acessando [Docker](https://www.docker.com/products/docker-desktop/))
- Deixe o Docker aberto
- Entre na pasta que deseja colocar o projeto
- Dê um `git clone https://github.com/DaviBCSouza/ProjectPlus.git`
- Abra a pasta com o VSCode
- Aperte `Ctrl + J`
- Vá em `Terminal`
- Selecione o terminal `bash`
- Digite o seguinte comando `docker compose up`
- Aguarde o processo de instalação
- Agora tente testar as aplicações nas seguintes URLs:
  - BACKEND: `localhost:1100/api`
  - FRONTEND: `localhost:1200`

## Passos para rodar a aplicação isoladamente (Testador | Primeira experiência):

- Instale o Node (acessando [NodeJS](https://nodejs.org))
- Instale o VSCode (acessando [VSCode](https://code.visualstudio.com))
- Instale o Git (acessando [Git](https://git-scm.com))
- Entre na pasta que deseja colocar o projeto
- Dê um `git clone https://github.com/DaviBCSouza/ProjectPlus.git`
- Abra a pasta com o VSCode
- Aperte `Ctrl + J`
- Vá em `Terminal`
- Selecione o terminal `bash`
- Certifique-se de estar no seguinte caminho para rodar a aplicação backend: `C:/Users/'nome_usuario'/'pasta_escolhida'/projeto-gerenciamento-projetos/backend`
- (Hint se caso não estiver no diretório certo, use um `cd backend`)
- Dê o seguinte comando `npm run dev` para entrar no ambiente de desenvolvimento e `npm start` para entrar no ambiente de produção
- E para rodar a aplicação frontend: `C:/Users/'nome_usuario'/'pasta_escolhida'/projeto-gerenciamento-projetos/frontend`
- (Hint se caso não estiver no diretório certo, use um `cd frontend`)
- Use o comando `npm run dev` para subir

## Passos para criar uma branch para desenvolver (Desenvolvedor):

- Pre-requisitos - Git e VSCode
- Dê um `git clone https://github.com/DaviBCSouza/ProjectPlus.git`
- Em seguida entre na pasta clonada
- Abra Git ou o VSCode (se estiver no VSCode utilize o `Ctrl + J`)
- Dê um `git checkout -b "develop/'seu_nome'"`
- Code o necessário, depois que estiver satisfeito
- Utilize o `git add .`
- Em seguida `git commit -m "nome_do_commit"`
- Por fim `git push --set-upstream origin 'nome_da_branch_atual'`
- (Hint do passo acima: esse push você só deve dar uma vez, na próxima, se caso estiver na branch criada é so utiliza `git push`)

## [Prefixos dos Commits](https://github.com/JuniorLima22/padroes-e-nomenclaturas-no-git#prefixos-dos-commits)

Observe que os prefixos abaixo foram personalizados com base no artigo do link acima.

- :books: [DOCS]: apenas mudanças de documentação.
- :sparkles: [FEAT]: Adição de uma nova feature ao projeto, componente, etc.
- :lady_beetle: [FIX]: Correção de um bug.
- :zap: [PERF]: Melhoria de performance.
- :recycle: [REFACTOR]: Refatoração do código que não adiciona uma funcionalidade nem corrige um bug.
- :art: [STYLE]: Mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc).
- :test_tube: [TEST]: Adição ou correção de testes.
- :rocket: [IMPROVEMENT]: Melhoria em algo já existente, seja de performance, escrita, layout, etc.
- :floppy_disk: [PRISMA]: Alterações relacionadas ao Prisma, como mudanças no esquema ou nas migrações.
- :hammer_and_wrench: [DEVOPS]: Configuração ou mudanças relacionadas ao DevOps, como CI/CD, dockerização, scripts de deploy, etc.
- :hammer_and_pick: [MERGE]: Realizando merge de outras branches na main ou vice-versa.
