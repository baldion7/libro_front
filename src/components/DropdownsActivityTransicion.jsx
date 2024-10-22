import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const DropdownsActivityTransicion = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgxecKfrTTRFizEwsOrsrj51Vpg9lZ8j8hQ&usqp=CAU)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',fontSize: '20px'}} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-Edu">
            TRANSICION
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-98"
        >
          <Menu.Items className="absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
            <div className="py-1" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgJNV4oDqU9yPAXjA6pKJYr-DXK--XbDUFA&usqp=CAU)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/trancion/carecterizacion"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    CARACTERIZACIÓN
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/trancion/actividades"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                   ACTIVIDADES
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}