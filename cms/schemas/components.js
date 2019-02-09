//import icon from 'react-icons/lib/md/local-movies'
import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'components',
    title: 'Components',
    type: 'object',
    fields: [
    {
        name: 'componentsGenericPopupWithanimation',
        title: 'Generic Popup with animation',
        type: 'array',
        of: [ {type: 'keyval'}]
    },

    {
        title: 'More Generic Popup With Animation',
        name: 'moreGenericPopupWithanimation',
        type: 'array',
        of: [{
          type: 'keyval',  of: [ {type: 'keyval'}]
        }]
    }
     
    ],
  
  }  