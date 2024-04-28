import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative bg-gray-800 pb-32">
            <div className="absolute inset-0">
                <Image className="h-full w-full object-cover" src="/images/header-image.jpg" width={2000} height={2000} alt="Header Image"/>
                <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true"/>
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="max-w-lg">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10 lg:mt-16">
                        <span className="text-dx-blue-darkest">Think, </span>
                        <span className="text-dx-blue-dark">Build, </span>
                        <span className="text-sky-400">Maintain</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white">DX-Solutions waarborgt keuzevrijheid, vernieuwt technologie, ontgint en verrijkt
                        data, en gidst bedrijven door IT (r)evoluties naar een geoptimaliseerde waardeketen.
                    </p>
                </div>
            </div>
        </div>
    );
}
