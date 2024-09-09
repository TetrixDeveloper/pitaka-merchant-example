import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IAppQueryProviderContainer
  extends React.ComponentPropsWithoutRef<"base"> {}

export const queryClient = new QueryClient();

function AppQueryProviderContainer(props: IAppQueryProviderContainer) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export default AppQueryProviderContainer;
