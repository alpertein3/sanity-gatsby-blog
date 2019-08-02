export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d44bdf78b48e3219bb1f072',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z1hwxh5z',
                  apiId: 'd188f3fb-16e9-4b65-ad68-3389c062e91f'
                },
                {
                  buildHookId: '5d44bdf8e9a6663e490fefa1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-norezfyr',
                  apiId: '2aa94646-e2ba-4ab4-84c0-d3cab51d3ec6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alpertein3/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-norezfyr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
