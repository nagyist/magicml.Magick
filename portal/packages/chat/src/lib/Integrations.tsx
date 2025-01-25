import { Cog8ToothIcon, PlusSmallIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const integrationData = [
  { name: 'Discord', isConnected: true },
  { name: 'REST', isConnected: false },
];

const IntegrationButton = ({
  name,
  isConnected,
}: (typeof integrationData)[0]) => (
  <button className="relative flex items-center justify-between space-x-3 text-sm font-medium text-black transition-all duration-200 ease-in-out bg-white border rounded-lg shadow-sm cursor-pointer dark:text-white active:scale-95 border-secondary-highlight/80 hover:border-secondary-highlight dark:bg-card-main font-berkley-mono btn">
    <span
      className={clsx(
        isConnected
          ? 'text-secondary-highlight font-bold'
          : 'text-black dark:text-white'
      )}
    >
      {isConnected ? `Connected to ${name}` : `Connect to ${name}`}
    </span>
    {isConnected ? (
      <Cog8ToothIcon className="w-4 h-4" />
    ) : (
      <PlusSmallIcon className="w-4 h-4" />
    )}
  </button>
);

const Integrations = () => (
  <div className="bg-[#18181D] p-6 rounded-xl h-4/5">
    <h1 className="mb-4 text-light-blue">Integrations</h1>
    <div className="flex flex-col content-around gap-y-4 h-4/5">
      {integrationData.map((integration) => (
        <IntegrationButton key={integration.name} {...integration} />
      ))}
    </div>
  </div>
);

export default Integrations;
