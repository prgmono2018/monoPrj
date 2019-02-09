//import icon from 'react-icons/lib/md/local-movies'

export default {
  
    name: 'footer',
    title: 'Footer',
    type: 'object',
    fields: [
      
      {
        title: 'Please add components to the footer',
        name: 'footerObjects',
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