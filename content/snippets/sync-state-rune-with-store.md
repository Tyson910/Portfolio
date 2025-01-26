---
title: 'Sync State with Store'
meta_title: 'Snippets | Sync State with Store'
description: "How to sync a state rune to a svelte store"
author: 'Tyson Suttle'
dateCreated: '2025-01-04'
lastUpdated: '2025-01-04'
tags: ['Svelte']
draft: true
isFeaturedPost: false
---


```svelte
  <script lang="ts">
    let count = writable(10);

    // ideally use a derived
    // but these are read-only
    let countProxyDerived = $derived(count);

    // if you need to read/write to a store but you don't want to use the `$` 
    // or you're unable to convert a store to a rune b/c of legacy code or a third party lib
    let countProxyState = $state(0);

    count.subscribe((value) => {
      // this will update the countProxyState automagically
      countProxyState = value
    })

    // reset count & countProxyDerived & countProxyState to zero
    function reset(){
      $count = 0; // or you can use count.set(0)
    }
  </script>
```
