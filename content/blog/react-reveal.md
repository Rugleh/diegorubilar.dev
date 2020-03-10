---
path: react-reveal
date: 2020-03-11T20:23:34.544Z
title: React-reveal simple animations for React
description: Super helpful and interesting framework for simple animations on React
---

React Reveal it's an amazing framework that let us make simple animations on our web and apps using react. we use animation as their where simple HTML divs that contains the elemennts that will be animated

Let's start by installing it

```js
npm i react-reveal --save
```

and add it to our component or page where we will use it, for example I will be using the fade effect so I will import only that

```js
import Fade from 'react-reveal/Fade';
```

Then, in your component use it like if it where a div that enclousure everything that will be affected by the fade effect

```js
class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade bottom>
          <h1>React Reveal</h1>
        </Fade>
      </div>
    );
  }
}
```

That's all, you can edit a few thing to make it look better and config the animations

This is de demo page with a few more examples

https://www.react-reveal.com/examples/



