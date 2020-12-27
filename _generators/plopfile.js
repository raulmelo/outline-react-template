module.exports = function (plop) {
// eslint-disable-next-line no-unused-expressions
plop.setGenerator('Página', {
  description: 'Criar uma nova página na aplicação',
  prompts: [
    {
      type: 'input',
      name: 'name',
        message: 'Nome da página:'
      },
      {
        type: 'confirm',
        name: 'hasCss',
        message: 'Adicionar css',
        default: true
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Qual fluxo criado:'
      }
    ],
    actions: function(data) {
      var actions = [
        {
          type: 'add',
          path: '../src/pages/{{dashCase folder}}/{{pascalCase name}}-page/{{pascalCase name}}-page.tsx',
          templateFile: 'templates/pages/page.hbs'
        }
      ]
      if(data.hasCss) { 
        actions.push({
            type: 'add',
            path: '../src/pages/{{dashCase folder}}/{{pascalCase name}}-page/{{pascalCase name}}-page.scss',
            templateFile: 'templates/pages/styles.hbs'
        })
      }
      return actions
    }
  }),
  plop.setGenerator('Componente', {
      description: 'Criar um novo componente',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Nome do componente?'
        },
        {
          type: 'confirm',
          name: 'hasCss',
          message: 'Adicionar css',
          default: true
        },
        {
          type: 'confirm',
          name: 'hasStorybook',
          message: 'Adicionar MDX storybook',
          default: false
        }
      ],
      actions: function(data) {
        var actions = [
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/components/component.hbs'
          }
        ];

        if(data.hasCss) {
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
            templateFile: 'templates/components/styles.hbs'
          })
        }
        if(data.hasStorybook) {
          actions.push({
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
            templateFile: 'templates/components/stories.hbs'
          })
        }
        return actions
      }
  }),
  plop.setGenerator('fluxo de páginas', {
    description: 'Adicionar um novo fluxo de páginas',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual nome do seu novo fluxo?'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Qual o caminho passado pela url?'
      },
      {
        type: 'confirm',
        name: 'routerPrivate',
        message: 'fluxo de rota privada ?',
        default: false
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/fluxos/fluxo.hbs'
      }
    ]
  })
}
