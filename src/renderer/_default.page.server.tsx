import renderToString from 'preact-render-to-string';
import { escapeInject, dangerouslySkipEscape, PageContextBuiltIn } from 'vite-plugin-ssr';
import logoUrl from './logo.svg';
import { PageContext } from './types';
import PageWrapper from '~/providers/PageWrapper';

export const passToClient = ['pageProps', 'documentProps'];

export async function render(pageContext: PageContextBuiltIn & PageContext) {
  const pageHtml = renderToString(<PageWrapper {...pageContext} />);

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
