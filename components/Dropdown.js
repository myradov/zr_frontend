import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import Link from 'next/link'

export default function Dropdown() {
  return (
    <li className="group text-gray-500 border-b border-gray-200 bg-white hover:border-gray-400 p-3 transition-all duraiton-450 ease">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md px-4 py-2 text-md text-gray-500 group-hover:text-main focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Categories
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-500 group-hover:text-main"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-4 mt-3 w-40 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-0 divide-y divide-gray-50">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/brands"
                    className={`${
                      active ? 'bg-gray-50 text-black' : 'text-gray-400'
                    } group flex w-full justify-center items-center px-5 py-4 text-md`}
                  >
                    Electronics
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/brands"
                    className={`${
                      active ? 'bg-gray-50 text-black' : 'text-gray-400'
                    } group flex w-full justify-center items-center px-5 py-4 text-md`}
                  >
                    Computers
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/brands"
                    className={`${
                      active ? 'bg-gray-50 text-black' : 'text-gray-400'
                    } group flex w-full justify-center items-center px-5 py-4 text-md`}
                  >
                    Laptops
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/brands"
                    className={`${
                      active ? 'bg-gray-50 text-black' : 'text-gray-400'
                    } group flex w-full justify-center items-center px-5 py-4 text-md`}
                  >
                    Mi Electronics
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/brands"
                      className={`${
                        active ? 'bg-gray-50 text-black' : 'text-gray-400'
                      } group flex w-full justify-center items-center px-5 py-4 text-md`}
                    >
                      Iphone
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/brands"
                      className={`${
                        active ? 'bg-gray-50 text-black' : 'text-gray-400'
                      } group flex w-full justify-center items-center px-5 py-4 text-md`}
                    >
                      Samsung
                    </Link>
                  )}
                </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}