import { Point } from '@/domain/Point';
import { NetworkStations } from '@/domain/NetworkStations';
import { NetworkStation } from '@/domain/NetworkStation';

const devices: ReadonlyArray<Point> = [
  new Point(0, 0),
  new Point(100, 100),
  new Point(15, 10),
  new Point(18, 18),
  new Point(13, 13),
  new Point(25, 99)
];

const networkStations = new NetworkStations(
  new NetworkStation(new Point(0, 0), 9),
  new NetworkStation(new Point(20, 20), 6),
  new NetworkStation(new Point(10, 0), 12),
  new NetworkStation(new Point(5, 5), 13),
  new NetworkStation(new Point(99, 25), 2)
);

async function handler(): Promise<ReadonlyArray<string>> {
  return Array.from(
    findNetworkStationsWithHighestSpeed(devices, networkStations)
  );
}

function* findNetworkStationsWithHighestSpeed(
  devices: ReadonlyArray<Point>,
  networkStations: NetworkStations
): Generator<string> {
  for (const device of devices) {
    const result = networkStations.findWithHighestSpeed(device);

    if (result) {
      yield `Best network station for point ${device.x},${device.y} ` +
        `is ${result.networkStation.location.x},${result.networkStation.location.y} ` +
        `with speed ${result.speed}`;
    } else {
      yield `No network station within reach for point ${device.x},${device.y}`;
    }
  }
}

export { handler, findNetworkStationsWithHighestSpeed };
