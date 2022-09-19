![Repo Banner](./.github/repo-banner.png)

# ultralight-spinner

[![Blazing Fast](https://badgen.net/npm/v/ultralight-spinner)](https://npm.im/ultralight-spinner)
[![Blazing Fast](https://badgen.net/bundlephobia/minzip/ultralight-spinner)](https://npm.im/ultralight-spinner)

A 0.83 kb loading spinner component for React.

## Install

### With npm

```sh
npm i the-platform --save
```

### Or with yarn

```sh
yarn add the-platform
```

## The component

### `<Spinner>`

#### Props

- `size?: number` Size (width and height) of the spinner in pixels (default: 20)
- `strokeWidth?: number` Width of the spinner stroke in pixel (default: 2.5)
- `rotateSpeed?: number` Time it takes for a full rotation in seconds (default: 1)
- anything else you can pass to an `<svg>` tag except children

```js
import { Spinner } from "ultralight-spinner"

function App() {
  return (
    <div>
      <Spinner strokeWidth={3} />
    </div>
  )
}

export default App
```

MIT License
