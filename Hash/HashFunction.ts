class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    hash() {
        return `${this.x},${this.y}`
    }

    static _(x: number, y: number) {
        return new Point(x, y).hash();
    }
}

let map: Map<string, number> = new Map<string, number>();

map.set(Point._(0, 5), 1);
map.set(Point._(0, 8), 4);
console.log(map);