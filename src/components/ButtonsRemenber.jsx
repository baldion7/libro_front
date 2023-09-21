import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { TabsPost } from './TabsPost.jsx'
import { Link } from 'react-router-dom'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
export const ButtonsRemenber = () => {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgxecKfrTTRFizEwsOrsrj51Vpg9lZ8j8hQ&usqp=CAU)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',fontSize: '20px'}} className="flex flex-row justify-center items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-Edu">
					Revivamos
					<ChevronDownIcon className="-mr-1 h-5 w-10 text-gray-400" aria-hidden="true" />
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
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgJNV4oDqU9yPAXjA6pKJYr-DXK--XbDUFA&usqp=CAU)`,fontWeight: 'bold', backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
						<Menu.Item>
							{({ active }) => (
								<a
									href="https://proy2022.wixsite.com/aunsoloclick"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
										'block px-2 py-2 text-sm flex justify-center items-center'
									)}
								>
									2020
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href=" https://experienciasignifi18.wixsite.com/experiencia-signific"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
										'block px-2 py-2 text-sm flex justify-center items-center'
									)}
								>
									2021
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="https://nury59.wixsite.com/familiaaunsoloclick/blog"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
										'block px-2 py-2 text-sm flex justify-center items-center'
									)}
								>
									2022
								</a>
							)}
						</Menu.Item>

						<Menu.Item>
							{({ active }) => (
								<Link
									to="/quiver"
									className={classNames(
										active ? 'bg-gray-100 text-gray-900 font-Edu' : 'text-gray-700 font-Edu',
										'block px-2 py-2 text-sm flex justify-center items-center'
									)}
								>
									Quiver
								</Link>
								)}
						</Menu.Item>
					</div>

				</Menu.Items>
			</Transition>
		</Menu>
	)
}