---
title: "Generic Types"
description: "Learn how to create flexible, reusable types with TypeScript generics"
dateCreated: "2025-12-03"
lastUpdated: "2025-12-03"
tags: ["TypeScript University", "TypeScript", "Generics"]
isDraft: false
isFeaturedPost: true
difficulty: "Foundational"
lessonType: "tutorial"
topicCategory: "Generics"
---

The concept of composition, or the idea that "I want to use this same piece of
logic in multiple places," is the foundation of software design and
development. This usually manifests as methods or functions that rely on an
input and can perform logic or generate an expected output.

You can think of generic types as a special type that can accept a type as an
input and return an output based on the input type. An example would be a shared
`APIResult` type.

```ts
type APIResponse<TStatusCode, TData> = TStatusCode extends 200
  ? APISuccessResult<TData>
  : APIErrorResult<TStatusCode>;
```

Don't let the syntax scare you away. I'll break down each piece soon. We'll
start by defining a shared mock Product table for demo purposes.

```ts twoslash
type Product = {
  id: string;
  price: number;
  name: string;
  categories: string[];
};

type GetProductsReturn = {
  data: Product[];
  page: number;
  next_page: number | null;
  status: 200;
};

type GetProducts = () => GetProductsReturn;

type Order = {
  id: string;
  product_id: string;
  quantity: number;
};

type GetOrdersForUserReturn = {
  data: Order[];
  page: number;
  next_page: number | null;
  status: 200;
};

type GetOrdersForUser = (userId: string) => GetOrdersForUserReturn;
```

These declarations work great for these simple examples, but they can be a
burden to maintain. For example, if you look closely the `next_page` property
for each return type is `number | null`. This is a typo. Each `next_page`
should be a URL of type `string | null`. Now imagine having to maintain more
than two tables.

For this reason, we want to define what a successful API response is shaped
like.

```ts
type APISuccessResult<T> = {
  data: T;
  page: number;
  next_page: string | null;
  status: 200;
};
```

The `T` is the input type. So if a consumer passes in a string, then
`APISuccessResult["data"]` is of type string.

```ts twoslash
type Product = {
  id: string;
  price: number;
  name: string;
  categories: string[];
};

type APISuccessResult<T> = {
  data: T;
  page: number;
  next_page: string | null;
  status: 200;
};

type ProductSearchApiResult = APISuccessResult<Product>;
```

We can also constrain the input type by using the `extends` keyword.

```ts twoslash
type APIErrorResult<T extends 400 | 500> = {
  error: {
    message: string;
  };
  status: T;
};

type ValidProductSearchApiResult = APIErrorResult<400>;

// @errors: 2344
type InvalidProductSearchApiResult = APIErrorResult<200>;
```
