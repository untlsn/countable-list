import Header from '~/components/organisms/Header';
import { PageContext } from '~/renderer/types';

const PageWrapper = ({ Page, pageProps }: PageContext) => {

  return (
    <div class="min-h-screen">
      <Header />
      <Page {...pageProps} />
    </div>
  );
};

export default PageWrapper;
