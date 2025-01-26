---
slug: 'full-screen-height-page-layout'
title: 'How to make a page layout take up entire screen vertically'
meta_title: 'Snippets | Full Screen Layout'
description: "Quick helper to create a responsive layout"
author: 'Tyson Suttle'
dateCreated: '2024-06-26'
lastUpdated: '2024-06-26'
tags: ['Set Up', "HTML", "CSS", "How To"]
draft: false
isFeaturedPost: true
---


```html
<html>
  <head> 
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.svg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>...</title> 
    <meta name="description" content="..." />
    <!-- Used by Googe -->
    <meta itemprop="description" content="..." />
  </head>

  <body class="min-h-full flex flex-col">
    <!-- <NavBarComponent /> -->
    <main class="flex-grow">
      <!-- children will go here -->
      <slot />
    </main>
    <!-- <FooterComponent /> -->
  </body>
</html>
```