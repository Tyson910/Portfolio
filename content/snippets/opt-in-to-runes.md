---
title: 'Opt in to Runes Mode'
meta_title: 'Snippets | Opt in to Runes Mode'
description: "How to opt-in to runes mode in Svelte 5 either on a component by component basis or project wide."
author: 'Tyson Suttle'
dateCreated: '2024-11-12'
lastUpdated: '2024-11-12'
tags: ['Svelte']
draft: false
isFeaturedPost: false
---

To opt-in on a project wide level add the following to your svelte.config.js

```ts
  compilerOptions: {
    runes: true,
  }
```

To opt-in on a per-component basis add the following tag to any component

```tsx
<svelte:options runes={true} /> 
```




To opt-out on a per-component basis add the following tag to any component

```tsx
<svelte:options runes={false} /> 
```