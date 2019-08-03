import './travelogue.html'
import './navbar.html'
import './home.html'
import './arches.html'
import './bryce.html'
import './glacier.html'
import './yellowstone.html'
import './chat.html'
import '../lib/collections.js'

Meteor.subscribe("messages");

//Router configuration changes below:
Router.configure({
    layoutTemplate: 'Travelogue'
  });
  
Router.route('/', function(){
    //console.log("rendering root");
    this.render('navbar', {to:"header"});
    this.render('carousel_list', {to:"main"});
});


Router.route('/arches', function(){
    //console.log("rendering arches");
    this.render('navbar', {to:"header"});
    this.render('arches', {to:"main"});
});

Router.route('/bryce', function(){
    //console.log("rendering bryce");
    this.render('navbar', {to:"header"});
    this.render('bryce', {to:"main"});
});

Router.route('/glacier', function(){
    //console.log("rendering glacier");
    this.render('navbar', {to:"header"});
    this.render('glacier', {to:"main"});
});

Router.route('/yellowstone', function(){
    //console.log("rendering yellowstone");
    this.render('navbar', {to:"header"});
    this.render('yellowstone', {to:"main"});
});


Router.route('/chat', function(){
    //console.log("rendering chat");
    this.render('navbar', {to:"header"});
    this.render('chat', {to:"main"});
});

//below pieces of codes are added for each of the templates so that facebbok java script is loaded everytime the page is rendered
Template.arches.rendered = function(){
    setTimeout(function() { 
        FB.XFBML.parse(this.firstNode);
    }, 0);
};

Template.bryce.rendered = function(){
    setTimeout(function() { 
        FB.XFBML.parse(this.firstNode);
    }, 0);
};

Template.glacier.rendered = function(){
    setTimeout(function() { 
        FB.XFBML.parse(this.firstNode);
    }, 0);
};

Template.yellowstone.rendered = function(){
    setTimeout(function() { 
        FB.XFBML.parse(this.firstNode);
    }, 0);
};


if (Meteor.isClient){

    // this will configure the sign up field so it
    // they only need a username
    Accounts.ui.config({
        passwordSignupFields: 'USERNAME_ONLY',
    });

    Template.messageForm.events({
        // this event listener is triggered when user clicks on
        // the post! button on the message form template

        'click .js-save-message':function(event){
            var messageText = $('#message-text-input').val();

            var messageNickname = "Anon";
            if (Meteor.user()){
                messageNickname = Meteor.user().username;
            }

            var nick = messageNickname.split("@")[0];

            var message = {messageText:messageText,
                            nickname:nick,
                            email: messageNickname,
                            createdOn:new Date()
                            };

            // call the meteor method to insert the row in database
            
            Meteor.call('insertMessage', message, function(err, res){
                //console.log(err);
                if (!res){
                    alert('You need to log in!');
                }
            });

        }
    });

    Template.header.helpers({
        // this helper function returns the nickname from the Session variable
        nickname:function(){
            Session.set('messageNickname', 'Anon');
            if (Meteor.user()){
                Session.set('messageNickname', Meteor.user().username);
                
            }
            var email = Session.get('messageNickname');
            var nick = email.split("@")[0];
            return nick;
        },
    });


    Template.messageList.helpers({
        // this helper provides the list of messages for the
        // messgaeList template
        messages:function(){
            return Messages.find({}, {sort: {createdOn: -1}})
        },
        logged_user:function(email){
            if(Meteor.user().username == email){
                console.log(Meteor)
                return true;    
            }
            else{
                return false;    
            }
        },

    });

}
