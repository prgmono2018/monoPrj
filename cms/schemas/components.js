//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'components',
    title: 'Components',
    type: 'document',
    fields: [
    {
            name: 'ComponentName',
            title: 'Name',
            type: 'string'
    },
    {
        name: 'componentsGenericPopupWithanimation',
        title: 'Generic Popup with animation',
        type: 'string'
    },

    {
        title: 'More Generic Popup With Animation',
        name: 'moreGenericPopupWithanimation',
        type: 'array',
        of: [{
          type: 'reference',
          to: [{type: 'oneObject'}]
        }]
    }
     
    ],
  
  }  