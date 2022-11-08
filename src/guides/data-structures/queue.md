
# Queue

<!-- TODO: Don't forget to add runtime of each operation -->

A Queue is a FIFO, or first in first out, structure. This means that the first node to enter the list is the first node to be removed.

If you know what a [Stack](./stack.md) is then you can picture a Queue to be the same, but instead of the most recent item being removed, it's the first.

It is composed by nodes with a value and pointers to the next node. There is a `head` pointer, which denotes the first node in the queue and a `tail` that denotes exactly what it suggests, the last node of the list.

Since it is a list you may be wondering if insertion or deletion at any node is possible, but in a Queue, insertion is done always at the last node (back/tail) and the removal, like mentioned before, is done at the first node.

Here's a simple visual representation of a Queue:

```js
/*
  /===========/      /===========/    /===========/
 /     5     / --> /     8     / --> /     0     /
/===========/    /===========/      /===========/

  (head)                              (tail)

Remove first (head) insert at the end (tail)
*/
```

## Operations

In a Queue there are three main operations that can be done:

- *enqueue*
- *deque*
- *peek*

### Enqueue

This method is used to add items to the queue. If you're doing the maintence of the items, then don't forget to handle the `length`, `head` and `tail` because these may change depending on when you are doing this operation.

### Deque

Deque is the method used for removing the first node from the queue.

Similar to [enqueue](#enqueue), if you're doing the management, don't forget to reduce the `length` and handle the `head` and `tail` in case of removing the last node in the queue.

### Peek

Peek is the simplest of the lot and it's just a method to get the first node's value, or lack thereof.

This does not mutate the state of the queue.

## Uses

There are some cases in which you need to use a data structure that keeps an order of insertion and removal.

<!-- TODO: Search some cases in which you could/should use a queue. -->