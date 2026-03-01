import { configSchema } from './config-schema';

describe('configSchema', () => {
  it('defines outreachLocations as an array field', () => {
    expect(configSchema.outreachLocations).toBeDefined();
    expect(configSchema.outreachLocations._type).toBe('Array');
    expect(configSchema.outreachLocations._default).toEqual([]);
  });
});