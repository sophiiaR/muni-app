import { ArrowDownIcon, DocumentTextIcon } from '@heroicons/react/20/solid'
import React from 'react'

const CardActionPanel = () => {
  return (
    <div className="bg-white sm:rounded-lg">
      <div>
        <div className="mt-2">
          <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
            <h4 className="sr-only">Visa</h4>
            <div className="sm:flex sm:items-start">
              <DocumentTextIcon className="mr-1.5 ml-1.5 h-12 w-12 flex-shrink-0 text-gray-900" aria-hidden="true" />
              <div className="mt-3 sm:ml-4 sm:mt-0">
                <div className="text-sm font-medium text-gray-900">Comprobante pago.pdf</div>
                <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                  <div>5 MB</div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ArrowDownIcon className="mr-1.5 ml-1.5 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fecha de pago
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="04/03/2023"
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardActionPanel