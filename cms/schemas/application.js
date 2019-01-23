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
        type: 'video',

      },
      {
        title: 'Components',
        name: 'components',
        type: 'components',
      },
      {
        title: 'Wrapper',
        name: 'wrapper',
        type: 'wrapper',
      },
      {
        title: 'Splash screen',
        name: 'splashScreen',
        type: 'splashScreen',

      }
    ],

  }  