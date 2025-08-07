# 📇 Indexa Contatos

Agenda de contatos desenvolvida com Angular.  
Este projeto faz parte do curso **"Angular: crie aplicações web ágeis"** da plataforma [Alura](https://www.alura.com.br/).

O curso está em andamento e tem como objetivo ensinar os fundamentos do Angular, desde a criação de componentes até a construção de uma aplicação funcional com boas práticas e modularização. O projeto **Indexa** é uma agenda simples onde é possível listar, cadastrar, editar e excluir contatos, reforçando conceitos como *componentização*, *data binding*, *rotas*, *serviços* e *HTTP*.

---

## 📚 Sobre o Curso

**Curso**: Angular: crie aplicações web ágeis  
**Plataforma**: Alura  
**Objetivo**: Aprender a desenvolver aplicações front-end modernas utilizando Angular, uma das bibliotecas mais populares para desenvolvimento web.

Durante o curso são abordados temas como:

- Criação de componentes e templates
- Ligação entre dados e templates (data binding)
- Criação e navegação entre rotas
- Uso de serviços para organização do código
- Consumo de APIs REST com HTTPClient
- Estilização com CSS/Bootstrap

---

## 🛠️ Tecnologias Utilizadas

- Angular CLI v17.0.3
- TypeScript
- HTML / CSS
- RxJS
- Bootstrap (caso utilizado)

---

## 🚀 Como Rodar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/Sanviictor/indexa_contatos.git
cd indexa_contatos
```

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Iniciar o servidor de desenvolvimento
ng serve
# Depois, acesse: http://localhost:4200

# 3. Gerar um novo componente
# Exemplo: componente 'contato-detalhes'
ng generate component contato-detalhes
# ou:
ng g c contato-detalhes

# 4. Gerar um novo serviço
# Exemplo: serviço 'contato'
ng generate service contato
# ou:
ng g s contato

# 5. Gerar um novo módulo
# Exemplo: módulo 'contatos'
ng generate module contatos
# ou:
ng g m contatos

# 6. Fazer build para produção
ng build
# Os arquivos otimizados serão gerados na pasta dist/

# 7. Executar testes unitários com Karma
ng test

# 8. Executar testes end-to-end (e2e)
# Requer configuração de ferramenta como Cypress ou Protractor
ng e2e

# 9. Consultar ajuda do Angular CLI
ng help
# Ou acessar: https://angular.io/cli
```
