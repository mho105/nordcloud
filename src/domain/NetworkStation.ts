import { Point } from './Point';

type Reach = number;
type Speed = number;
type Distance = number;

class NetworkStation {
  constructor(readonly location: Point, readonly reach: Reach) {}

  calculateSpeed(point: Point): Speed {
    const distance = this.calculateDistance(point);
    if (distance > this.reach) {
      return 0;
    }

    const dp2 = (number: number) => Number(number.toFixed(2));

    return dp2((this.reach - distance) ** 2);
  }

  calculateDistance(point: Point): Distance {
    const pow2 = (number: number) => number ** 2;

    // distance between two points calculated using
    // √[(x₂ - x₁)² + (y₂ - y₁)²]
    return Math.sqrt(
      pow2(point.x - this.location.x) + pow2(point.y - this.location.y)
    );
  }
}

export { Speed, NetworkStation };
