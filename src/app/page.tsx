"use client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
export default function Home({ countries }:any) {
	console.log(countries);
  return <>
  </>
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
    query {
		countries{
		  capital
		}
	  }
	  
    `,
  });
  return {
    props: {
		countries: data.countries,
    },
  };
}