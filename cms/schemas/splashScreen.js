//import icon from 'react-icons/lib/md/local-movies'
import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'splashScreen',
    title: 'Splash Screen',
    type: 'object',
    fields: [
      {
        name: 'splashScreenBackground',
        title: 'Background',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'splashScreenPreLoadAnim',
        title: 'Preloader Animation',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'splashScreenMovie',
        title: 'Movie',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        title: 'Other Animations',
        name: 'splashScreenOtherAnim',
        type: 'array',
        of: [ {type: 'keyval'}]
      }
     
    ],
  
  }  