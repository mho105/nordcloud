import { HighestSpeedResult, NetworkStations } from '@/domain/NetworkStations';
import { NetworkStation } from '@/domain/NetworkStation';
import { Point } from '@/domain/Point';

describe('NetworkStations', () => {
  describe('findWithHighestSpeed', () => {
    describe('when highest speed is zero', () => {
      it('should return undefined', () => {
        const networkStations = new NetworkStations(
          new NetworkStation(Point.zero, 0)
        );

        const result = networkStations.findWithHighestSpeed(Point.zero);

        expect(result).toBeUndefined();
      });
    });

    describe('when highest speed is not zero', () => {
      it('should return the network station with the highest speed', () => {
        const networkStation1 = new NetworkStation(Point.zero, 0);
        jest.spyOn(networkStation1, 'calculateSpeed').mockReturnValue(10);

        const networkStation2 = new NetworkStation(Point.zero, 0);
        const highestSpeed = 3344;
        jest
          .spyOn(networkStation2, 'calculateSpeed')
          .mockReturnValue(highestSpeed);

        const networkStations = new NetworkStations(
          networkStation1,
          networkStation2
        );

        const result = networkStations.findWithHighestSpeed(Point.zero);

        const expectedResult: HighestSpeedResult = {
          networkStation: networkStation2,
          speed: highestSpeed
        };
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
