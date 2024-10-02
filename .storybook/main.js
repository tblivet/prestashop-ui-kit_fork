const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
  ],
  webpackFinal: (config) => {
    config.module.rules[3].use = 'html-loader?minimize=false';
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  addonActionsTheme: {
    BASE_COLOR: 'red',
  },
  core: {
    builder: 'webpack5',
  },
};
