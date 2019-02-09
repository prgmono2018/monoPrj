//import icon from 'react-icons/lib/md/local-movies'
import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'wrapper',
    title: 'Application Wrapper',
    type: 'object',
    fields: [
      {
        name: 'Splash',
        title: 'Splash',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'wrapperIosAppIcon',
        title: 'Ios Icon',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'wrapperAndroAppIcon',
        title: 'Android Icon',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'wrapperWebAppIcon',
        title: 'Web Icon',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'wrapperTabletAppIcon',
        title: 'Tablet Icon',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'wrapperEmbeddedAppIcon',
        title: 'Embedded Icon',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        name: 'wrapperLoadingAppIcon',
        title: 'Loading Icon',
        type: 'string',
        inputComponent: MyCustomStringInput,
      },
      {
        title: 'More Objects',
        name: 'wrapperMoreObjects',
        type: 'array',
        of: [ {type: 'keyval'}]
      }
     
    ],
  /*  preview: {
      select: {
        title: 'title',
        date: 'releaseDate',
        media: 'poster',
        castName0: 'castMembers.0.person.name',
        castName1: 'castMembers.1.person.name'
      },
      prepare(selection) {
        const year = selection.date && selection.date.split('-')[0]
        const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')
  
        return {
          title: `${selection.title} ${year ? `(${year})` : ''}`,
          date: selection.date,
          subtitle: cast,
          media: selection.media
        }
      }
    }*/
  }  