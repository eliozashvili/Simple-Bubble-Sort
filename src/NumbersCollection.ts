export class NumbersCollection {
  constructor(public data: number[]) {}
  // when using get you can you length method like this
  // smth.length instead of smth.length()
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
