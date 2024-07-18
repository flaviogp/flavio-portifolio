import { Skill } from "./types"

const javaScript: Skill = {
    name: 'JavaScript',
    description: 'JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Sempre que uma página web faz mais do que apenas mostrar informações estáticas para você - ela mostra em tempo real conteúdos atualizados, mapas interativos, animações gráficas em 2D/3D, vídeos, etc. - você pode apostar que o Javascript provavelmente está envolvido.',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
}
const typeScript: Skill = {
    name: 'TypeScript',
    description: 'TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala. O TypeScript adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor. Detecte erros mais cedo em seu editor.',
    documentation: 'https://www.typescriptlang.org/docs/'
}
const html: Skill = {
    name: 'HTML5',
    description: 'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
}
const css: Skill = {
    name: 'CSS3',
    description: 'CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.',
    documentation: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
}
const nodeJs: Skill = {
    name: 'NodeJs',
    description: 'NodeJS é uma plataforma de código aberto, construída sobre o motor V8 do Google Chrome, que permite realizar aplicações server-side utilizando JavaScript. Ele é altamente escalável e eficiente, tornando-se uma escolha popular para desenvolvedores em todo o mundo.',
    documentation: 'https://nodejs.org/docs/latest/api/'
}
const react: Skill = {
    name: 'React',
    description: 'React é uma biblioteca JavaScript para criar interfaces de usuário. React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.',
    documentation: 'https://pt-br.legacy.reactjs.org/'
}
const sass: Skill = {
    name: 'Sass',
    description: 'Sass é uma linguagem de folha de estilo compilada em CSS. Ele permite que você use variáveis, regras aninhadas, mixins, funções e muito mais, tudo com uma sintaxe totalmente compatível com CSS. Sass ajuda a manter grandes folhas de estilo bem organizadas e facilita o compartilhamento de design dentro e entre projetos.',
    documentation: 'https://sass-lang.com/documentation/'
}
const styledComponents: Skill = {
    name: 'Styled Components',
    description: 'styled-components é o resultado de imaginar como poderíamos aprimorar o CSS para estilizar sistemas de componentes React. Ao focar em um único caso de uso, conseguindo otimizar a experiência para desenvolvedores, bem como a saída para usuários finais.',
    documentation: 'https://styled-components.com/docs'
}
const nextJs: Skill = {
    name: 'NextJs',
    description: 'Next.js é um framework React para construir aplicativos web full-stack. Você usa React Components para construir interfaces de usuário, e Next.js para recursos e otimizações adicionais.',
    documentation: 'https://nextjs.org/docs'
}
const tailwindCss: Skill = {
    name: 'TailwindCss',
    description: 'Tailwind CSS é um framework CSS utilitário de baixo nível que oferece uma nova maneira de estilizar projetos web. Diferentemente dos frameworks CSS tradicionais que fornecem componentes predefinidos, o Tailwind permite que os desenvolvedores criem designs personalizados com classes utilitárias para cada estilo que você possa precisar.',
    documentation: 'https://v2.tailwindcss.com/docs'
}
const express: Skill = {
    name: 'Express',
    description: 'Express é um popular framework web estruturado, escrito em JavaScript que roda sobre o ambiente node.js em tempo de execução. Este módulo explica alguns dos principais benefícios deste framework, como configurar o seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.',
    documentation: 'https://expressjs.com/pt-br/'
}
const git: Skill = {
    name: 'Git',
    description: 'O Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remoto.',
    documentation: 'https://git-scm.com/doc'
}
const gitHub: Skill = {
    name: 'GitHub',
    description: 'O GitHub é uma plataforma baseada na nuvem onde você pode armazenar, compartilhar e trabalhar em conjunto com outras pessoas para escrever código.',
    documentation: 'https://docs.github.com/pt'
}
const vsCode: Skill = {
    name: 'Visual Studio Code',
    description: 'O Visual Studio Code (VS Code) é um editor de código de código aberto desenvolvido pela Microsoft.',
    documentation: 'https://code.visualstudio.com/Docs'
}
const linux: Skill = {
    name: 'Linux',
    description: 'Linux é um sistema operacional de código aberto que permite modificações e distribuições por qualquer usuário. Sua flexibilidade e segurança o tornam popular entre programadores e empresas.',
    documentation: null
}
const jest: Skill = {
    name: 'JEST',
    description: 'Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. Ele permite que você escreva testes com uma API acessível, familiar e rica em recursos que lhe dá resultados rapidamente.',
    documentation: 'https://jestjs.io/pt-BR/docs/getting-started'
}
const knexJs: Skill = {
    name: 'KnexJs',
    description: 'Knex.js é um construtor de consultas SQL com "batteries included" para PostgreSQL , CockroachDB , MSSQL , MySQL , MariaDB , SQLite3 , Better-SQLite3 , Oracle e Amazon Redshift, projetado para ser flexível, portátil e divertido de usar.',
    documentation: 'https://knexjs.org/'
}
const prisma: Skill = {
    name: 'Prisma',
    description: 'Prisma é um projeto OpenSource e que segundo o próprio time pode ser considerado uma especie de ORM que substitui os tradicionais.',
    documentation: 'https://www.prisma.io/docs'
}
const sequelize: Skill = {
    name: 'Sequelize',
    description: 'Sequelize é um ORM moderno TypeScript e Node.js para Oracle, Postgres, MySQL, MariaDB, SQLite e SQL Server, e mais. Apresentando suporte sólido a transações, relações, carregamento rápido e lento, replicação de leitura e mais.',
    documentation: 'https://sequelize.org/docs/v6/'
}


export {
    css,
    express,
    git,
    gitHub,
    html,
    javaScript,
    jest,
    knexJs,
    linux,
    nextJs,
    nodeJs,
    prisma,
    react,
    sass,
    sequelize,
    styledComponents,
    tailwindCss,
    typeScript,
    vsCode,
}