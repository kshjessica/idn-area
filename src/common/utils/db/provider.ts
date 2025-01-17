import { dbConfig } from '@/common/config/db';

export const dbProvider = {
  mongodb: 'mongodb',
  postgresql: 'postgresql',
  mysql: 'mysql',
} as const;

export type DBProvider = keyof typeof dbProvider;

export type DBProviderConfig = {
  [key in DBProvider]: {
    urlConnectionRegex: RegExp;
    features?: DBProviderFeatures;
  };
};

export type DBProviderFeatures = {
  filtering?: {
    /**
     * @link https://www.prisma.io/docs/concepts/components/prisma-client/case-sensitivity#options-for-case-insensitive-filtering
     */
    insensitive?: boolean;
  };
};

export const dbProviderConfig: DBProviderConfig = {
  mongodb: {
    urlConnectionRegex: /^mongodb(?:\+srv)?:\/\/.+$/,
    features: {
      filtering: {
        insensitive: true,
      },
    },
  },
  postgresql: {
    urlConnectionRegex: /^postgresql:\/\/.+$/,
    features: {
      filtering: {
        insensitive: true,
      },
    },
  },
  mysql: {
    urlConnectionRegex: /^mysql:\/\/.+$/,
  },
} as const;

/**
 * Check if the database provider used is equal to specified provider.
 */
export function isDBProvider(provider: DBProvider) {
  return provider === dbConfig.provider;
}
