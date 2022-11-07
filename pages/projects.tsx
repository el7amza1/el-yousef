import Location from "../components/location"
import { GetStaticProps } from "next"
import {prisma} from "../lib/prisma"
import { Project } from '@prisma/client'
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await prisma?.project.findMany()
  return {
      props: { projects: JSON.parse(JSON.stringify(projects)) }
  }
}
export default function Projects({projects}:{projects:Project[]}) {
 
 
  return (
    
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5" >
   
    <Location projects={projects} />

   </div>
  )
}
