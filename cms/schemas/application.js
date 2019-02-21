//import icon from 'react-icons/lib/md/local-movies'
import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'application',
    title: 'Application',
    type: 'object',
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

      },
      {
        title: 'Lobby',
        name: 'lobby',
        type: 'lobby',

      }
    ],

  }  