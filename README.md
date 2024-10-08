# Accordion Slider Tabs Responsive For React, Vue and all frameworks #


A handy library __3-in-one__ for creating __responsive accordions__, __accordion with slider__, and __tabs__. It’s easy to use and works well on all screen sizes, supporting __touch interactions__ and customizable animations.

*Main features:* 

* Accordion
* Tabs
* Touch-swipe support
* Animations
* Accordion with Slider
* Fade effect
* Carousel layout
* Responsive
* JavaScript breakpoints

See [example](https://codepen.io/vaibhav-FED/pen/abEjjZG) on the [codepen](https://codepen.io/vaibhav-FED/pen/abEjjZG).

The slider is also available as a [Javascript plugin](https://codepen.io/vaibhav-FED/pen/abEjjZG).

## Getting started ##

### 1. Get a copy of the plugin ###

You can install it through `npm`.

```
$ npm install accordion-slider-tabs-responsive
```

### 2. Load the required files ###

You can either load the minimized JS and CSS files in your HTML.

From unpkg.com:

```html
<link rel="stylesheet" href="https://unpkg.com/accordion-slider-tabs-responsive/css/style.css"/>
<script type="text/javascript" src="https://unpkg.com/accordion-slider-tabs-responsive/src/accordionTabCustomForJS.js"></script>
```


Alternatively you can import the accordion's core and each add-on from the `accordion-slider-tabs-responsive` package.

```js
import accordionTabCustom from 'accordion-slider-tabs-responsive';
```

You can also import the CSS, either the entire code or for each individual module:

```css
// Imports the entire CSS code
@import '~accordion-slider-tabs-responsive/css/style.css';
```


### 3. Create the HTML for the slider ###

```html
<div class="accordion">
    <div class="parent">
        <div class="section1 activeParent" for="section1">Lorem 1</div>
        <div class="section2" for="section2">Lorem 2</div>
        <div class="section3" for="section3">Lorem 3</div>
        <div class="section4" for="section4">Lorem 4</div>
    </div>
    <div class="child">
        <div class="section1child activeChild fade" id="section1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
        <div class="section2child" id="section2">tempor incididunt ut labore et dolore magna aliqua</div>
        <div class="section3child" id="section3">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
        <div class="section4child" id="section4">quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</div>
    </div>
</div>
```

### 4. Instantiate the slider ###

```html
<script type="text/javascript">
	document.addEventListener( 'DOMContentLoaded', () => {
		const myAccordion = {
            selector: '.accordion',
            animation: 'fadeIn',
            resize: true,
            tabs: {
                class: 'accComon',
                allOpen: 'false',
                toggleParentClass: 'commonParAcc',
                toggleChildClass: 'commonChildAcc',
                responsive: {
                    media: 376 // Tabs visible instead of accordion for screen widths less than or equal to this value
                }
            },
            slider: { // Configuration options for the slider functionality within the accordion
                active: true,
                nav: false,
                touch: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        active: false, // If false, the slider functionality is disabled for screen widths above 1000px.
                    }
                }
            }
        }
        accordionTabCustom(myAccordion)
	});
</script>
```

### Vue ###

```Vue
<template>
  <!--HTML here-->
</template>

<script>
import accordionTabCustom from 'accordion-slider-tabs-responsive';
import 'accordion-slider-tabs-responsive/css/accordionTabCustom.css';
export default {
  mounted() {
    accordionTabCustom(myAccordion)
  }
};
</script>

<style scoped>
/* Your styles here */
</style>

```

### React ###

```React
import React, { useEffect } from 'react';
import accordionTabCustom from 'accordion-slider-tabs-responsive';

const MyComponent = () => {
  useEffect(() => {
    accordionTabCustom(myAccordion);
  }, []);

  return (
    <!--HTML here-->
  );
};

export default MyComponent;

```



## Detailed usage instructions ##


* [Add-ons](#add-ons)
	* [1. Selector](#selector)
	* [2. Animation](#animation)
	* [3. Resize](#resize)
	* [4. tabs](#tabs)
	* [5. slider](#slider)

### 1. Core options ###

Name | Default value | Description
---|---|---
<span id="selector">selector</span> | .accordion | CSS selector for the accordion element. Use # for ID.
<span id="animation">Animation</span> | fadeIn | Animation effect for transitions.
<span id="resize">resize</span> | true | If set to true, the component will be responsive to window resize events.


### 2. Tabs (Convert accordion into tabs as per resposnive media resolution) ###

Name | Default value | Description
---|---|---
<span id="tabs">Class</span> | null | The class name applied to the accordion container.
<span>AllOpen</span> | false | Determines whether all tabs sections can be open simultaneously. Set to 'false' to only allow one section to be open at a time..
<span>toggleParentClass</span> | null |  Class name for the parent element .
<span>toggleChildClass</span> | null | Class name for the child elements.

### 3. Slider (Convert accordion into slider as per javascript mediapoint) ###

Name | Default value | Description
---|---|---
<span id="slider">active</span> | true |  If true, the slider functionality is enabled.
<span>nav</span> | true |  If true, navigation controls are included.
<span>touch</span> | true |  If true, touch gestures are enabled for navigation on touch devices.
<span>responsive</span> | null | Configuration for responsive behavior of the slider.


__If you're looking for a free tool to create mock APIs, check out [faux api](https://faux-api.com/). It's completely free to use.__


If you found a bug or have a feature suggestion, please submit it in the [Issues tracker](https://github.com/vaibhavER/accordion-slider-tabs-responsive/issues).


If you need extensive help with implementing the slider in your project, you can contact me.

## License ##

The plugin is available under the <a href="https://opensource.org/licenses/MIT">MIT license</a>.