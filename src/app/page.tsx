import { FileText, Code, Zap, CheckCircle} from "lucide-react";
import LandingCard from "@/components/landingCard";

const landingCards = [
  {
    title: "CSV to JSON",
    description: "Convert your CSV files to JSON format instantly with our intelligent parser",
    icon: FileText,
    buttonRoute: "/csv-to-json"
  },
  {
    title: "JSON Validator",
    description: "Validate and format your JSON with detailed error reporting and suggestions",
    icon: Code,
    buttonRoute: "/json-validator"
  },
  {
    title: "AI JSON Generator",
    description: "Generate complex JSON structures using natural language prompts powered by AI",
    icon: Zap,
    buttonRoute: "/ai-json-generator"
  }
];


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen text-white px-8">
      <h1 className="text-4xl text-center tablet:text-5xl laptopM:text-6xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
        Convert, Validate, and
      </h1>
      <h1 className="text-4xl text-center tablet:text-5xl laptopM:text-6xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
        Generate JSON easily
      </h1>
      <div className="mt-8 text-gray-400 font-medium text-lg tablet:text-xl laptopM:text-2xl w-5xs tablet:w-xl laptopM:w-3xl text-center">
        <h2>Streamline your JSON workflow with our powerful suite of tools.</h2>
        <h2>
          Perfect for developers, data professionals, and anyone working with
          JSON data.
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12 text-sm tablet:text-lg laptopM:text-xl">
        <div className="flex items-center text-green-400">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>Fast & Reliable</span>
        </div>
        <div className="flex items-center text-green-400">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>No Registration Required</span>
        </div>
        <div className="flex items-center text-green-400 hidden">
          <CheckCircle className="w-5 h-5 mr-2" />
          <span>API Accessible</span>
        </div>
      </div>

      <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 items-center justify-center mb-12 laptop:mb-0 max-w-7xl mt-8 text-center">
        {landingCards.map((card, index) => (
          <LandingCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            buttonRoute={card.buttonRoute}
          />
        ))} 
      </div>
    </div>
  );
}
