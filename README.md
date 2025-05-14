# 🚗 WebCarros

**WebCarros** é um site voltado para quem deseja anunciar ou visualizar carros à venda. O projeto permite autenticação de usuários, cadastro de veículos e contato direto via WhatsApp.

## 🔑 Funcionalidades

- Registro e login de usuários
- Autenticação com Firebase
- Cadastro de carros com imagens e informações detalhadas
- Visualização de um carro específico por ID
- Botão de contato via WhatsApp 

## 🌐 Rotas da Aplicação

| Rota            | Descrição                                                |
|-----------------|----------------------------------------------------------|
| `/login`        | Tela de login para usuários registrados                  |
| `/register`     | Tela de cadastro para novos usuários                     |
| `/dashboard`    | Área protegida onde o usuário pode gerenciar seus carros |
| `/car/:id`      | Página com detalhes de um carro específico               |

## 🛠 Tecnologias Utilizadas

- React JS
- Firebase Authentication
- Firebase Firestore
- React Router DOM
- Vite
- Tailwind
- Typescript

## 📲 WhatsApp Direct

Cada carro possui um botão que leva o usuário diretamente para o WhatsApp com uma mensagem automática pré-preenchida, como:

