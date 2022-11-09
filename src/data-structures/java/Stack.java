public class Node<T> {
  public T val;
  public Node<T> next;

  public Node(T val, Node<T> next) {
    this.val = val;
    this.next = next;
  }
  public Node() {
    this.val = null;
    this.next = null;
  }

}

public class Stack<T> {
  public int length; 
  private Node<T> tail;

  public Stack() {
    this.length = 0;
    this.tail = null;
  }

  public void Push(T item) {
    this.length++;
    Node<T> newNode = new Node<>();
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

    Node<T> prevTail = this.tail;

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