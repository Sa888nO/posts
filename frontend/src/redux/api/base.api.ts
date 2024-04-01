import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: () => ({}),
});
