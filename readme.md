###Fully customizable bot for filtering chat messages in discord.###
---
The following is instructions to create the bot and run it on your computer.

##Step One - Download NodeJS and Install##
> To run the bot the Node.js runtime is required, the download can be found at the official site, https://nodejs.org/en/. From here click the green LTS button to download. Once downloaded run the installer until it is installed. The page should look like this (that's my arrow pointing to the download).:
![alt text](https://github.com/sapblatt11/Chat-Filter-Bot/blob/master/guide/node.jpg?raw=true "Node.js Download Page")


##Step Two - Downloading the Bot##
> To download simply click the green **'Clone or Download'** button followed by 'Download as Zip' Once downloaded extract all the files into a folder.:
![alt text]( "Download Button for Bot")
> Once extracted in any text editor open the file named **'config.json'**. Leave this open, you'll need it later.

##Step Three - Connecting the bot to discord##
> First go to **https://discordapp.com/developers/docs/intro** then click **'My Apps'** on the left hand bar of the page. ![alt text](https://github.com/sapblatt11/Chat-Filter-Bot/blob/master/guide/My%20Apps.png?raw=true "My Apps") Once on the My Apps page click on the square that says **New App** ![alt text](https://github.com/sapblatt11/Chat-Filter-Bot/blob/master/guide/new.png?raw=true "New App"). Name your bot something familiar, you can always change it's nickname later. Add a profile picture if you'd like then press **Create App**.
> Next Scroll Down to the bottom of the page and click **'Create Bot User'** followed by **'Yes do it'** Now there should be a Token and a link that says click to reveal. Click it and copy the mess of numbers and letters that is there.![alt text](https://github.com/sapblatt11/Chat-Filter-Bot/blob/master/guide/find%20token.gif?raw=true "Scroll Down")
>Remember the **config.json** we opened earlier? Go back to it and paste the token inside the quotes that say **YOUR TOKEN GOES HERE INSIDE THE QUOTES**. Save the file. ![alt text](https://github.com/sapblatt11/Chat-Filter-Bot/blob/master/guide/token.png?raw=true "Paste Here").

##Step Four - Inviting to your server##
>This part can be tricky, on the page where you got your token scroll up to the top till you see **Client ID** copy the id. You are going to place that ID into this link https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot where it says **CLIENTID**
An example being: https://discordapp.com/oauth2/authorize?client_id=398716675165519883&scope=bot.
>Simply go to the link you just created and add the bot to the server you want (You need invite permissions within the server).

##Step Five - Permissions##
>For the bot to effectively filter the chat it needs access to deleting messages, which requires the permission **Manage Messages**. Create a roll with the text permission of Manage Messages on. The bot can only filter channels it can view so if there is private channels it requires permissions to access them as well. Don't forget to assign the roll.
Quick breakdown:
1. Server Settings
2. Roles
3. New Role (+ button)
4. Name it
5. Scroll to text Permissions
6. Toggle 'Manage Messages' to On
7. ASSIGN THE ROLL TO THE BOT.

##Step 6 - Chat Filters##
>Almost done, back to the **config.json** from earlier. There is a line where you can add and modify the words to filter. By following the pattern of word in quotes comma. You can add as many words or phrases as you would like. Words entered into the filter here must be in lowercase. This allows for the chat filter to filter any case. Don't forget to save the file when done. I added some fake swears as a start. ![alt text](https://github.com/sapblatt11/Chat-Filter-Bot/blob/master/guide/filter.png?raw=true "Filter List")

##Step 7 - Final Step; Running the Bot##
>Up until now the bot has been offline, for it to be online you need to start it. This can be done by double clicking the file **'run.bat'** A small black window will open up after a few seconds it should say 'Now Online, ready to filter!'. Closing the window will make the bot go offline, simply minimize it and let it run in the background. It should take up very little of you computers resources.

Congrats! You made it all the way, your chat filter should be fully functioning now.
