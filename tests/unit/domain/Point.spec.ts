import { Point } from '@/domain/Point';

describe('Point', () => {
  describe('zero', () => {
    it('should return a point with x:0, y:0', () => {
      const point = Point.zero;

      expect(point.x).toBe(0);
      expect(point.y).toBe(0);
    });
  });
});
