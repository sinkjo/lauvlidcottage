
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSelector() {
  const { language, switchLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <Select value={language} onValueChange={(value) => switchLanguage(value as "en" | "de")}>
        <SelectTrigger
          className="w-[80px] h-10 border-none bg-transparent focus:ring-0"
          aria-label="Select Language"
        >
          <div className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <SelectValue placeholder="Select language" />
          </div>
        </SelectTrigger>
        <SelectContent align="start" className="w-[160px]">
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
