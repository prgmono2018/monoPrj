//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'application',
    title: 'Application',
    type: 'document',
    fields: [
      {
        name: 'applicationName',
        title: 'Application Name',
        type: 'string'
      },
      {
        title: 'Videos',
        name: 'videos',
        type: 'reference',
        to: [{type: 'video'}]
      },
      {
        title: 'Components',
        name: 'components',
        type: 'reference',
        to: [{type: 'components'}]
      },
      {
        title: 'Wrapper',
        name: 'wrapper',
        type: 'reference',
        to: [{type: 'wrapper'}]
      },
      {
        title: 'Splash screen',
        name: 'application',
        type: 'reference',
        to: [{type: 'splashScreen'}]
      }
    ],

  }  