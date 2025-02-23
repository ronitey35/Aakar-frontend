import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


function App() {
  const queryClient = new QueryClient()
  return (
   <QueryClientProvider client={queryClient}>
    <h1 className="bg-red-600">Contact Form</h1>
    <Posts/>

    <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
