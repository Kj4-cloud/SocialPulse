import { motion } from "framer-motion";
import { Calendar, Clock, Instagram, Facebook, Youtube, Twitter, Plus, MoreHorizontal, Image, Video, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const scheduledPosts = [
  {
    id: 1,
    title: "New product launch announcement",
    platform: "Instagram",
    icon: Instagram,
    colorClass: "platform-instagram",
    type: "image",
    typeIcon: Image,
    date: "Today",
    time: "2:00 PM",
    status: "scheduled",
  },
  {
    id: 2,
    title: "Weekly tips & tricks video",
    platform: "YouTube",
    icon: Youtube,
    colorClass: "platform-youtube",
    type: "video",
    typeIcon: Video,
    date: "Today",
    time: "5:00 PM",
    status: "scheduled",
  },
  {
    id: 3,
    title: "Behind the scenes story",
    platform: "Instagram",
    icon: Instagram,
    colorClass: "platform-instagram",
    type: "story",
    typeIcon: Image,
    date: "Tomorrow",
    time: "10:00 AM",
    status: "draft",
  },
  {
    id: 4,
    title: "Industry news thread",
    platform: "X",
    icon: Twitter,
    colorClass: "platform-twitter",
    type: "thread",
    typeIcon: FileText,
    date: "Tomorrow",
    time: "12:00 PM",
    status: "scheduled",
  },
  {
    id: 5,
    title: "Community spotlight post",
    platform: "Facebook",
    icon: Facebook,
    colorClass: "platform-facebook",
    type: "image",
    typeIcon: Image,
    date: "Jan 15",
    time: "3:00 PM",
    status: "scheduled",
  },
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const calendarDates = [13, 14, 15, 16, 17, 18, 19];
const todayIndex = 0;

const Schedule = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 lg:mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl lg:text-2xl font-display font-bold mb-1">Content Schedule</h2>
            <p className="text-muted-foreground text-sm lg:text-base">Plan and schedule your posts</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg platform-instagram text-white font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Create Post
          </motion.button>
        </div>
      </motion.div>

      {/* Calendar Week View */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="glass-card rounded-xl p-4 lg:p-5 mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-display font-semibold">January 2025</h3>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className={cn(
                "text-center p-2 lg:p-3 rounded-lg cursor-pointer transition-all",
                index === todayIndex ? "bg-primary/20 border border-primary/50" : "hover:bg-secondary"
              )}
            >
              <p className="text-xs text-muted-foreground mb-1">{day}</p>
              <p className={cn(
                "text-lg font-display font-bold",
                index === todayIndex && "text-primary"
              )}>{calendarDates[index]}</p>
              {index < 3 && (
                <div className="flex justify-center gap-0.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full platform-instagram" />
                  {index === 0 && <div className="w-1.5 h-1.5 rounded-full platform-youtube" />}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scheduled Posts */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-xl p-4 lg:p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-lg">Upcoming Posts</h3>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-3">
          {scheduledPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
            >
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", post.colorClass)}>
                <post.icon className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "text-xs font-medium px-2 py-0.5 rounded-full",
                    post.status === "scheduled" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                  )}>
                    {post.status === "scheduled" ? "Scheduled" : "Draft"}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <post.typeIcon className="w-3 h-3" />
                    <span className="text-xs capitalize">{post.type}</span>
                  </div>
                </div>
                <p className="text-sm font-medium truncate">{post.title}</p>
              </div>

              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{post.date}</p>
                <div className="flex items-center gap-1 text-muted-foreground justify-end">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{post.time}</span>
                </div>
              </div>

              <button className="p-2 rounded-lg hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-6">
        {[
          { label: "Scheduled", value: "12", color: "text-green-400" },
          { label: "Drafts", value: "5", color: "text-yellow-400" },
          { label: "Published Today", value: "3", color: "text-primary" },
          { label: "This Week", value: "18", color: "text-instagram" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="glass-card rounded-xl p-4 text-center"
          >
            <p className={cn("text-2xl font-display font-bold", stat.color)}>{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
};

export default Schedule;
