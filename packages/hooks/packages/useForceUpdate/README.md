# useForceUpdate
> 👿 force update component
----

[![version](https://img.shields.io/npm/v/@snappmarket/use-force-update.svg?style=flat-square)](https://www.npmjs.com/package/@snappmarket/use-force-update)
[![downloads](https://img.shields.io/npm/dm/@snappmarket/use-force-update.svg?style=flat-square)](http://www.npmtrends.com/@snappmarket/use-force-update)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/use-force-update.svg?style=flat-square)](https://github.com/snappmarket/frontend-toolbox/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/snappmarket/frontend-toolbox.svg?style=social)](https://github.com/snappmarket/frontend-toolbox/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/snappmarket/frontend-toolbox.svg?style=social)](https://github.com/snappmarket/frontend-toolbox/stargazers)


## get started 
We provide two way of using this package `single` or `multi` :
```bash
npm i @snappmarket/use-force-update
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useForceUpdate from '@snappmarket/use-force-update';
// or 
// import { useForceUpdate } from '@snappmarket/hooks';


const MyComponenet = props => {
  const forceUpdate = useForceUpdate(null);

  const handleSomeThing = () => {
    // do some thing
    forceUpdate();
  };

  return (<div>meow 🐱‍</div>)
};
```

### source code
```javascript
import { useState, useCallback } from 'react';

/**
 * Force component re-render
 * @returns {Function}
 */
export default function useForceUpdate() {
  const [, setTick] = useState(0);
  return useCallback(() => {
    setTick(tick => tick + 1);
  }, []);
}
```
