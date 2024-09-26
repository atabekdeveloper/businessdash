import { Home, AdsPage, ManagerPlan, NotFound } from 'src/components/pages';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/ads', element: <AdsPage /> },
  { path: '/manager-plan', element: <ManagerPlan /> },
  { path: '*', element: <NotFound /> },
];

export { routes };
