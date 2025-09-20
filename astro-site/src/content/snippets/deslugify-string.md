---
title: 'Slugify & Deslugify'
description: "Quick helpers to create a slugified or deslugified string"
dateCreated: '2024-06-26'
lastUpdated: '2025-09-19'
language: "Typescript"
tags: ["Utility Function", "String Manipulation"]
draft: false
isFeaturedPost: true
---

```ts

function capitalizeFirstLetter(str: string) {
  if (str.length == 0) return ""
  if (str.length == 1) return str[0].toUpperCase()
  return str[0].toUpperCase() + str.substring(1);
}

function deSlugifyStr(str: string) {
  // if string doesn't contain a '-' or '_' just return back the capitalized word
  if (!str.includes('-') && !str.includes('_'))
    return capitalizeFirstLetter(str);

  // replaces '-' or '_ with ' '
  const StrWithDashesAndHypensReplacedWithSpaces = str
    .replace(/-/g, '  ')
    .replace(/_/g, '  ');

  let deSlugifiedStr = '';
  StrWithDashesAndHypensReplacedWithSpaces.split(' ').forEach((char) => {
    deSlugifiedStr += !!char ? capitalizeFirstLetter(char) : ' ';
  });
  return deSlugifiedStr;
}


function slugifyString(str: string) {
  if (typeof str !== 'string') throw new TypeError(`Invalid value passed to slugifyString!: Expected string but received ${typeof str}`);
  
  return (
    str
      .trim()
      .toLowerCase()
      //Remove all characters except alphanumeric characters and spaces
      .replace(/[^\w\s]/gi, '')
      //replace all spaces with -
      .replace(/[^a-z0-9]/gi, '-')
  );
}
```