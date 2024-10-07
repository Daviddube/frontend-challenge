import React from 'react';
import { render } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FormContext } from './src/App';
import { MemoryRouter } from 'react-router';
import { isEmail, useForm } from '@mantine/form';

const AllTheProviders = ({ children }) => {
    const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false
    },
     validate: {
      email: isEmail('Invalid email')
    }
});
    const queryClient = new QueryClient()
    return (
        <MantineProvider>
            <MemoryRouter>
                <QueryClientProvider client={queryClient}>
                    <FormContext.Provider value={{form}}>
                        { children }
                    </FormContext.Provider>
                </QueryClientProvider>
            </MemoryRouter>
        </MantineProvider>
    )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}