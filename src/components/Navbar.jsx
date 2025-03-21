import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex bg-background justify-between p-12">
      <h2 className="text-2xl font-light">Satyam Kumar</h2>
      <div className="flex justify-center items-center">
        {/* Visible on bigger devices */}
        <div className="hidden md:flex justify-center items-center gap-2">
          <a href="https://www.linkedin.com/in/satyamkumr20/" target="_blank" rel="noopener noreferrer">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              LinkedIn
            </button>
          </a>
          <a href="https://github.com/SKumr20/" target="_blank" rel="noopener noreferrer">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Github
            </button>
          </a>
          <a href="https://drive.google.com/file/d/108Qgk33IWUxUkq3xi_XTw8vuslPKJ7EI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Resume
            </button>
          </a>
        </div>

        {/* Small device toggle */}
        <Sheet>
          <SheetTrigger className="md:hidden flex gap-2">
            <Button variant="ghost">
              <Menu className="scale-150" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col p-6 gap-2">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  LinkedIn
                </button>
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Github
                </button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Resume
                </button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;