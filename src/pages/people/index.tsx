import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getUsers } from "@/utils/api";
import { User } from "@/utils/types";
import Card from "@/components/Card";
import { Grid, GridItem } from "@chakra-ui/react";

const People = ({ Users }: any) => {
  return (
    <div>
      <Grid templateColumns={{base:"repeat(1, 1fr)",md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}}
      gap="2.5">
        {Users?.map((i: User) => {
          return (
            <GridItem key={i.id}>
              <Card key={i.id} {...i}/>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default People;

export const getStaticProps = async (context: any) => {
  const data = await getUsers();
  return {
    props: {
      Users: data,
    },
  };
};
