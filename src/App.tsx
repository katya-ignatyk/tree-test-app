import Layout from "components/Layout";
import { TreeContextProvider } from "pages/Tree/context/TreeContextProvider";

const App = () => {
  return (
    <Layout>
      <TreeContextProvider>
        <>Hello</>
      </TreeContextProvider>
    </Layout>
  );
};

export default App;
