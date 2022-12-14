package datastructures.java;

public class Queue<T> {

  int length;
  QNode<T> tail;
  QNode<T> head;

  public Queue() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public void Enqueue(T item) {
    if (item == null) return;
    this.length++;
    QNode<T> newNode = new QNode<T>();
    newNode.val = item;
    if (this.length == 1) {
      this.tail = this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }
  }

  public T Deque() {
    if (this.length == 0) return null;
    this.length--;

    QNode<T> prevHead = this.head;
    prevHead.next = null;

    this.head = this.head.next;
    if (this.length == 0) {
      this.tail = null;
    }
    return prevHead.val;
  }

  // peek
  public T Peek() {
    if(this.length == 0) return null;
    return this.head.val;
  }

}