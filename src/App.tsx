import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "antd";
import { CreateEvent, Events, AddField, RemoveField } from "./components";

// tech debt: 
// * create types and replace "any" type 
// * unit tests for components
// * styling

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ height: "100vh", padding: '15px' }}>
        <Layout.Content style={{ width: "1300px", maxWidth: "100%", margin: "auto" }}>
          <CreateEvent />
          <AddField />
          <RemoveField/>
          <Events />
        </Layout.Content>
      </Layout >
    </QueryClientProvider>
  );
}

export default App;
