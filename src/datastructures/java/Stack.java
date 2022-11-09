package datastructures.java;

public class Stack<T> {
  public int length; 
  private SNode<T> tail;

  public Stack() {
    this.length = 0;
    this.tail = null;
  }

  public void Push(T item) {
    this.length++;
    SNode<T> newNode = new SNode<>();
    newNode.val = item;

    if (this.length == 1) {
      this.tail = newNode;
    } else {
      newNode.next = this.tail;
      this.tail = newNode;      
    }

  }

  public T Pop() {
    if(this.tail == null) return null;

    this.length--;

    SNode<T> prevTail = this.tail;

    if (this.length == 0) {
      this.tail = null;
    } else {
      this.tail = this.tail.next;    
    }

    return prevTail.val;
  }

  public T Peek() {
    return this.tail != null ? this.tail.val : null;
  }
}