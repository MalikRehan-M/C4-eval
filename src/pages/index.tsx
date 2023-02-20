import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {Center,Text} from "@chakra-ui/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Center>
      <Text fontSize={"4xl"}>Homepage</Text>
    </Center>
    </>
  )
}
