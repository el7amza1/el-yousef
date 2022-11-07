import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'
import { User } from '@prisma/client'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import {prisma } from '../lib/prisma'
import Team from '../components/team'
import UserForm from '../components/userForm'
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const users = await prisma?.user.findMany()
  return {
      props: { users: JSON.parse(JSON.stringify(users)) }
  }
}

const positon = [
  {
    id: 1,
    name: "Admin"
  },
  {
    id: 1,
    name: "Engineer"
  }
]


export default function Teams({users}:{users:User[]}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <UserForm open={open} setOpen={setOpen} />
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusIconMini className="h-5 w-5" aria-hidden="true" />
      </button>
      {positon.map((typee) => (
        <>
          <div className="relative" key={typee.id}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-lg font-medium text-gray-900"><h2 className='text-3xl text-center py-6'> {typee.name} </h2></span>
            </div>
          </div>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.map((person) => (
              person.type === typee.name ?
              <Team person={person} /> :<></>
            ))}
          </ul>
        </>
      ))}
    </div>
  )
}