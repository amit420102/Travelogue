# Travelogue
This project is created to provider its user with ability to access weather, social media feed for US National Parks 
in one place without having need to go to multiple websites. The chat functionality also enables users to get in touch
with each other to get the latest information about parking, weather and trail information from fellow travellers.

# Dependencies:
In order to test the project user needs to install the chocolatey from chocolatey.org and then install meteor from command line
by using below command:
choco install meteor

Once the meteor is installed, user can clone the project or download the project to local desktop and folder. In the command line
user can navigate to the folder where the project is kept and type meteor on the command line.

# Packages:
Apart from standard meteor packages that come with meteor i have used below packages:
accounts-ui
accounts-password
iron:router
session
twbs:bootstrap

# Collections:
messages - this has been created for chat functionality
users - this is created for user login

# Key processes:
1) user first is shown the home page which has details about the website and contact details.
2) on the navbar, user has option to select number of national parks which will bring user to individual pages for 
each of the national parks. These pages will have weather details and social media feed from facebook pages and
twitter for each of the parks.
3) there is also chat functionality which is only enable when the user is logged in. This can be used by users to get details 
about parks weather, parking availability for popular spots or status of trails with fellow users.

