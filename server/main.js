import { Meteor } from 'meteor/meteor';
import '../lib/collections.js'

Meteor.startup(() => {
  
});

Meteor.methods({
  'insertMessage':function(message){
      //console.log(message);
      if (!Meteor.user()){
          //console.log('user is not logged in');
          return;
      }
      else {
          //console.log('user is loged in');
          return Messages.insert(message);
      }
  }
})
