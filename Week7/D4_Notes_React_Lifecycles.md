# Lifecycles
---
```toc
```
---

## Defining Component Lifecycle
- ==Component Lifecycle==: the cycle that every component has to go through from the point it is created and mounted to the point it is destroyed and unmounted
	- Applies for both **functional** and **class** components


---

## Defining Lifecycle Methods
- ==Lifecycle Methods==: the methods used to access **Component Lifecycles**
	- Automatically called in the background


---

## Stages of a Component Lifecycle
1. ==Mounting==: the process in which React is creating and inserting the component into the DOM
	- ==`constructor()`==: Where you would assign state to the  component and bind event handlers; React will set the default and initial values for both the component props and component state
		- The first method called before the component is actually mounted to the DOM
		- **This is not where we would make API calls or introduce subscriptions**
	- ==`render()`==: Where the html content will be processed and rendered
	- ==`componentDidMount()`==: Immediately following the completion of `render()`, this is where we would initiate any kind of netwrok request, subscription, timer, or if we needed to target a DOM node from the component tree
1. ==Updating==: runs every time we update the components' state or properties
	- ==`shouldComponentUpdate(nextProps, nextState)`==: this method gives us the ability to tell React whether or not the component should be re-rendered after a change in state or props.
		- We use this to optimize performance
		- By default this method returns true
		- We could return false if we didn't want the component to re-render
	- ==`render()`==: depending on the return value of `shouldComponentUpdate()`, this will either re-render the content or not
	- ==`componentDidUpdate(prevProps)`==: whatever the previous method returns becomes the third argument for this method which allows us to compare the prevProps, prevState, and the snapshot value that was just returned.
1. ==Unmounting==: React unmounts the component and removes it from the DOM
	- ==`componentWillUnmount()`==: invoked right before the component is unmounted
		- The ideal place to cancel any on-going network requests, subscriptions, or clear timers