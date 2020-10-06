# Bible Bot

## Getting Set up

- Setting up IDE
  - [go here](https://code.visualstudio.com/)
  - Install VSCode for Windows probably
- Installing Node
  - [go here](https://nodejs.org/en/)
  - Install Node LTS version
- Installing Git Bash
  - [go here](https://git-scm.com/downloads)
  - You can just default everything and click next
- Cloning the repo
  - open a terminal in a folder you want to clone the repo into
  - run ```git clone https://github.com/xraaay/bible-bot.git``` in folder of your choosing
  - make sure you get the .env from somebody and put it in the root directory
- Installing packages 
  - run ```npm i -g nodemon```
    - nodemon will restart the bot everytime you save a file, OP as fuck
  - run ```cd bible-bot``` then ```npm i```
- Starting the bot
  - run ```nodemon index.js``` inside of the root directory
- Youre set up!

## Creating your own branch
- **DO NOT** work in the master branch
- To create a new branch run ```git checkout -b "branch-name"``` but replace the branch-name with a short description on what feature youre going to add
- Once you do that make sure you're actually in another branch
  - For example: /c/repos/biblebot (test-branch)
- To save your changes onto the repo
  - First you want to add all the files you changed with ```git add .```
  - Next you want to commit the changes with ```git commit -m "add a message here saying what you did"```
  - Last you want to push those changes onto GitHub with ```git push origin head``` 
  - Now your changes should be in GitHub, you can check from the branches tab
- If you're finished with your feature, make a pull request and somebody will review it and merge

# **pls dont push into master**
# **pls dont push into master**
# **pls dont push into master**
# **pls dont push into master**

## Setting up commands

- Try to follow the format of the file in ./commands/help.js
- To make a command
  - Create a file in the commands folder
  - The name of the file will be the name of the command
    - For example: help.js = b! help
  - Basic format is 
    ```javascript
        module.exports = {
          name: 'name-of-command',
          description: '',
          args: false,  // set this to true if you want to require arguments passed into like b!help {command}
          execute(message, args) {
             {your code here}
          }
        };
    ```

### Running your own bot
- Follow this guide [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
  - Make sure you follow up until the point you click the 'Add Bot' button and grab the token from there
  - Then just swap out the TOKEN={your token here} in the .env file to your own token
  - You're also gonna have to add the bot to your server too 
    - should look something like this https://discord.com/oauth2/authorize?client_id={your-token-here}&scope=bot&permissions={permissions}
    - you can default to 8 permissions if you want to give the bot admin power, but this could be dangerous so make sure you know what youre doing or do this on a throwaway server

##

If you have any questions just DM me or sumin (PullOutKing)
