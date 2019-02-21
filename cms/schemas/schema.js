// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import MyCustomStringInput from '../myComponents/VidImageView'
// We import object and document schemas

import lobby from './lobby'
import wrapper from './wrapper'
import app from './app'
import splashScreen from './splashScreen'
import video from './video';
import components from './components';
import application from './application';
import keyval from './keyval';
import header from './header';
import footer from './footer';
import body from './body';
import imageKeyVal from './imageKeyVal';
import generalComponent from './generalContainer'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
   // movie,
   // person,
   lobby,
   wrapper,
   splashScreen,
   video,
   components,
   application,
   keyval,
   header,
   footer,
   body,
   imageKeyVal,
   generalComponent,
   app
   // screening,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas

  ])
})
