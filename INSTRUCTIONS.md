# Instructions 🤓
In order to make things work properly you need to have two spaces where to put frontend of this project and, of course, backend.

I usually have the frontend hosted on [netlify.com](https://www.netlify.com/) and the backend hosted on [heroku.com](https://www.heroku.com/), if you want to do the same, you need to have an account on both of the website.

I suggest you to make also an account here on [github.com](https://github.com/) and clone this two repository, so, in that way you have [front](https://github.com/MrZukasa/components-db-frontend) and [backend](https://github.com/MrZukasa/components-db-backend) separated and up to go.

> N.B. to clone stuff on github, you need to use [git](https://git-scm.com/download/win), just install it and type `git clone [URL you want to clone]` in the terminal, like this

![image](https://i.ibb.co/nn6GzBx/clone.png)

Once you got both side of the project you can open it in your preferred editor, i use [VSCode](https://code.visualstudio.com/download). Another thing that is mandatory is [nodejs](https://nodejs.org/it/) donwload it and install it.

Now load both the projects in a separate folder and in each folder download the required dependencies typing `npm install` in the terminal.

## Backend
Done that, you need confugire the database that serve the backend directry in you heroku website, you  can use whatever database service you want, but as i mentioned above, i usually use this. There are a tons of tutorials available out there, heres [one](https://www.youtube.com/watch?v=16OIg7cyLw4) for mysql db in heroku.
> N.B. for a development purpose, i usually use Laragon, which provide the developer to everything he may need. [Here is](https://laragon.org/) Laragon has phpManager in it, with that you can easily create the DB structure.
> N.B. sometimes you need to keep secrete some information, in order to do that in the backend you need to set the .env variable (that are stored in the .env file) directly on heroku.

The DB structure that i use in this project is the following:
- Database name 'Archivio'
- Table name 'Componenti'
- ![Database](https://i.ibb.co/4RD3nmq/Cattura.png)

This is what you have to replicate on heroku database in order to make things work.

Once that the backend is ready, you can create your own repository on github.com and push the code, after that, you can link the repository that you have created to heroku, in order to create a new backend app running always with the lastest version available of your code.

## Frontend
For the frontend, you may need to change the axios call to the API of the backend that you already placed into heroku, so mind to change it as follow:
  - https://[your-backend-name].herokuapp.com/[API]
  > Example:
  ```Javascript
  axios.post("https://components-db-backend.herokuapp.com/Insert"
  ```
Then you have to do the same thing with the frontend but on netlify.com, which means:
 - Create a repo on github.com that contains the code
 - Link that repo to your netlify.com account and set it up to go [here](https://www.youtube.com/watch?v=4h8B080Mv4U) is how. Remember that google is your friend 😂

The result of this process shoud be something like [YourAppName]netlify.app that show all the React stuff, that use the [your-backend-name].herokuapp.com API that you made before.
