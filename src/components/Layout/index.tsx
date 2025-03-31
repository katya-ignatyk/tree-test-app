import { WithChildren } from "lib/types";

type LayoutProps = WithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-900 min-h-screen p-0">
      <div className="bg-gray-900 p-5 mb-5 text-white border-b-zinc-500 border-b-1">
        <p className="text-2xl">Tree Test App</p>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Layout;
