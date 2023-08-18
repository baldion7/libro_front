import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const DropdownsActivityCuarto = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-Edu">
            CUARTO
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
          <Menu.Items className="absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/0"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Entrevista Radial
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/1"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Queridos Abuelos
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/2"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    ¿Para qué sirve una niña o un niño?
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/3"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Inmersión cultural
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/4"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    ¡Peludos, Patosos y Con Cola!
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/5"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Queridos Taitas
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/6"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    El Enigma de la Tarea Mentirosa
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/7"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    El Insuperable y Divertido Juguetón
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/8"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Explorando Mi Barrio
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/9"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    ¿Entre Sueños y Realidades
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/10"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Bienvenidos a la página web
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/11"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    segunda parte de "Sorbitos de Memoria"
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/12"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Creación del Fanzine
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/post/13"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Tecnología de Palabras
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