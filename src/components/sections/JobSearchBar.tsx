import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";

const JobSearchBar = () => {
    return (
        <section className="py-16 bg-surface">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-6 bg-surface p-6 lg:p-4 rounded-[50px] shadow-sm border border-border/50 max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 px-6 w-full lg:w-1/3">
                        <span className="text-navy/40 font-bold uppercase text-xs whitespace-nowrap">Search Jobs</span>
                        <div className="h-6 w-px bg-border hidden lg:block mx-2"></div>
                        <input
                            type="text"
                            placeholder="job title, skills, etc."
                            className="bg-transparent border-none focus:ring-0 w-full text-navy font-dm-sans placeholder:text-navy/30"
                        />
                    </div>

                    <div className="flex items-center gap-4 px-6 w-full lg:w-1/4 border-t lg:border-t-0 lg:border-l border-border/50 py-4 lg:py-0">
                        <MapPin className="w-5 h-5 text-red shrink-0" />
                        <select className="bg-transparent border-none focus:ring-0 w-full text-navy font-dm-sans appearance-none cursor-pointer">
                            <option>Location</option>
                            <option>New York</option>
                            <option>California</option>
                            <option>Texas</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4 px-6 w-full lg:w-1/4 border-t lg:border-t-0 lg:border-l border-border/50 py-4 lg:py-0">
                        <Briefcase className="w-5 h-5 text-red shrink-0" />
                        <select className="bg-transparent border-none focus:ring-0 w-full text-navy font-dm-sans appearance-none cursor-pointer">
                            <option>Industry</option>
                            <option>Technology</option>
                            <option>Healthcare</option>
                            <option>Finance</option>
                        </select>
                    </div>

                    <Button variant="secondary" size="icon" className="w-16 h-16 rounded-full shrink-0 bg-navy hover:bg-red transition-colors">
                        <Search className="w-6 h-6 text-white" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default JobSearchBar;
