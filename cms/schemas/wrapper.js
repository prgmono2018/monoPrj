//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'wrapper',
    title: 'Application Wrapper',
    type: 'object',
    fields: [
      {
        name: 'Splash',
        title: 'Splash',
        type: 'image'
      },
      {
        name: 'wrapperIosAppIcon',
        title: 'Ios Icon',
        type: 'image'
      },
      {
        name: 'wrapperAndroAppIcon',
        title: 'Android Icon',
        type: 'image'
      },
      {
        name: 'wrapperWebAppIcon',
        title: 'Web Icon',
        type: 'image'
      },
      {
        name: 'wrapperTabletAppIcon',
        title: 'Tablet Icon',
        type: 'image'
      },
      {
        name: 'wrapperEmbeddedAppIcon',
        title: 'Embedded Icon',
        type: 'image'
      },
      {
        name: 'wrapperLoadingAppIcon',
        title: 'Loading Icon',
        type: 'image'
      },
      {
        title: 'More Objects',
        name: 'wrapperMoreObjects',
        type: 'array',
        of: [{type: 'imageKeyVal'}, {type: 'keyval'}]
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