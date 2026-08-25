# Styling Guidelines

This document outlines the guidelines and libraries used for styling components in the application.

## BeerCSS Integration with Lit Elements

To maintain consistency and leverage the features of BeerCSS within Lit-based web components, we use the integration base class provided in [lit-beercss](https://github.com/timblack1/lit-beercss).

### Usage

Instead of importing raw BeerCSS stylesheet files or using ad-hoc inline styles, components should inherit from or utilize the base classes/helpers provided by the `lit-beercss` package. This ensures styles are scoped properly inside the shadow DOM of Lit components.
