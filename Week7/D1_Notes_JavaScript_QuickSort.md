# QuickSort
---
```toc
```
---

## Defining QuickSort
- ==QuickSort==: an algorithm that divides elements into smaller parts based on some condition and performs the sort operations on those divided smaller parts
	- One of the most used and popular algorithms in any programming language


---

## Partitioning
- ==Partitioning==: partitioning an array means dividing the array into two portions – the small values and the large values.
- ==Pivot==: the dividing point between the two portions, which can be any value in the array
	- e.g., the pivot below is `3` because everything to its left is smaller than `3` and everything to its right is larger than `3`
	```js
	var myArray = [1,3,5,4,8,30,10,17,7]
	```
	- e.g., the pivot below is `8`
	```js
	var myArray = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ]
	```
	- Choosing the optimum pivot value was easy for the arrays above – however, it becomes harder when the array gets bigger. As such, there are different approaches to choosing the pivot value:
		- Some people pick the left-most value (increases runtime dramatically)
		- A random value somewhere in the middle (the most common strategy)


---

## How to QuickSort
1. Choose a pivot value
2. Scan the values in the array from the left and from the right
	- `array[i]` is the left-most value; `array[j]` is the right-most value
	- Starting with `array[i]`, iterate over the values to the left of the pivot. Use `i++`. Stop when `array[i] > pivot`.
	- Then, with `array[j]`, iterate over the values to the right of the pivot. Use `i--`. Stop when `array[j] < pivot`.
3. Swap the values of `array[i]` and `array[j]`.
4. Break when `array[i] = array[j]`.