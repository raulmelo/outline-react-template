# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.

## Fluxo de páginas 
O fluxo de página foi inserido no projeto para manter um padrão de rotas, estrutura e uma organização fácil para o projeto de médio e grande porte. 

Um exemplo de como podemos gerar um fluxo de autentificação de usuário.

 1. `yarn generator`
 2. escolhe opção de *Fluxo de página*
 3. adiciona o nome do fluxo ***Auth***
 
 Pronto.
```
📦src  
 ┣ 📂pages  
 ┃ ┣ 📂 Auth
 ┃ ┃ ┗ 📜index.tsx  
 ┃ ┃ ┣ 📂login 
 ┃ ┃ ┃ ┗ 📜 login-page.tsx  
 ┃ ┃ ┃ ┗ 📜 login-page.scss  
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┣ 📂new-password
 ┃ ┗ 📂Home  
 ┃ ┃ ┗ 📜index.tsx  
```

## Nova página
Usamos também o yarn generator para adicionar novas páginas, assim podemos continuar mantendo nossa estrutura organizada e padrão.


Um exemplo de como podemos gerar um fluxo de autentificação de usuário.

 1. `yarn generator`
 2. escolhe opção de ***Página*** 
<small>Criar uma nova página na aplicação</small>.
 4. Nome da página:  Login 
<small>Adicione o nome da sua página que deseja criar</small>.
 5. Escolha se quer adicionar um css para sua página
<small>Por padrão é Y *true* apenas da um enter para adicionar</small>
 6. Qual fluxo criado: **Auth** 
<small> Adicione o nome do fluxo de páginas que você criou <small>  
 7. adiciona o nome do fluxo ***Auth***
 8. Depois que gerado abra sua página gerada e segue os passos que estão comentado no arquivo gerado.


 ```
📦src  
 ┣ 📂pages  
 ┃ ┣ 📂 Auth
 ┃ ┃ ┗ 📜index.tsx  
 ┃ ┃ ┣ 📂login // página gerada
 ┃ ┃ ┃ ┗ 📜 login-page.tsx // arquivo da página   
 ┃ ┃ ┃ ┗ 📜 login-page.scss // css da página  
 ┃ ┃ ┣ 📂register
 ┃ ┃ ┣ 📂new-password
 ┃ ┗ 📂Home  
 ┃ ┃ ┗ 📜index.tsx  
```
