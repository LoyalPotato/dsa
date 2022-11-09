package datastructures.java;

public class SNode<T> {
  public T val;
  public SNode<T> next;

  public SNode(T val, SNode<T> next) {
    this.val = val;
    this.next = next;
  }
  public SNode() {
    this.val = null;
    this.next = null;
  }

}