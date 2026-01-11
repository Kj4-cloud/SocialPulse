import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, TrendingUp, Users, Calendar, MessageSquare, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: TrendingUp, label: "Analytics", path: "/analytics" },
  { icon: Users, label: "Audience", path: "/audience" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: MessageSquare, label: "Engagement", path: "/engagement" },
];

const platforms = [
  { icon: Instagram, label: "Instagram", color: "platform-instagram" },
  { icon: Facebook, label: "Facebook", color: "platform-facebook" },
  { icon: Youtube, label: "YouTube", color: "platform-youtube" },
  { icon: Twitter, label: "X (Twitter)", color: "platform-twitter" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-background border-r border-border z-50 p-4 lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold gradient-text">SocialPulse</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
                Platforms
              </p>
              <div className="space-y-1">
                {platforms.map((platform) => (
                  <button
                    key={platform.label}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
                  >
                    <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", platform.color)}>
                      <platform.icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    {platform.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
