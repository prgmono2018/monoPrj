//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'splashScreen',
    title: 'Splash Screen',
    type: 'object',
    fields: [
      {
        name: 'splashScreenBackground',
        title: 'Background',
        type: 'image'
      },
      {
        name: 'splashScreenPreLoadAnim',
        title: 'Preloader Animation',
        type: 'file'
      },
      {
        name: 'splashScreenMovie',
        title: 'Movie',
        type: 'file'
      },
      {
        title: 'Other Animations',
        name: 'splashScreenOtherAnim',
        type: 'array',
        of: [{type: 'imageKeyVal'}, {type: 'keyval'}]
      }
     
    ],
  
  }  