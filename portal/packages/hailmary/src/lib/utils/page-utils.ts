export const pages = ['/app', '/app/chat', '/app/vrm'] as const;

export const headerTitles: Record<(typeof pages)[number], string> = {
  [pages[0]]: 'Ideas',
  [pages[1]]: 'Chat Test',
  [pages[2]]: 'VRM Test',
};

export const stripTrailingSlash = (str: string) => str.replace(/\/$/, '');

interface IsCurrentPageProps {
  pathname: string;
  href: string;
}
export const isCurrentPage = ({ pathname, href }: IsCurrentPageProps) =>
  stripTrailingSlash(pathname) === stripTrailingSlash(href);

export const getHeaderTitle = (pathname: string) =>
  headerTitles[pages.find((page) => isCurrentPage({ pathname, href: page }))!];
