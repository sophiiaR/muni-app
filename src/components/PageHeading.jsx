import { Fragment } from 'react'
import {
  BriefcaseIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  ClockIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageHeading({ pageHeadingTitle, pageHeadingMeta, pageHeadingButton }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {pageHeadingTitle[0].name}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
            <div className={pageHeadingMeta[0].iconClass}>
              {pageHeadingMeta[0].icon}
            </div>
            {pageHeadingMeta[0].type}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <UserCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
            <div className={pageHeadingMeta[1].iconClass}>
              {pageHeadingMeta[1].icon}
            </div>
            {pageHeadingMeta[1].name}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <CalendarDaysIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
            <div className={pageHeadingMeta[2].iconClass}>
              {pageHeadingMeta[2].icon}
            </div>
            {pageHeadingMeta[2].date}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {/* <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" /> */}
            <div className={pageHeadingMeta[3].iconClass}>
              {pageHeadingMeta[3].icon}
            </div>
            {pageHeadingMeta[3].status}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        {pageHeadingButton 
          ? (<span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ArrowLeftIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-500" aria-hidden="true" />
                Volver
              </button>
            </span>) 
          : null}

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
