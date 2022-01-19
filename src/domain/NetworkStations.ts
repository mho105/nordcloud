import { NetworkStation, Speed } from './NetworkStation';
import { Point } from './Point';

class NetworkStations {
  private networkStations: ReadonlyArray<NetworkStation>;

  constructor(...networkStations: ReadonlyArray<NetworkStation>) {
    this.networkStations = networkStations;
  }

  findWithHighestSpeed(point: Point): HighestSpeedResult | undefined {
    const highestSpeedResult = this.withOrderedSpeeds(point)[0];
    if (highestSpeedResult.speed === 0) {
      return undefined;
    }

    return highestSpeedResult;
  }

  private withOrderedSpeeds(point: Point): ReadonlyArray<HighestSpeedResult> {
    return this.networkStations
      .map((networkStation) => ({
        networkStation: networkStation,
        speed: networkStation.calculateSpeed(point)
      }))
      .sort((a, b) => b.speed - a.speed);
  }
}

interface HighestSpeedResult {
  readonly networkStation: NetworkStation;
  readonly speed: Speed;
}

export { NetworkStations, HighestSpeedResult };
