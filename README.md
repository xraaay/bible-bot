# Bible Bot

## Getting Set up

- Installing Node
  - [go here](https://nodejs.org/en/)
  - install Node LTS version
- Cloning the repo
  - run ```git clone https://github.com/xraaay/bible-bot.git``` in folder of your choosing
  - make sure you get the .env from somebody and put it in the root directory
- Installing packages 
  - run ```npm i -g nodemon```
    - nodemon will restart the bot everytime you save a file, OP as fuck
  - run ```cd bible-bot``` then ```npm i```
- Starting the bot
  - run ```nodemon index.js``` inside of the root directory
- Youre set up!

## 

### Running your own bot
- Follow this guide [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
  - Make sure you follow up until the point you click the 'Add Bot' button and grab the token from there
  - Then just swap out the TOKEN={your token here} in the .env file to your own token
  - You're also gonna have to add the bot to your server too 
    - should look something like this https://discord.com/oauth2/authorize?client_id={your-token-here}&scope=bot&permissions={permissions}
    - you can default to 8 permissions if you want to give the bot admin power, but this could be dangerous so make sure you know what youre doing or do this on a throwaway server

##

If you have any questions just DM me or sumin (PullOutKing)