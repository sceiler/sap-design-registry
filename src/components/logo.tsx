import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2 ml-2">
      <Image 
        src="/SAP_2011_logo.svg" 
        alt="SAP Logo" 
        width={64} 
        height={32} 
        className="h-8 w-auto"
      />
    </div>
  );
}
