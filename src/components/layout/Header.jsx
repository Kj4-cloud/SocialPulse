import { motion } from "framer-motion";
import { BarChart3, Bell, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between px-4 lg:px-6 py-4 border-b border-border/50"
    >
      <div className="flex items-center gap-3">
        <MobileNav />
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl platform-instagram flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-display font-bold gradient-text hidden sm:block">
            SocialPulse
          </h1>
        </Link>
      </div>

      <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search analytics..."
            className="w-full bg-secondary/50 border border-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-instagram rounded-full" />
        </button>
        <button className="p-2 rounded-lg hover:bg-secondary transition-colors hidden sm:block">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-instagram flex items-center justify-center text-sm font-semibold">
          KJ
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
