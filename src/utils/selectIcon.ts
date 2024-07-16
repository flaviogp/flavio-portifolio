import * as I from './imagesUrl'


const selectIcon = (icon: string) => {
    switch(icon){
        case "backend":
          return I.backend;
        case "frontend":
          return I.frontend;
        case "languages":
          return I.languages;
        case "libsAndFrameworks":
          return I.libsAndFrameworks;
        case "tools":
          return I.tools;
          
        case "css3":
          return I.css;
        case "express":
          return I.express;
        case "git":
          return I.git;
        case "github":
          return I.github;
        case "html5":
          return I.html;
        case "jest":
          return I.jest;
        case "javascript":
          return I.javascript;
        case "knexjs":
          return I.knexjs;
        case "linux":
          return I.linux;
        case "nextjs":
          return I.next;
        case "nodejs":
          return I.nodejs;
        case "prisma":
          return I.prisma;
        case "react":
          return I.react;
        case "sass":
          return I.sass;
        case "sequelize":
            return I.sequelize;
        case "styled components":
            return I.styledcomponents;
        case "tailwindcss":
            return I.tailwind;
        case "typescript":
            return I.typescript;
        case "visual studio code":
            return I.vscode;

        
        default:
        'not find'
    }
}

export default selectIcon