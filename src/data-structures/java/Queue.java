public class Node<T> {
  T val;
  Node<T> next;
}

public class Queue<T> {

  int length;
  Node<T> tail;
  Node<T> head;

  public Queue() {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  public void Enqueue(T item) {
    if (item == null) return;
    this.length++;
    Node<T> newNode = new Node<T>();
    newNode.val = item;
    if (this.length == 1) {
      this.tail = this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }
  }

  public T Deque() {
    if (this.length == 0) return;
    this.length--;

    Node<T> prevHead = this.head;
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
  }

}