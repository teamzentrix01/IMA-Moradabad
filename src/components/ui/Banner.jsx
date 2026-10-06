import { Trophy } from 'lucide-react';

export default function Banner(props) {
    return (


        <section className="py-7 sm:py-10 md:py-14 px-4 sm:px-6 bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white shadow-inner">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-block mb-3 sm:mb-5">
                    <div className="flex items-center gap-1.5 sm:gap-2.5 bg-white/20 backdrop-blur-md rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 shadow-xs">
                        <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
                        <span className="font-semibold text-[11px] sm:text-xs tracking-wider uppercase">Celebrating Excellence</span>
                    </div>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold mb-2 sm:mb-3 tracking-normal font-libre break-words">
                    {props.title?.startsWith('OUR ') ? (
                        <>OUR <span className="text-yellow-300 drop-shadow-xs">{props.title.replace('OUR ', '')}</span></>
                    ) : (
                        <span className="text-yellow-300 drop-shadow-xs">{props.title}</span>
                    )}
                </h1>
                <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-1.5 opacity-95 font-medium font-playfair tracking-wide">
                    Indian Medical Association, Moradabad - 244001
                </p>
                {props.tagline && (
                    <p className="text-[11px] sm:text-xs md:text-sm max-w-xl mx-auto opacity-90 mt-1.5 font-playfair italic px-2">
                        {props.tagline}
                    </p>
                )}
            </div>
        </section>


    );
}