import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "antd";
import { CreateEvent, Events } from "./components";

// tech debt: 
// * create types and replace "any" type 
// * unit tests for components
// * styling

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ height: "100vh", padding: '10px' }}>
        <Layout.Content>
          <CreateEvent />
          <Events />
        </Layout.Content>
      </Layout >
    </QueryClientProvider>
  );
}

export default App;
