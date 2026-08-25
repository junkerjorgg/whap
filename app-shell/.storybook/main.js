const config = {
  stories: [
    '../stories/*.stories.{js,md,mdx}',
    '../src/**/stories/*.stories.js'
  ],

  framework: {
    name: '@web/storybook-framework-web-components',
  },

  addons: ['@chromatic-com/storybook']
};

export default config;