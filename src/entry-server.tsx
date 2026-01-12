import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router";

export function render(_url: string) {
  const url = `/${_url}`;

  // call your SSR function or API here and pass the result as props

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App someProps="Hello from the server" />
      </StaticRouter>
    </StrictMode>
  );
  return { html };
}