import { RouterProvider } from "react-router-dom";
import router from "../router/router";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

function App() {
    const queryClient = new QueryClient();
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <div className="bg-[#1f1531] scroll-none  h-screen">
                    <RouterProvider router={router} />
                </div>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
