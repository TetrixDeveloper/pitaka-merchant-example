import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type IAppQueryProviderContainer = React.ComponentPropsWithoutRef<'base'>;

export const queryClient = new QueryClient();

function AppQueryProviderContainer(props: IAppQueryProviderContainer) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export default AppQueryProviderContainer;
