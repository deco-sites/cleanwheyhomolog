// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $AddToCartButton_vtex from "./islands/AddToCartButton/vtex.tsx";
import * as $Menu from "./islands/Menu.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/AddToCartButton/vtex.tsx": $AddToCartButton_vtex,
    "./islands/Menu.tsx": $Menu,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
