---
path: window-is-not-defined-ssr
date: 2020-03-11T20:23:34.544Z
title: Window is not defined SSR
description: How to avoid this error in server side rendering
---

Window it's a variable only availible for us when we are not server side rendering our content, as the case is with this web, is rendered in Netlify.
when I was trying to change the color of my footer depending in wich page I was (for contrast porpuses), the build in Netlify failed
The error was that I was using window in SSR

Instead what you can do it's the following

```js
import React from 'react'
import { globalHistory as history } from '@reach/router'

const SomeComponent = () => {
  const { location, navigate } = history
  console.log( location ) // **will change with every location update**
  return (
     <div>
          use you {location} here
     </div>
  )
}
```

whit this method, we get the location eveytime we change routes in our app and will work in SSR.





