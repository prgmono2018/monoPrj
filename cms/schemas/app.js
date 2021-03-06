//import icon from 'react-icons/lib/md/local-movies'
import MyCustomStringInput from '../myComponents/VidImageView'
export default {
  
    name: 'app',
    title: 'Application',
    type: 'document',
    fields: [
        {
            name: 'applicationName',
            title: 'Application Name',
            type: 'string'
          },
      
      {
        title: 'Please add sections to the application',
        name: 'sections',
        type: 'array',
        of: [ {type: 'generalContainer'}]
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