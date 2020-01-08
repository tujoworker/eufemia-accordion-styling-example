import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// CSS vars polyfill
import stylisPlugin from "dnb-ui-lib/style/stylis";
import { CacheProvider } from "@emotion/core";
import createEmotionCache from "@emotion/cache";

// Eufemia import
import "dnb-ui-lib/style/basis";
import "dnb-ui-lib/style/components";
import "dnb-ui-lib/style/themes/ui";

const emotionCache = createEmotionCache({
  stylisPlugins: [stylisPlugin]
});

ReactDOM.render(
  <CacheProvider value={emotionCache}>
    <App />
  </CacheProvider>,
  document.getElementById("root")
);
