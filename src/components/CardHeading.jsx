import { CheckBadgeIcon } from "@heroicons/react/20/solid"
  
  export default function CardHeading() {
    return (
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Certificado de aporte</h3>
            <p className="mt-1 text-sm text-gray-500">
              Version 1
            </p>
          </div>
          <div className="ml-4 mt-4 flex items-center"> {/* flex-shrink-0 */}
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 ring-1 ring-inset ring-gray-300 mr-4"
            >
              Revisar
            </button>
            <button
              type="button"
              className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CheckBadgeIcon
              className="h-5 w-5 mr-1.5 text-white"
              aria-hidden="true"
              />
              Aprobar
            </button>
          </div>
        </div>
      </div>
    )
  }
  