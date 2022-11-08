type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    this.length++;
    const node: Node<T> = {
      value: item,
      next: undefined
    }
    if (this.length === 1) {
      this.tail = this.head = node;
    }

    const tail = this.tail as Node<T>;
    tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return;

    this.length--;

    const head = this.head as Node<T>;
    this.head = head.next;

    if (this.length === 0) {
      this.tail = this.head = undefined;
      return head.value;
    }

    head.next = undefined;
    
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}