import { CheckBadgeIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import CardActionPanel from './CardActionPanel';

export default function FormStep2(props) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="col-span-full">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Comprobante de pago
        </label>
        <CardActionPanel/>
      </div>
    </div>
  );
}
