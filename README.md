# Flexy.css

A declarative flexbox framework you define right in your html.

Inspired by Polymer's [Layout Attributes](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html)

### Install

```
bower install flexy
```

```html
<link rel="stylesheet" href="bower_components/flexy/flexy.min.css">
```


## How to use

Flexy is invoked with four different html attributes, each has various different values based on the flexbox syntax.

```html

<div layout="row" justify="between" align="center">
    <h1>My Website Title</h1>
    <nav>
        <ul layout="row">
            <li ratio="1">Home</li>
            <li ratio="1">About</li>
            <li ratio="2">Contact</li>
        </ul>
    </nav>
</div>

```

Or as data attributes

```html

<div data-layout="row" data-justify="between" data-align="center">
    <h1>My Website Title</h1>
    <nav>
        <ul data-layout="row">
            <li data-ratio="1">Home</li>
            <li data-ratio="1">About</li>
            <li data-ratio="2">Contact</li>
        </ul>
    </nav>
</div>

```

#### Layout

The layout attribute adds the `display: flex` property.

It also controls `flex-direction` via the `row`, `col`, and `full-col` values.


#### Justify

The justify attribute is used to set the `justify-content` property.

Supported values are `start`, `end`, `center`, `around` and `between`


#### Align

Similar to justify, this controls the `align-items` property.

Supported values are `start`, `end`, `center` and `stretch`.


#### Ratio

The ratio property is used to control the `flex` property. It has values from 1 to 6.


#### Wrap

The wrap property is used to turn flex-wrap on depending on the current breakpoint.

Supported values are `all`, `sm`, `md`, `lg` and `xl`. Any combination can be used, eg. `wrap="sm md"`


## Responsive

To add responsive rules, there are four built in breakpoints.

 * sm (less than 40em)
 * md (between 40em and 64em)
 * lg (between 64em and 90em)
 * xl (greater than 90em)

You can prefix each value to control how that property behaves at a given breakpoint.

eg.

```html

<div layout="row sm-full-col md-row xl-col"></div>

<div ratio="1 sm-4 xl-2"></div>

```