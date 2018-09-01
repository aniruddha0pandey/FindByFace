# [Find By Face](https://demos.creative-tim.com/material-kit-react) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Material%20Kit%20PRO%20is%20a%20Bootstrap%20UI%20Kit%20with%20a%20fresh,%20new%20design%20inspired%20by%20Google's%20Material%20Design%20%E2%9D%A4%EF%B8%8Fhttps%3A//demos.creative-tim.com/material-kit-pro/presentation.html%20%23bootstrap%20%23material%20%23design%20%23uikit%20%23premium%20%20via%20%40CreativeTim)


![build](https://raw.githubusercontent.com/dwyl/repo-badges/master/highresPNGs/build-passing.png) ![version](https://img.shields.io/badge/version-1.2.0-blue.svg)  [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/material-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-kit-react/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/material-kit-react.svg?maxAge=2592000)](https://github.com/creativetimofficial/material-kit-react/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Presentation Image](https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg)

## Table of Contents


* [Demo]()
* [Frameworks-Used](#frameworks-used)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)


## Frameworks Used

- [Nodejs](nodejs/node) by Ryan Dahl.
- [Reactjs](facebook/react) by Facebook.
- [Material Kit React](creativetimofficial/material-kit-react) by Creative Tim.


## Dependencies

 - [NodeJs](https://nodejs.org/en/download/) and [npm]()
 - [Conda]()
 
```
▖~ git clone https://github.com/aniruddha0pandey/FindByFace.git && cd FindByFace
▖~ 
```


## Installation

- Downloads

```
▖~ git clone https://github.com/aniruddha0pandey/FindByFace.git && cd FindByFace
▖~ 
```

- Build
```
▖~ npm install
▖~ npm start
```
<sub>Navigate to http://localhost:3000/ if not automatically redirected.</sub>

- Deploy
```
▖~ npm install -g serve
▖~ serve -s build
```

## File Structure
Within the download you'll find the following directories and files:

```
FindByFace/
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── routes
    │   └── index.jsx
    ├── assets
    │   ├── img
    │   │   └── kit
    │   │       ├── faces
    │   │       └── free
    │   │           └── examples
    │   ├── jss
    │   │   ├── material-kit-react
    │   │   │   ├── components
    │   │   │   └── views
    │   │   │       ├── componentsSections
    │   │   │       └── landingPageSections
    │   │   └── material-kit-react.jsx
    │   └── scss
    │       ├── core
    │       │   ├── mixins
    │       │   └── variables
    │       ├── plugins
    │       └── material-kit-react.scss
    ├── components
    │   ├── Badge
    │   │   └── Badge.jsx
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── CardBody.jsx
    │   │   ├── CardFooter.jsx
    │   │   └── CardHeader.jsx
    │   ├── Clearfix
    │   │   └── Clearfix.jsx
    │   ├── CustomButtons
    │   │   ├── Button.jsx
    │   │   └── IconButton.jsx
    │   ├── CustomDropdown
    │   │   └── CustomDropdown.jsx
    │   ├── CustomInput
    │   │   └── CustomInput.jsx
    │   ├── CustomLinearProgress
    │   │   └── CustomLinearProgress.jsx
    │   ├── CustomTabs
    │   │   └── CustomTabs.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Grid
    │   │   ├── GridContainer.jsx
    │   │   └── ItemGrid.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── HeaderLinks.jsx
    │   ├── InfoArea
    │   │   └── InfoArea.jsx
    │   ├── NavPills
    │   │   └── NavPills.jsx
    │   ├── Pagination
    │   │   └── Pagination.jsx
    │   ├── Snackbar
    │   │   └── SnackbarContent.jsx
    │   └── Typography
    │       ├── Danger.jsx
    │       ├── Info.jsx
    │       ├── Muted.jsx
    │       ├── Primary.jsx
    │       ├── Quote.jsx
    │       ├── Small.jsx
    │       ├── Success.jsx
    │       └── Warning.jsx
    └── views
        ├── Components
        │   ├── Components.jsx
        │   └── Sections
        │       ├── SectionBasics.jsx
        │       ├── SectionCarousel.jsx
        │       ├── SectionCompletedExamples.jsx
        │       ├── SectionDownload.jsx
        │       ├── SectionExamples.jsx
        │       ├── SectionJavascript.jsx
        │       ├── SectionNavbars.jsx
        │       ├── SectionNotifications.jsx
        │       ├── SectionPills.jsx
        │       ├── SectionSignup.jsx
        │       ├── SectionTabs.jsx
        │       └── SectionTypography.jsx
        ├── LandingPage
        │   ├── LandingPage.jsx
        │   └── Sections
        │       ├── ProductSection.jsx
        │       ├── TeamSection.jsx
        │       └── WorkSection.jsx
        ├── ProfilePage
        │   └── ProfilePage.jsx
        └── SignupPage
            └── SignupPage.jsx
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">



## Reporting Issues

We use GitHub Issues as the official bug tracker. Standard Issue/Bug request is supported.
