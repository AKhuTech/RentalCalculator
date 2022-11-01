import { Outlet } from "react-router-dom";
import { Header } from "../../../header/ui/component";

export const MainLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);