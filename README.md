# `is-playing`

A Web Component to indicate when an audio, or video, element is playing.

**[Demo](https://daviddarnes.github.io/is-playing/demo.html)** | **[Futher reading](https://darn.es/is-playing-web-component/)**

## Examples

```html
<script type="module" src="is-playing.js"></script>

<is-playing>
  <audio controls src="https://darn.es/sounds/daviddarnes.m4a"></audio>
</is-playing>
```

## Features

This Web Component allows you to:

- Add a `playing` attribute to any `audio` or `video` element currently playing (great for polyfilling the [`:playing` CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing))
- Add a `playing` attribute to itself
- Fill the `playing` attribute value on the `is-playing` element with the ID of the `audio` or `video` element playing for additional selector power

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/is-playing): `npm install @daviddarnes/is-playing`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/is-playing/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="is-playing.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://www.unpkg.com/@daviddarnes/is-playing@1.0.0/is-playing.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/is-playing@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
