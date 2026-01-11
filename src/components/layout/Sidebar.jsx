import { motion } from "framer-motion";
import { Home, TrendingUp, Users, Calendar, MessageSquare, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import UpgradeModal from "./UpgradeToPro";
import { useState } from "react";

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



const Sidebar = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="hidden lg:flex w-64 border-r border-border/50 p-4 flex-col"
    >
      <nav className="space-y-1">
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={item.path}
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
          </motion.div>
        ))}
      </nav>

      <div className="mt-8">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
          Platforms
        </p>
        <div className="space-y-1">
          {platforms.map((platform, index) => (
            <motion.button
              key={platform.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all group"
            >
              <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", platform.color)}>
                <platform.icon className="w-3.5 h-3.5 text-white" />
              </div>
              {platform.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <div className="glass-card rounded-xl p-4">
          <p className="text-sm font-semibold mb-1">Upgrade to Pro</p>
          <p className="text-xs text-muted-foreground mb-3">
            Unlock advanced analytics and AI insights
          </p>
          <button  onClick={() => setOpen(true)}  className="w-full py-2 rounded-lg text-sm font-medium platform-instagram text-white hover:opacity-90 transition-opacity">
                Upgrade Now                       
          </button>
  
          <UpgradeModal isOpen={open} onClose={() => setOpen(false)} />

        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
