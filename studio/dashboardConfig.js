export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f728e6b94c33a3becf560fa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j3msqnuw',
                  apiId: '7efa8b1c-c6c7-41fc-a433-ac80a5219494'
                },
                {
                  buildHookId: '5f728e6be7b17a34147b5c74',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vwvc7a4h',
                  apiId: '1ab023d5-f5e9-4bbb-9e34-fc0370b65d44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tecnopalmas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vwvc7a4h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
