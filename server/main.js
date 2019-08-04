// API key - https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=23AOK2ewxzmtO1Yg7r2MavlsGUTHSWTRvzS21Qnd
// Park codes - arch/brca/glac/yell

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
  },

  'getalert':function(){
    const result = HTTP.call('GET',
    "https://developer.nps.gov/api/v1/alerts?parkCode=arch,brca,glac,yell&api_key=23AOK2ewxzmtO1Yg7r2MavlsGUTHSWTRvzS21Qnd"
    ); 
    console.log(result.data);
    return result.data;
    }
})
