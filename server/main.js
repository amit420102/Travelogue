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
    //console.log(result.data);
    return result.data;
    },
/*
    'glacgetalert':function(){
        const glac_result = HTTP.call('GET',
        "https://developer.nps.gov/api/v1/alerts?parkCode=glac&api_key=23AOK2ewxzmtO1Yg7r2MavlsGUTHSWTRvzS21Qnd"
        ); 
        //console.log(result.data);
        return glac_result.data;
    },

    'archgetalert':function(){
        const arch_result = HTTP.call('GET',
        "https://developer.nps.gov/api/v1/alerts?parkCode=arch&api_key=23AOK2ewxzmtO1Yg7r2MavlsGUTHSWTRvzS21Qnd"
        ); 
        //console.log(result.data);
        return arch_result.data;
    },

    'brcagetalert':function(){
        const brca_result = HTTP.call('GET',
        "https://developer.nps.gov/api/v1/alerts?parkCode=brca&api_key=23AOK2ewxzmtO1Yg7r2MavlsGUTHSWTRvzS21Qnd"
        ); 
        //console.log(result.data);
        return brca_result.data;
    },

    'yellgetalert':function(){
        const yell_result = HTTP.call('GET',
        "https://developer.nps.gov/api/v1/alerts?parkCode=yell&api_key=23AOK2ewxzmtO1Yg7r2MavlsGUTHSWTRvzS21Qnd"
        ); 
        //console.log(result.data);
        return yell_result.data; 
    },
*/
})
