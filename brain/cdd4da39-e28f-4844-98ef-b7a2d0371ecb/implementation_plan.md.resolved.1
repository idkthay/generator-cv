# Autenticação e Persistência de Dados

Para permitir que múltiplas pessoas criem contas, façam login e tenham seus currículos guardados de forma privada (salvos entre diferentes acessos), implementaremos um sistema de "Autenticação Falsa" e um banco de dados local.

## User Review Required

> [!IMPORTANT]
> Sem um servidor (backend), faremos com que a aplicação utilize o armazenamento interno do navegador (`localStorage`) como se fosse um banco de dados real. Isso siginifica que a conta fica vinculada ao navegador em que foi criada.
> 
> As decisões técnicas propostas são:
> - **Roteamento:** Instalar a biblioteca `react-router-dom` para podermos navegar entre as páginas de `Login`, `Cadastro` e o `Gerador/Dashboard`.
> - **Persistência Local (Mock DB):** Criaremos funções simulando chamadas de backend que irão buscar, criar usuários e atualizar diretamente o pacote de informações (ResumeData) daquele usuário após qualquer alteração no currículo.
> - **Estética das Novas Páginas:** O Login e o Cadastro manterão o visual "premium" estabelecido através de nossa estrutura de "Glassmorphism", exibindo um painel minimalista e profissional no centro da tela. 

Você concorda com essa arquitetura e a utilização do armazenamento local para simular a base de dados de contas?

## Proposed Changes

---

### Módulo de Banco de Dados Local (Backend Mock)

#### [NEW] [src/services/db.ts]
Serão criadas as funções utilitárias que manipulam a gravação dos dados no `localStorage`:
- `registerUser(email, password)`
- `loginUser(email, password)`
- `getUserData(email)`
- `updateUserData(email, newData)`

### Módulo de Roteamento

#### [NEW] [npm install react-router-dom]
Adicionaremos a dependência de rotas.

#### [MODIFY] [src/main.tsx] e [src/App.tsx]
Transferiremos o atual layout funcional para um componente `<Dashboard />`. O arquivo raiz terá um `<BrowserRouter>` que irá gerenciar as novas páginas do nosso software.

### Novas Telas de Frontend

#### [NEW] [src/pages/Login.tsx]
Tela de Login para inserção de e-mail e senha. Conterá opções visuais e links para o cadastro de contas novas.

#### [NEW] [src/pages/Register.tsx]
Tela de criação de usuários para inicializar a modelagem dos dados vazios daquele novo currículo associado com um novo e-mail.

#### [NEW] [src/pages/Dashboard.tsx]
O Antigo `App.tsx`. Todo o projeto criado anteriormente de Pré-Visualização e Formulário, mas com o acréscimo de um "Hook" (`useEffect`) para carregar imediatamente do `db.ts` os seus dados ao abrir a tela. Também conterá um botão "Sair" (Logout).

## Open Questions

> [!WARNING]
> Há alguma exigência específica para a tela de Login? Gostaria de adicionar campos extras ao se registrar (além de "E-mail" e "Senha", talvez "Nome") ou apenas o básico está bom para iniciarmos?

## Verification Plan

### Testes Automatizados Simulados
- Rodaremos o subagente de navegador (`browser_subagent`) para acessar `/`, tentar ver a página inicial (que deverá se tornar o login ou redirecionar o usuário).
- Cadastraremos uma conta `"admin@email.com"` com uma senha genérica.
- Realizaremos login.
- Alteraremos o "Resumo Profissional" no Dashboard.
- Clicaremos em "Deslogar" e faremos login de volta para provar e validar que a persistência das informações da conta permanecem as mesmas.
