---
path: netlify-forms-in-gatsby
date: 2020-03-12T20:23:34.544Z
title: Why Netlify forms are not working in my Gatsby site?
description: Let's understand what is happening and how to fix it
---

Netlify forms are super handy, it allow us to have forms on our Netlify server sites without any configuration whatsoever.
But it does not work just like that, we need to make a few aditional steps in order to work with our Gatsby site.

1.- In the JSX form, add a hidden form-name field 

```js
<input type="hidden" name="form-name" value="the-name-of-the-html-form" />.
```

2.- add the data-netlify="true" to your form

```js
<form name="the-name-of-the-html-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  {/* You still need to add the hidden input with the form name to your JSX form */}
  <input type="hidden" name="form-name" value="the-name-of-the-html-form" />
  ...
</form>
```

3.- Optional, add a thank you page after the submit button for a better user experience.

You can see a variety of demos in this page

https://gatsby-netlify-form-example-v2.netlify.com/


