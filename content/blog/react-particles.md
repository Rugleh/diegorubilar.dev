---
path: react-particles-js
date: 2020-03-10T20:23:34.544Z
title: React Particles
description: Let's study the basics of React Particles
---
React Particles it's the package that is letting me run those animations in the tittles of each blog entry, one of the advantage of this is it need 0 configuration.

To start using it you should go to its site

<!--StartFragment-->

<https://www.npmjs.com/package/react-particles-js>

<!--EndFragment-->

Install it

```javascript
npm install react-particles-js || yarn add react-particles-js
```

import it to your React component

```javascript
import Particles from 'react-particles-js';
```

And use it first with the basic configuration

```javascript
class App extends Component{
  
    render(){
        return (
            <Particles />
        );
    };
 
}
```

Yes, we use it just as any component in React <Particles /> it's one more component with a few props and configurations that you can edit.