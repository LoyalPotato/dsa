# Array List

This is just an array that has the capability to grow automatically whenever we add more than what it can hold.

It's characterized by having a `length` and a `capacity`. The former is what tells us how many items are in the array, while the latter is for how much we can put in the array.

## Operations

The array list, being an array itself, also extends on the normal operations of an array. These are:

- *append*
- *prepend*
- *insertAt*
- *get*
- *removeAt*

### Append

Append is used to add an item to the end of the array.

In inserting operations we always need to be careful to check if we have the capacity to add the new item. If not, then we need to create a new array with a bigger capacity and then move the items from the old array into the new array and append the new item as well.

This operation is at best **O(1)** if we don't need to expand because we are just adding to the end of the array. If we need to expand though, then the operation will have a runtime of **O(n)** because we need to traverse the array to copy the items into the new array.

### Prepend

The opposite of append is prepend. This operation adds to the start of the array. And if you know you're arrays then you will know that if we want to add at the start then we need to move every element one position to the right, so that we have the first position free to add the new item. Because of that, this operation has a runtime of **O(n)**.

### Insert At

Insert at follows the same principle as prepend, but its runtime is dependant on where you insert at.

### Get

In arrays you obtain the element you want by using the idx (although in your implementation you can have a get by item too). This operation is **O(1)** when using the index and if using the item, then you need to traverse the array until you find the item which will have, in the worst case scenario, **O(n)** runtime.

### Remove At

Removing is similar to insertion in which we need to shift the whole array to the left to fill the index that was removed. Also like insertion, depending on where the removal is done, can have a runtime of **O(1)** when removing the last element of the array, or **O(n)** as a worst case, if removing the first item from the array.

## Resources

- [Array Lists - Data Structures and Algorithms - DaFluffyPotato](https://www.youtube.com/watch?v=g6ZrsZ4W5iw)
