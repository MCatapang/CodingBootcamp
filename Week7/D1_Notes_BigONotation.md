# Big O Notation
---
##### Defining Big O
- **Big O**: a plot of the ubber bound of how long a algorithm should take to run versus how big the problm is
	- a way to represent roughly how long it will take our function to run
	- **N**: size of the function (i.e., number of operations)
		- e.g., the function below would run in ==O(1)== time because it only had 1 operation (the return)
		```js
		function smallest( sortedArr ) {
		    return sortedArr[0];
		}
		smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45] );
		// output: 2
		```
- In a graph, these O notations would be plotted as such:
	![Plotting Commonm Big O Notations][https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/BigO.png] 