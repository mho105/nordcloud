import { handler } from '@/handlers';

describe('Calculate Speed', () => {
  it('should calculate speeds', async () => {
    const results = await handler();

    expect(results).toEqual([
      'Best network station for point 0,0 is 0,0 with speed 81',
      'No network station within reach for point 100,100',
      'Best network station for point 15,10 is 5,5 with speed 3.31',
      'Best network station for point 18,18 is 20,20 with speed 10.06',
      'Best network station for point 13,13 is 5,5 with speed 2.84',
      'No network station within reach for point 25,99'
    ]);
  });
});
