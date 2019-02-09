import MyCustomStringInput from '../myComponents/VidImageView'
export default {
    name: 'keyval',
    title: 'Add File',
    type: 'object',
    fields: [
      {
        name: 'ResourceName',
        title: 'File Name',
        type: 'string'
      },
      {
        name: 'resourceUrl',
        title: 'File Url',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
     
    ],

  }
  