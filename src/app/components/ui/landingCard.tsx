import React from "react";
import { ArrowRight} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LandingCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    buttonRoute: string;
}

const LandingCard: React.FC<LandingCardProps> = ({title, description, icon: Icon, buttonRoute}) => {
  return (
    <>
      <div className="bg-white/2 backdrop-blur-xl border transition duration-300 border-white/10 p-8 rounded-xl shadow-lg shadow-black/60 hover:scale-105 group hover:shadow-xl flex flex-col items-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-500">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">
            {description}
        </p>
        <button className="w-full bg-gradient-to-l from-purple-600 via-pink-400 to-purple-600 rounded-lg p-2 flex gap-2 items-center justify-center font-semibold group-button shadow-black/60 shadow-lg hover:shadow-xl">
          Get Started <ArrowRight className="w-5 h-5 bounce-x-on-hover "></ArrowRight>
        </button>
      </div>
    </>
  );
};

export default LandingCard;
