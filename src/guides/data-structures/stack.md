# Stack

The Stack is a LIFO (last in first out) data structure. This means that whenever we are inserting into a Stack that we will always insert at the end.

You may be thinking that this seems a lot like a [Queue](queue) and yes, it has similar behaviors/operations.
In the Stack since we are always inserting or removing from the end, like we would in a Queue, we have no need of a pointer to the start (head) of the Stack. This is why we only need a `tail` pointer for every operation.

Below you'll find a visual representation of what a Stack looks like:

```js
/*
/===========/
/     2     / <-- tail, or head depending on how you look at it, latest item = removed first
/===========/
/===========/
/     28    /
/===========/
/===========/
/     3     / <-- first item inserted, last removed
/===========/
*/
```

## Operations

The following list shows us what is possible in a Stack:

- *push*
- *pop*
- *peek*

All of these operations have a runtime of **O(1)** because none of them change based on the size of the Stack.

### Push

This is an operation that you may be familiar with if you know Javascript. It's simply a method that you use when you want to add a node to the end of the Stack.

### Pop

The remove counter part of push is pop. Here we simply remove the last item that was added, where our `tail` is pointing to and return it if it exists.

### Peek

And last but not least we have peek which is used to get the last value, or lack there of, inserted into the Stack.
