import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'generalContainer',
    title: 'component',
    type: 'object',
    fields: [
        {
            name: 'containerName',
            title: 'Container Name',
            type: 'string'
          },
          {
            title: 'You can add setion to the container:',
            name: 'sections',
            type: 'array',
            of: [ {type: 'generalContainer'}]
          },
      {
        title: 'Please add resources to the container:',
        name: 'resources',
        type: 'array',
        of: [ {type: 'keyval'}]
      }
     
    ],
  /*     preview: {
        select: {
        title: 'containerName',
      },
      prepare(selection) {
        const year = selection.date && selection.date.split('-')[0]
        const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
        return {
          title: selection.title,
           }
      }
    }*/
  }  