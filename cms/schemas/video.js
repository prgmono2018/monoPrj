//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'video',
    title: 'Videos',
    type: 'document',
    fields: [
    {
            name: 'videoName',
            title: 'Name',
            type: 'string'
    },
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
          type: 'reference',
          to: [{type: 'oneObject'}]
        }]
    }
     
    ],
  
  }  