//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'components',
    title: 'Components',
    type: 'object',
    fields: [
    {
        name: 'componentsGenericPopupWithanimation',
        title: 'Generic Popup with animation',
        type: 'array',
        of: [{type: 'imageKeyVal'}, {type: 'keyval'}]
    },

    {
        title: 'More Generic Popup With Animation',
        name: 'moreGenericPopupWithanimation',
        type: 'array',
        of: [{
          type: 'keyval',  of: [{type: 'imageKeyVal'}, {type: 'keyval'}]
        }]
    }
     
    ],
  
  }  