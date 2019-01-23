//import icon from 'react-icons/lib/md/local-movies'
import keyval from './keyval';
export default {
  
    name: 'video',
    title: 'Videos',
    type: 'object',
    fields: [
    {
        name: 'videoWebM',
        title: 'WebM',
        type: 'string'
    },
    {
        name: 'videoOggTheora',
        title: 'Ogg Theora',
        type: 'string'
    },
    {
        name: 'videoMPEG4',
        title: 'MPEG-4',
        type: 'string'
    },
    {
        title: 'OtherVideos',
        name: 'OtheVideos',
        type: 'array',
        of: [{
          type: 'keyval',
        }]
    },
   
     
    ],
  
  }  