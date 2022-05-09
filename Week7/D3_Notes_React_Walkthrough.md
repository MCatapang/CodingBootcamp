# Walkthrough
---
```toc
```
---

## Creation (Utilizing JSX)
1. Point your terminal in your target folder where you want to create your project folder, and run `npx create-react-app your-project-name-here` as a command in your terminal
	-==`create-react-app`== is a starter kit bundler that utilizes Webpack under the hood; 
		- **Bundlers**: used by modern JavaScript projects to "build" source code into production-ready files
		- **Webpack**: one fo the most popular bundlers that breaks down apps into smaller modules
	-  The folder structure for our React app as given by the webkit is as follows: ![Folder Structure|400](https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/react-project-structure.PNG) 
	- `src/index.js` is the entry point in our React project
		- This is where we call `ReactDOM.render` and send in our main `<App />` component
2. Create your components
3.  Modify your "App.js" located at `project-name-here/src` accordingly

## Deployment
1. Run `npm start`  in Terminal
	- This will run the React development server
	- It will also automatically open up a browser tab navigated to our app
	- Since this starter kit comes with a live reload feature, it will reload our app every time we save changes in our code
2. Stop deployment once finished by pressing `cmd` + `c` on your keyboard while in the Terminal

## Deleting and Reinstalling "node_modules"
- Whenever you're not actively working on a  React project, it's highly recommended that you uninstall "node_modules"
	- To uninstall, use `rm -rf node_modules`
		- `rm` is a command used to remove a file
		- `-r` is an argument that tells the remove command to delete files and directories
		- `-f` is an argument that bypasses the need for user confirmation for every `-r` delete that will happen
		- `node_modules` is the "node_modules" that we want to delete in order to save space
			- **Note**: make sure that you are deleting a specific folder; if you type in `/` it'll delete your **entire system** so **be very careful when using this command**
	- "node_modules" is an entire library consisting of hundreds of open-source code
	- It's important to uninstall "node_modules" so that local storage is not being used up when you're not running your app
- When you do want to run your React app, you will want to reinstall "node_modules" using `npm install` 
	- If you try to run `npm start` you'll get a couple errors that prevents you from running your React app
	- This is due to how your React app won't be able to source the modules it needs from "node_modules" since "node_modules" haven't been reinstalled yet (it's still missing from your React app)