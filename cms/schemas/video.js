//import icon from 'react-icons/lib/md/local-movies'
import keyval from './keyval';
import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'video',
    title: 'Videos',
    type: 'object',
    fields: [
    {
        name: 'videoWebM',
        title: 'WebM',
        type: 'string',
        inputComponent: MyCustomStringInput,
    },
    {
        name: 'videoOggTheora',
        title: 'Ogg Theora',
        type: 'string',
        inputComponent: MyCustomStringInput,
    },
    {
        name: 'videoMPEG4',
        title: 'MPEG-4',
        type: 'string',
        inputComponent: MyCustomStringInput,
    },
    {
        title: 'OtherVideos',
        name: 'OtheVideos',
        type: 'array',
        of: [{type: 'keyval'}]
    },
   
     
    ],
  
  }  