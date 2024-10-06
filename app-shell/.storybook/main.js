const config = {
  stories: ['../stories/*.stories.{js,md,mdx}'],

  framework: {
    name: '@web/storybook-framework-web-components',
  },

  addons: ['@chromatic-com/storybook']
};

export default config;