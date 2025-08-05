import Image from "next/image";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0">
        <Image 
          src="/SAP_2011_logo.svg" 
          alt="SAP Logo" 
          width={40} 
          height={20} 
          className="h-5 w-auto"
        />
      </div>
      <span className="font-semibold">Registry</span>
    </>
  );
}
