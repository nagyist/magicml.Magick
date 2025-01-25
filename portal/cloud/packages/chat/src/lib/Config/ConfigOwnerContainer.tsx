import Image from "next/legacy/image";

const ConfigOwnerContainer = () => {
  return (
    <div className="flex items-center my-4 space-x-8">
      <h1 className="text-base font-normal text-light-grey">Remixed from:</h1>
      <div className="flex items-center space-x-2">
        <h1>Mario</h1>
        <Image
          className="rounded-full"
          src="/images/agentXL.png"
          alt="owner"
          height={40}
          width={40}
        />
        <h1 className="text-[#8D9BA4]">Mr. Nintendo</h1>
      </div>
    </div>
  );
};

export default ConfigOwnerContainer;
