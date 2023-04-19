import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Card(props) {
  return (
    <div className="border-b border-gray-200 bg-white p-6 rounded-lg shadow">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {props.title}
          </h2>
          {props.subtitle && (
            <p className="mt-1 text-sm leading-6 text-gray-500 border-b border-gray-900/10 pb-6">
              {props.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center">
          <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-4">
            Revisar
          </button>
          <button className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <CheckBadgeIcon
              className="h-5 w-5 mr-1.5 text-white"
              aria-hidden="true"
            />
            Aprobar
          </button>
        </div>
      </div>

      {/* body */}
      <div>{props.children}</div>
    </div>
  );
}
