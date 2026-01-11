import { motion } from "framer-motion";
import { Heart, MessageCircle, UserPlus, Share2, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "follow",
    icon: UserPlus,
    platform: "Instagram",
    platformIcon: Instagram,
    colorClass: "platform-instagram",
    message: "250 new followers today",
    time: "2m ago",
  },
  {
    id: 2,
    type: "comment",
    icon: MessageCircle,
    platform: "YouTube",
    platformIcon: Youtube,
    colorClass: "platform-youtube",
    message: "New comment on your latest video",
    time: "15m ago",
  },
  {
    id: 3,
    type: "like",
    icon: Heart,
    platform: "X",
    platformIcon: Twitter,
    colorClass: "platform-twitter",
    message: "Your tweet reached 10K likes",
    time: "1h ago",
  },
  {
    id: 4,
    type: "share",
    icon: Share2,
    platform: "Facebook",
    platformIcon: Facebook,
    colorClass: "platform-facebook",
    message: "Post shared 500 times",
    time: "3h ago",
  },
  {
    id: 5,
    type: "follow",
    icon: UserPlus,
    platform: "YouTube",
    platformIcon: Youtube,
    colorClass: "platform-youtube",
    message: "1K new subscribers this week",
    time: "5h ago",
  },
];

const RecentActivity = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-semibold text-lg">Recent Activity</h3>
          <p className="text-sm text-muted-foreground">Latest updates across platforms</p>
        </div>
        <button className="text-sm text-primary hover:underline">See All</button>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
          >
            <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center", activity.colorClass)}>
              <activity.platformIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{activity.message}</p>
              <p className="text-xs text-muted-foreground">{activity.platform}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RecentActivity;
