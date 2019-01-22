//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'splashScreen',
    title: 'Splash Screen',
    type: 'document',
    fields: [
        {
            name: 'splashScreenNamed',
            title: 'Name',
            type: 'string'
          },
      {
        name: 'splashScreenBackground',
        title: 'Background',
        type: 'string'
      },
      {
        name: 'splashScreenPreLoadAnim',
        title: 'Preloader Animation',
        type: 'string'
      },
      {
        name: 'splashScreenMovie',
        title: 'Movie',
        type: 'string'
      },
      {
        title: 'Other Animations',
        name: 'splashScreenOtherAnim',
        type: 'array',
        of: [{
          type: 'reference',
          to: [{type: 'oneObject'}]
        }]
      }
     
    ],
  
  }  