---
title: 'Convert a json object to a comma seperated value (CSV) string'
meta_title: 'Snippets | JSON to CSV'
description: "How to convert a json object to a comma seperated value string"
author: 'Tyson Suttle'
dateCreated: '2024-06-26'
lastUpdated: '2024-06-26'
tags: ['Typescript', "Utility Function", "String Manipulation"]
draft: false
isFeaturedPost: true
---

```ts
function jsonToCsv(items: Object[]): string {
  if (items.length == 0 || !items) return '';
  const header = Object.keys(items[0]) as readonly (keyof (typeof items)[number])[];

  const headerString = header.join(',');

  // handle null or undefined values here
  const replacer = (_key: unknown, value: unknown) =>
    !!value ? value.toString() : '';

  const rowItems = items.map((row) => {
    return header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(',');
  });

  // join header and body, and break into separate lines
  const csv = [headerString, ...rowItems].join('\r\n');
  return csv;
}
```