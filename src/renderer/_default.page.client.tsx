import { hydrate, render } from 'preact';
import { useClientRouter } from 'vite-plugin-ssr/client/router';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import '~/assets/style/global.css';
import PageWrapper from '~/providers/PageWrapper';
import store from '~/store';

const { hydrationPromise } = useClientRouter({
  render(pageContext) {
    // @ts-ignore testing
    window.store = store;

    const page = <PageWrapper {...pageContext} />;
    const container = document.querySelector('body');

    if (pageContext.isHydration) {
      hydrate(page, container!);
    } else {
      render(page, container!);
    }
    document.title = getPageTitle(pageContext);
  },
});

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.');
});

function getPageTitle(pageContext: any) {
  return (pageContext.pageExports.documentProps || {}).title ||
    (pageContext.documentProps || {}).title ||
    'Demo';
}
