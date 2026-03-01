import { getAsyncLifecycle, defineConfigSchema } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';

const moduleName = '@msi/esm-field-app';

const options = {
  featureName: 'msi-field-app',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}

export const modeSelector = getAsyncLifecycle(
  () => import('./components/ModeSelector/ModeSelector'),
  options,
);

export const outreachBanner = getAsyncLifecycle(
  () => import('./components/OutreachBanner/OutreachBanner'),
  options,
);
