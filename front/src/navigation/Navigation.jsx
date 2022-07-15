import { Navigate, Route, Routes } from "react-router-dom";
import { Layout as MainLayout } from "layouts/Layout";
import { PATHS } from "constants/constants";
import { routes } from "constants/routes";

const renderRoutes = (_routes) => {
  return _routes.map((route) => {
    const { path, component: Component, layout: Layout = MainLayout } = route;
    return (
      <Route
        key={path}
        path={path}
        element={
          <Layout>
            <Component />
          </Layout>
        }
      />
    );
  });
};

export default function Navigation() {
  return (
    <Routes>
      {renderRoutes(routes)}
      <Route path="*" element={<Navigate replace to={PATHS.home} />} />
    </Routes>
  );
}
