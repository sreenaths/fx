import { Config } from '@stencil/core';
import { less } from '@stencil/less';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'counter',
  taskQueue: 'async',
  plugins: [
    less()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    reactOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-react/src/components.ts',
    }),
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
