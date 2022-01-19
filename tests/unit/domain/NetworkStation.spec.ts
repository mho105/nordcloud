import { NetworkStation } from '@/domain/NetworkStation';
import { Point } from '@/domain/Point';

describe('NetworkStation', () => {
  describe('calculateSpeed', () => {
    describe('when distance is greater than reach', () => {
      it('should return zero', () => {
        const distance = 100;
        const reach = 0;
        jest
          .spyOn(NetworkStation.prototype, 'calculateDistance')
          .mockReturnValue(distance);
        const networkStation = new NetworkStation(Point.zero, reach);

        const speed = networkStation.calculateSpeed(Point.zero);
        expect(speed).toBe(0);
      });
    });

    describe('when distance is less than reach', () => {
      it('should calculate the speed', () => {
        const distance = 100;
        const reach = 900;
        jest
          .spyOn(NetworkStation.prototype, 'calculateDistance')
          .mockReturnValue(distance);
        const networkStation = new NetworkStation(Point.zero, reach);

        const speed = networkStation.calculateSpeed(Point.zero);

        const expectedSpeed = (reach - distance) ** 2;
        expect(speed).toEqual(expectedSpeed);
      });
    });

    describe('when distance is equal to reach', () => {
      it('should calculate the speed', () => {
        const distance = 100;
        const reach = 100;
        jest
          .spyOn(NetworkStation.prototype, 'calculateDistance')
          .mockReturnValue(distance);
        const networkStation = new NetworkStation(Point.zero, reach);

        const speed = networkStation.calculateSpeed(Point.zero);

        const expectedSpeed = (reach - distance) ** 2;
        expect(speed).toEqual(expectedSpeed);
      });
    });
  });

  describe('calculateDistance', () => {
    describe('when points are the same', () => {
      it('should return zero', () => {
        const networkStation = new NetworkStation(Point.zero, 100);

        const distance = networkStation.calculateDistance(Point.zero);

        expect(distance).toBe(0);
      });
    });

    describe('when points are not the same', () => {
      it('should calculate the distance', () => {
        const networkStation = new NetworkStation(Point.zero, 100);
        const point = new Point(100, 100);

        const distance = networkStation.calculateDistance(point);

        const expectedDistance = Math.sqrt(
          (point.x - networkStation.location.x) ** 2 +
            (point.y - networkStation.location.y) ** 2
        );
        expect(distance).toEqual(expectedDistance);
      });
    });
  });
});
