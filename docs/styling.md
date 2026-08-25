# Styling Guidelines

This document outlines the guidelines and libraries used for styling components in the application.

## BeerCSS Integration with Lit Elements

To maintain consistency and leverage the features of BeerCSS within Lit-based web components, we use the integration base class provided in [lit-beercss](https://github.com/timblack1/lit-beercss).

### Usage

Instead of importing raw BeerCSS stylesheet files or using ad-hoc inline styles, components should inherit from or utilize the base classes/helpers provided by the `lit-beercss` package. This ensures styles are scoped properly inside the shadow DOM of Lit components.

## Responsive Design

All components and page layouts must be designed responsively to accommodate a wide variety of device viewport sizes:
1. **Phones**: Stack elements vertically and optimize tap targets. Use touch-friendly navigation patterns.
2. **Tablets**: Transition grid layouts and sidebars dynamically. Optimize spacing and container widths.
3. **Monitors/Desktops**: Utilize multi-column layouts, sidebars, and set maximum content widths to prevent layouts from stretching excessively.

We recommend using CSS Flexbox, Grid, and Media/Container queries to build interfaces that adapt fluidly.

