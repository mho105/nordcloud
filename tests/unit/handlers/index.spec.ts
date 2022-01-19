import { findNetworkStationsWithHighestSpeed, handler } from '@/handlers';
import { NetworkStation } from '@/domain/NetworkStation';
import { Point } from '@/domain/Point';
import { HighestSpeedResult, NetworkStations } from '@/domain/NetworkStations';

describe('Calculate Speed', () => {
  describe('findNetworkStationsWithHighestSpeed', () => {
    describe('when network station', () => {
      it('should return network station location and speed', async () => {
        const networkStations = new NetworkStations();
        const device = Point.zero;
        const result: HighestSpeedResult = {
          networkStation: new NetworkStation(Point.zero, 0),
          speed: 10
        };
        jest
          .spyOn(networkStations, 'findWithHighestSpeed')
          .mockReturnValue(result);

        const results = Array.from(
          findNetworkStationsWithHighestSpeed([device], networkStations)
        );

        expect(results).toEqual([
          `Best network station for point ${device.x},${device.y} ` +
            `is ${result.networkStation.location.x},${result.networkStation.location.y} ` +
            `with speed ${result.speed}`
        ]);
      });
    });

    describe('when no network station', () => {
      it('should log no network station', () => {
        const networkStations = new NetworkStations();
        const device = Point.zero;
        jest
          .spyOn(networkStations, 'findWithHighestSpeed')
          .mockReturnValue(undefined);

        const results = Array.from(
          findNetworkStationsWithHighestSpeed([device], networkStations)
        );

        expect(results).toEqual([
          `No network station within reach for point ${device.x},${device.y}`
        ]);
      });
    });
  });

  describe('handler', () => {
    it('should create array from generator', async () => {
      const results = await handler();

      expect(results).toBeInstanceOf(Array);
    });
  });
});
