//import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'lobby',
  title: 'Lobby',
  type: 'object',
  //icon,
  fields: [
    {
      name: 'lobbyName',
      title: 'Lobby Name',
      type: 'string'
    },
    {
      name: 'lobbyBg',
      title: 'Background',
      description: 'Please enter the path of the resource',
      type: 'string',
      options: {
        source: 'title',
        maxLength: 100
      }
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
