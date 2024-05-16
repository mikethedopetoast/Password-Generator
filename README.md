# An easy to use Password Generator by Scrimba

This project is deployed at the [link here.](https://github.com/mikethedopetoast/password-generator/)

### Project Overview

Users can:
- generate **2 passwords** with 8-16 characters
- set the password length by slider and reflect it in real-time
- copy passwords to the clipboard by clicking on them
- see hover states for the interactive elements
- switch between light and dark themes

### Techstack

- HTML
- CSS custom properties
- Flexbox
- Javascript
- Responsive Design

### Challenges

- Challenge: Switching between themes
- Solution: Assign all relevant elements with the same class, store them in a variable, and change the CSS styles through Javascript

```
checkbox.addEventListener('change', () => {
    // change the theme of the website
    const lightTheme = document.getElementsByClassName('light-theme')
    for (let i = 0; i < lightTheme.length; i++) {
         lightTheme[i].classList.toggle('dark-theme')
         }
})
```

## Resources
- [Fontawesome icons](https://fontawesome.com/)
- [Copying text to clipboard](https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/)
- [How to use classList.toggle to change CSS styles in Javascript](https://stackoverflow.com/questions/73693983/add-button-to-switch-between-light-and-dark-mode-using-two-prefers-color-scheme)
- [Light/Dark Theme Toggle with CSS and JavaScript](https://www.youtube.com/watch?v=xodD0nw2veQ)

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
