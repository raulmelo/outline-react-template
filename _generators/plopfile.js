module.exports = function (plop) {
  plop.setGenerator('Página', {
    description: 'Criar uma nova página na aplicação',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome da página:'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Qual projeto:'
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/pages/{{dashCase folder}}/{{pascalCase name}}-page/{{pascalCase name}}-page.tsx',
        templateFile: 'templates/pages/page.hbs'
      },
      {
        type: 'add',
        path:
          '../src/pages/{{dashCase folder}}/{{pascalCase name}}-page/{{pascalCase name}}-page.scss',
        templateFile: 'templates/pages/styles.hbs'
      }
    ]
  }),
    plop.setGenerator('Componente', {
      description: 'Criar um novo componente',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Nome do componente?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/components/component.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
          templateFile: 'templates/components/styles.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
          templateFile: 'templates/components/stories.hbs'
        }
      ]
    })
}
