# Arquitetura Limpa

Este repositório foi criado para fins de estudo e experimentação com os conceitos de Arquitetura Limpa (Clean Architecture). Ele contém implementações práticas, exemplos e exercícios para aplicar os princípios dessa arquitetura em projetos de software.

## 📖 Objetivo

O objetivo deste repositório é:
- Compreender os princípios fundamentais da Arquitetura Limpa.
- Praticar a separação de responsabilidades entre as camadas do sistema.
- Implementar projetos baseados em boas práticas de design e arquitetura.

## 🛠️ Estrutura do Projeto

O projeto segue os princípios de divisão em camadas sugeridos pela Arquitetura Limpa. Abaixo está uma breve descrição de cada camada:


- **Domain:** Contém as entidades e regras de negócio.
- **Application:** Gerencia os casos de uso e orquestra as interações entre as camadas.
- **Infrastructure:** Abriga implementações relacionadas a tecnologias específicas, como bancos de dados e APIs externas.
- **Presentation:** Lida com a interação do usuário ou entrada/saída de dados.

## ⚙️ Tecnologias Utilizadas

- Linguagem: [Escolha a linguagem, por exemplo, Java, Python, TypeScript]
- Frameworks: [Exemplo: Spring Boot, Express.js]
- Banco de Dados: [Exemplo: PostgreSQL, MongoDB]
- Testes: [Exemplo: JUnit, Pytest]

## 🚀 Como Executar o Projeto

1. Clone o repositório:

```bash
   git clone https://github.com/jacksonassis01/clean-architecture.git
```
   
2 -   Instale as dependências:

```bash
   npm install
```    

3 -   Execute o projeto:

```bash
   npm run start:dev
```

## Como Executar os Testes

Execute os testes automatizados:

```bash
   npx jest
```

## Referências e Recursos

-   Livro "Clean Architecture" - Robert C. Martin
-   [Documentação do Node](https://nodejs.org/docs/latest/api/)
-   [Documentação do Express](https://expressjs.com/)
-   [Documentação do Jest](https://jestjs.io/docs/getting-started)

## Notas Importantes

-   Este projeto é destinado exclusivamente ao aprendizado. Não é recomendado usá-lo em produção sem ajustes.
-   Feedbacks e sugestões são bem-vindos.

## Licença

Este repositório está sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
