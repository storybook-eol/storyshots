import loadConfig from '@kadira/storybook/dist/server/config';
import getBaseConfig from '@kadira/storybook/dist/server/config/webpack.config.prod';
import fs from 'fs';
import webpack from 'webpack';
import vm from 'vm';
import path from 'path';


export const loadAndTweakWebpackConfig = (configDir) => {
  const config = loadConfig('PRODUCTION', getBaseConfig(), configDir);
  config.output = {
    path: path.resolve(configDir, './webpack'),
    filename: 'bundle.js',
  };

  config.entry = path.resolve(configDir, 'config.js');
  return config;
};

export const runWebpack = (config) => {
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err) => {
      if (err) {
        reject(err);
      } else {
        const content = fs.readFileSync(path.resolve(config.output.path, config.output.filename));
        resolve(content);
      }
    });
  });
};

export const evaluateStorybookConfig = (content, polyfillsPath) => {
  // eslint-disable-next-line  import/no-dynamic-require, global-require
  require(path.resolve(polyfillsPath));

  vm.runInThisContext(content);

  const storybook = global.storybook;
  return storybook;
};
