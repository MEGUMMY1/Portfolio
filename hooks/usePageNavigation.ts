import { useRouter } from 'next/router';
import { pages } from '@/constants/constants';

export default function usePageNavigation() {
  const router = useRouter();
  const currentPageIndex = pages.indexOf(router.pathname);

  const goToNextPage = () => {
    const nextPage = pages[(currentPageIndex + 1) % pages.length];
    router.push(nextPage);
  };

  const goToPreviousPage = () => {
    const prevPage =
      pages[(currentPageIndex - 1 + pages.length) % pages.length];
    router.push(prevPage);
  };

  return { goToNextPage, goToPreviousPage };
}
