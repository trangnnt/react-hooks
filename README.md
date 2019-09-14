# standard-hooks 🎣

Essential set of [React Hooks][] for convenient [Web API][] consumption.

[![CI status](https://badgen.net/github/status/kripod/standard-hooks)](https://github.com/kripod/standard-hooks/actions)
[![Code quality](https://badgen.net/lgtm/grade/g/kripod/standard-hooks)](https://lgtm.com/projects/g/kripod/standard-hooks)
[![Coverage status](https://badgen.net/codecov/c/github/kripod/standard-hooks)](https://codecov.io/gh/kripod/standard-hooks)
[![Package version](https://badgen.net/npm/v/standard-hooks)](https://yarnpkg.com/package/standard-hooks)

[react hooks]: https://reactjs.org/docs/hooks-intro.html
[web api]: https://developer.mozilla.org/docs/Web/API

## Key features

- 🌳 **Bundler-friendly** with tree shaking support
- 📚 **Well-documented** and type-safe interfaces
- ⚛️ **Zero-config** server-side rendering capability
- 📦 **Self-contained**, free of runtime dependencies

## Reference

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Sensors](#sensors)
  - [useDeviceMotion](#usedevicemotion)
  - [useDeviceOrientation](#usedeviceorientation)
  - [useDocumentReadiness](#usedocumentreadiness)
  - [useDocumentVisibility](#usedocumentvisibility)
  - [useGeolocation](#usegeolocation)
  - [useMouseCoords](#usemousecoords)
  - [useNetworkAvailability](#usenetworkavailability)
  - [useNetworkInformation](#usenetworkinformation)
  - [usePreferredLanguages](#usepreferredlanguages)
  - [useWindowScrollCoords](#usewindowscrollcoords)
  - [useWindowSize](#usewindowsize)
- [Storage](#storage)
  - [useLocalStorage](#uselocalstorage)
  - [useSessionStorage](#usesessionstorage)
- [Scheduling](#scheduling)
  - [useEventListener](#useeventlistener)
  - [useInterval](#useinterval)

### Sensors

#### useDeviceMotion

Tracks acceleration and rotation rate of the device.

##### Examples

```javascript
const Example = () => {
  const { acceleration, rotationRate, interval } = useDeviceMotion();
  // ...
};
```

Returns **EventArgs&lt;[DeviceMotionEvent](https://developer.mozilla.org/docs/Web/API/DeviceMotionEvent)>** Own properties of the last corresponding event.

#### useDeviceOrientation

Tracks physical orientation of the device.

##### Examples

```javascript
const Example = () => {
  const { alpha, beta, gamma } = useDeviceOrientation();
  // ...
};
```

Returns **EventArgs&lt;[DeviceOrientationEvent](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent)>** Own properties of the last corresponding event.

#### useDocumentReadiness

Tracks loading state of the page.

##### Examples

```javascript
const Example = () => {
  const documentReadiness = useDocumentReadiness();
  if (documentReadiness === 'interactive') {
    // You may interact with any element of the document from now
  }
  // ...
};
```

Returns **[DocumentReadyState](https://developer.mozilla.org/docs/Web/API/Document/readyState)** Readiness of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), which is `'loading'` by default.

#### useDocumentVisibility

Tracks visibility of the page.

##### Examples

```javascript
const Example = () => {
  const documentVisibility = useDocumentVisibility();
  if (documentVisibility === 'hidden') {
    // Reduce resource utilization to aid background page performance
  }
  // ...
};
```

Returns **[VisibilityState](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)** Visibility state of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), which is `'visible'` by default.

#### useGeolocation

Tracks geolocation of the device.

##### Parameters

- `options` **[PositionOptions](https://developer.mozilla.org/docs/Web/API/PositionOptions)?** Additional watching options.
- `errorCallback` **function (error: [PositionError](https://developer.mozilla.org/docs/Web/API/PositionError)): void?** Method to execute in case of an error, e.g. when the user denies location sharing permissions.

##### Examples

```javascript
const Example = () => {
  const geolocation = useGeolocation();
  if (geolocation) {
    const { coords } = geolocation;
  }
  // ...
};
```

Returns **([Position](https://developer.mozilla.org/docs/Web/API/Position) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** Locational data, or `undefined` when unavailable.

#### useMouseCoords

Tracks mouse position.

##### Examples

```javascript
const Example = () => {
  const [mouseX, mouseY] = useMouseCoords();
  // ...
};
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useNetworkAvailability

Tracks information about the network's availability.

⚠️ _This attribute is inherently unreliable. A computer can be connected to a network without having internet access._

##### Examples

```javascript
const Example = () => {
  const isOnline = useNetworkAvailability();
  // ...
};
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `false` if the user agent is definitely offline, or `true` if it might be online.

#### useNetworkInformation

Tracks information about the device's network connection.

⚗️ _The underlying technology is experimental. Please be aware about browser compatibility before using this in production._

##### Examples

```javascript
const Example = () => {
  const networkInformation = useNetworkInformation();
  if (networkInformation) {
    const { effectiveType, downlink, rtt, saveData } = networkInformation;
  }
  // ...
};
```

Returns **([NetworkInformation](https://developer.mozilla.org/docs/Web/API/NetworkInformation) \| [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** Connection data, or `undefined` when unavailable.

#### usePreferredLanguages

Tracks preferred languages of the user.

##### Examples

```javascript
const Example = () => {
  const preferredLanguages = usePreferredLanguages();
  // ...
};
```

Returns **ReadonlyArray&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** An array of [BCP 47](https://tools.ietf.org/html/bcp47) language tags, ordered by preference with the most preferred language first.

#### useWindowScrollCoords

Tracks window scroll position.

##### Examples

```javascript
const Example = () => {
  const [windowScrollX, windowScrollY] = useWindowScrollCoords();
  // ...
};
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useWindowSize

Tracks window size.

##### Examples

```javascript
const Example = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  // ...
};
```

Returns **Readonly&lt;\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]>** Dimensions `[width, height]`, falling back to `[0, 0]` when unavailable.

### Storage

#### useLocalStorage

- **See: [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface**

Stores a key/value pair statefully in [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage).

##### Parameters

- `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Identifier to associate the stored value with.
- `initialValue` **(T | function (): T | null)** Value used when no item exists with the given key. Lazy initialization is available by using a function which returns the desired value. (optional, default `null`)
- `errorCallback` **function (error: (DOMException | [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError))): void?** Method to execute in case of an error, e.g. when the storage quota has been exceeded or trying to store a circular data structure.

##### Examples

```javascript
const Example = () => {
  const [visitCount, setVisitCount] =
    useLocalStorage < number > ('visitCount', 0);
  useEffect(() => {
    setVisitCount(count => count + 1);
  }, []);
  // ...
};
```

Returns **\[T, React.Dispatch&lt;React.SetStateAction&lt;T>>]** A statefully stored value, and a function to update it.

#### useSessionStorage

- **See: [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface**

Stores a key/value pair statefully in [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage).

##### Parameters

- `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Identifier to associate the stored value with.
- `initialValue` **(T | function (): T | null)** Value used when no item exists with the given key. Lazy initialization is available by using a function which returns the desired value. (optional, default `null`)
- `errorCallback` **function (error: (DOMException | [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError))): void?** Method to execute in case of an error, e.g. when the storage quota has been exceeded or trying to store a circular data structure.

##### Examples

```javascript
const Example = () => {
  const [name, setName] = useSessionStorage < string > ('name', 'Anonymous');
  // ...
};
```

Returns **\[T, React.Dispatch&lt;React.SetStateAction&lt;T>>]** A statefully stored value, and a function to update it.

### Scheduling

#### useEventListener

- **See: [Event reference on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)**

Listens to an event while the enclosing component is mounted.

##### Parameters

- `target` **[EventTarget](https://developer.mozilla.org/docs/Web/API/EventTarget)** Target to listen on, possibly a DOM element or a remote service connector.
- `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of event (case-sensitive).
- `callback` **[EventListener](https://developer.mozilla.org/docs/Web/API/EventListener)** Method to execute whenever the event fires.
- `options` **AddEventListenerOptions?** Additional listener characteristics.

##### Examples

```javascript
const Example = () => {
  useEventListener('error', () => {
    console.log('A resource failed to load.');
  });
  // ...
};
```

#### useInterval

Repeatedly calls a function with a fixed time delay between each call.

📝 _Timings may be inherently inaccurate, due to the implementation of [`setInterval`](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) under the hood._

##### Parameters

- `callback` **function (): void** Method to execute periodically.
- `delayMs` **([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | null)** Time, in milliseconds, to wait between executions of the specified function. Set to `null` for pausing.

##### Examples

```javascript
const Example = () => {
  useInterval(() => {
    // Custom logic to execute each second
  }, 1000);
  // ...
};
```

## Performance tips

- Avoid layout thrashing by [debouncing or throttling](https://css-tricks.com/debouncing-throttling-explained-examples/) high frequency events, e.g. scrolling or mouse movements
- Move non-primitive hook parameters to an outer scope or memoize them with [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo), e.g.:

  ```tsx
  const geolocationOptions = { enableHighAccuracy: true };
  const Example = () => {
    const geolocation = useGeolocation(geolocationOptions);
    // ...
  };
  ```

## Contributing

Thanks for being interested in contributing! Please read our [contribution guidelines](./CONTRIBUTING.md) to get started.

### Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kripod"><img src="https://avatars3.githubusercontent.com/u/14854048?v=4" width="100px;" alt="Kristóf Poduszló"/><br /><sub><b>Kristóf Poduszló</b></sub></a><br /><a href="#maintenance-kripod" title="Maintenance">🚧</a> <a href="https://github.com/kripod/standard-hooks/commits?author=kripod" title="Code">💻</a> <a href="https://github.com/kripod/standard-hooks/commits?author=kripod" title="Tests">⚠️</a> <a href="https://github.com/kripod/standard-hooks/commits?author=kripod" title="Documentation">📖</a> <a href="#example-kripod" title="Examples">💡</a> <a href="#ideas-kripod" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kripod" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://twitter.com/dan_abramov"><img src="https://avatars0.githubusercontent.com/u/810438?v=4" width="100px;" alt="Dan Abramov"/><br /><sub><b>Dan Abramov</b></sub></a><br /><a href="https://github.com/kripod/standard-hooks/commits?author=gaearon" title="Code">💻</a> <a href="#blog-gaearon" title="Blogposts">📝</a> <a href="#ideas-gaearon" title="Ideas, Planning, & Feedback">🤔</a> <a href="#tutorial-gaearon" title="Tutorials">✅</a></td>
    <td align="center"><a href="https://donavon.com"><img src="https://avatars3.githubusercontent.com/u/887639?v=4" width="100px;" alt="Donavon West"/><br /><sub><b>Donavon West</b></sub></a><br /><a href="https://github.com/kripod/standard-hooks/commits?author=donavon" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
