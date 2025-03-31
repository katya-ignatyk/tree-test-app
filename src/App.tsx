import Tree from "pages/Tree";
import Layout from "components/Layout";
import { TreeContextProvider } from "pages/Tree/context/TreeContextProvider";

const App = () => {
  return (
    <Layout>
      <TreeContextProvider>
        <Tree />
      </TreeContextProvider>
    </Layout>
  );
};

export default App;
