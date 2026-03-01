export const configSchema = {
  outreachLocations: {
    _type: 'Array',
    _default: [],
    _description: 'Predefined outreach location names shown in the location selector. Users can also type a custom name.',
    _elements: { _type: 'String' },
  },
};

export type Config = {
  outreachLocations: string[];
};
