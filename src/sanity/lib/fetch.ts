import { createClient } from "next-sanity";

const client = createClient({
    projectId:"8qkvq72u",
    dataset:"production",
    useCdn:true,
    apiVersion:"2025-01-18"
})

export async function sanityfetch({query, params = {}}:{query:string, params?:any} )
{
    return await client.fetch (query,params)
}