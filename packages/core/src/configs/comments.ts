import type { TypedFlatConfigItem } from '../types';

export function comments(): TypedFlatConfigItem[] {
  return [
    {
      name: 'kit/comments/disable',
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      rules: {
        'spaced-comment': [
          'error',
          'always',
          {
            block: { balanced: true, exceptions: ['*'], markers: ['/'] },
            line: { exceptions: ['/', '-'], markers: ['/'] },
          },
        ],
      },
    },
  ];
}
