import { ReactNode } from "react";

const ExperinceDisplay = ({ companyName, companyLogo, companyColor, children, position, timePeriod }: { companyName: string, companyLogo: string, companyColor: string, position: string, timePeriod: string, children: ReactNode }) => {
  return (
    <div className="xl:col-span-4 md:col-span-6 col-span-12 bg-background-2 w-full drop-shadow-[0_4px_10px_rgba(0,0,255,0.25)] rounded-lg flex flex-col relative">
      <div className={`flex items-end justify-center h-44 w-full rounded-t-lg ${companyColor}`}>
        <div className={`absolute blur-sm rounded-lg w-full h-44 left-0 top-0 ${companyColor}`}></div>
        <div className="absolute rounded-lg w-full h-36 left-0 top-0 flex justify-center items-center">
          <h5 className="text-2xl font-bold p-6 text-white">{companyName}</h5>
        </div>
        <img src={companyLogo} alt={companyName} className="rounded-full shadow-custom absolute left-0 right-0 top-28 mx-auto w-32 bg-white p-4" />
      </div>
      <div className="mt-16 p-4 flex justify-center flex-col items-center">
        <h1 className="pt-2 text-2xl font-bold text-center">
          {position}
        </h1>
        <h2 className="text-lg font-semibold text-center">
          {timePeriod}
        </h2>
        <div className="my-5 text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExperinceDisplay;
