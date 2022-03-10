import Header from '~/components/organisms/Header';
import { PageContext } from '~/renderer/types';
import StoreProvider from '~/store/Provider';

const PageWrapper = ({ Page, pageProps }: PageContext) => {

  return (
    <StoreProvider>
      <div className="min-h-screen">
        <Header />
        <Page {...pageProps} />
      </div>
    </StoreProvider>
  );
};

export default PageWrapper;
