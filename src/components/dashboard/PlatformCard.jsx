import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PlatformCard = ({ platform, followers, engagement, posts, growth, icon: Icon, colorClass, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass-card rounded-xl overflow-hidden cursor-pointer group"
    >
      <div className={cn("h-1.5 w-full", colorClass)} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colorClass)}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">{platform}</p>
              <p className="text-xs text-muted-foreground">Connected</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs font-medium text-green-400">
            <TrendingUp className="w-3 h-3" />
            {growth}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-secondary/50">
            <Users className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <p className="text-lg font-bold font-display">{followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-secondary/50">
            <Heart className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <p className="text-lg font-bold font-display">{engagement}</p>
            <p className="text-xs text-muted-foreground">Engagement</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-secondary/50">
            <MessageCircle className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <p className="text-lg font-bold font-display">{posts}</p>
            <p className="text-xs text-muted-foreground">Posts</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformCard;
