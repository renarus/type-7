import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
