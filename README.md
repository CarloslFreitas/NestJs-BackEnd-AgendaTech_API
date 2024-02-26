
## Descrição
Uma API construida em NestJs para gerenciamento de contatos, possuindo rotas para Login e Cadastro permitindo que cada usário tenha sua própria agenda online.

## Instalação
Utilize o comando abaixo para a instalação dos pacotes de dependências necessárias para a correta inicialização do projeto
```bash
$ npm install
```
Obs: Caso no processo de instalação ou inicialização da aplicação der um erro de versão npm, utilize o comando ``` npm install -g npm@6.14.6 ``` para dar um downgrade caso a versão seja superior, porque versões mais recentes do npm dão erro na instalação dos pacotes e na inicialização da aplicação. 

## Configurações iniciais importantes
Antes de tudo, crie um arquivo ```.env``` no diretório principal e siga o exemplo do arquivo ```.env.example```, substituindo as dicas localizadas dentro das chaves { }. A SECRET_KEY fica ao seu critério.

Para garantir o bom funcionamento e inicialização da aplicação, e após configurar o arquivo `.env`, rode as migrações com o comando: `npx prisma migrate dev```

## Iniciando a Aplicação
Após a instalação das dependências, utilize o comando seguinte para iniciar a aplicação localmente.
```bash
$ npm run start:dev
```

## Documentação
Acesse a rota definida para acessar a documentação da API para entender o padrão de inputs e respostas exigido por cada rota disponível para as requisições: 
Documentação: ```localhost:3001/docs```.
baseUrl: ```localhost:3001```

![image](https://github.com/Kenzie-Academy-Brasil-Developers/M6-Fullstack-Tech_CarloslFreitas/assets/37638947/d70a10ed-fb0f-4500-909d-508be90095c4)


# M6-Fullstack-Tech_CarloslFreitas
