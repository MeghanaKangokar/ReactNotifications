const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Notifications = new Schema({
   title: {
      type: String
   },
   date: {
      type: Date
   },
   read: {
      type: Boolean
   }
}, {
   collection: 'notifications'
})

module.exports = mongoose.model('Notifications', Notifications)