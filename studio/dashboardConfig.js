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
                  buildHookId: '5d4da3fe53e5e9815b92c936',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j97pz2fe',
                  apiId: '553f6a69-f144-4bd1-a6f8-05e98d2e4ed0'
                },
                {
                  buildHookId: '5d4da3fe141e0a506157473d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hihb2pjg',
                  apiId: 'a15c02fb-96bb-40cf-9a66-a2ae5e189df3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dev1010/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hihb2pjg.netlify.com', category: 'apps'}
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
