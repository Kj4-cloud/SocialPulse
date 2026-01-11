import { motion } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { MessageCircle, Heart, Share2, Bookmark, ThumbsUp, MessageSquare, Reply, AtSign, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const engagementData = [
  { day: "Mon", likes: 4200, comments: 890, shares: 320 },
  { day: "Tue", likes: 3800, comments: 720, shares: 280 },
  { day: "Wed", likes: 5100, comments: 980, shares: 420 },
  { day: "Thu", likes: 4600, comments: 850, shares: 380 },
  { day: "Fri", likes: 5800, comments: 1100, shares: 520 },
  { day: "Sat", likes: 6200, comments: 1250, shares: 580 },
  { day: "Sun", likes: 5400, comments: 1050, shares: 450 },
];

const recentInteractions = [
  {
    id: 1,
    type: "comment",
    user: "Sarah Johnson",
    avatar: "SJ",
    message: "This is exactly what I needed! Amazing content 🔥",
    platform: "Instagram",
    platformIcon: Instagram,
    colorClass: "platform-instagram",
    time: "2m ago",
  },
  {
    id: 2,
    type: "mention",
    user: "TechDaily",
    avatar: "TD",
    message: "Great insights from @yourhandle on the latest trends...",
    platform: "X",
    platformIcon: Twitter,
    colorClass: "platform-twitter",
    time: "15m ago",
  },
  {
    id: 3,
    type: "comment",
    user: "Mike Chen",
    avatar: "MC",
    message: "Can you make a follow-up video on this topic?",
    platform: "YouTube",
    platformIcon: Youtube,
    colorClass: "platform-youtube",
    time: "32m ago",
  },
  {
    id: 4,
    type: "share",
    user: "Marketing Hub",
    avatar: "MH",
    message: "Shared your post with their 50K followers",
    platform: "Facebook",
    platformIcon: Facebook,
    colorClass: "platform-facebook",
    time: "1h ago",
  },
  {
    id: 5,
    type: "comment",
    user: "Emily Davis",
    avatar: "ED",
    message: "The tips in this post helped me so much! Thank you ❤️",
    platform: "Instagram",
    platformIcon: Instagram,
    colorClass: "platform-instagram",
    time: "2h ago",
  },
];

const engagementMetrics = [
  { icon: Heart, label: "Likes", value: "156K", change: "+12.5%", positive: true },
  { icon: MessageCircle, label: "Comments", value: "24.8K", change: "+8.3%", positive: true },
  { icon: Share2, label: "Shares", value: "8.2K", change: "+15.7%", positive: true },
  { icon: Bookmark, label: "Saves", value: "12.4K", change: "-2.1%", positive: false },
];

const platformEngagement = [
  { platform: "Instagram", rate: 5.2, replies: 89, avgTime: "2.4h" },
  { platform: "YouTube", rate: 6.1, replies: 76, avgTime: "4.2h" },
  { platform: "X", rate: 4.2, replies: 92, avgTime: "1.2h" },
  { platform: "Facebook", rate: 3.8, replies: 65, avgTime: "3.8h" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-border">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground capitalize">{entry.dataKey}:</span>
            <span className="font-medium">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const Engagement = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 lg:mb-8"
      >
        <h2 className="text-xl lg:text-2xl font-display font-bold mb-1">Engagement</h2>
        <p className="text-muted-foreground text-sm lg:text-base">Track interactions and respond to your audience</p>
      </motion.div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        {engagementMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-xl p-4 lg:p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={cn(
                "text-xs font-medium",
                metric.positive ? "text-green-400" : "text-red-400"
              )}>
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-display font-bold">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Weekly Engagement</h3>
          <p className="text-sm text-muted-foreground mb-4">Interactions over the past week</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
                <XAxis dataKey="day" stroke="hsl(215 20% 65%)" fontSize={12} />
                <YAxis stroke="hsl(215 20% 65%)" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="likes" stroke="#E1306C" strokeWidth={2} dot={{ fill: "#E1306C" }} />
                <Line type="monotone" dataKey="comments" stroke="#833AB4" strokeWidth={2} dot={{ fill: "#833AB4" }} />
                <Line type="monotone" dataKey="shares" stroke="#4267B2" strokeWidth={2} dot={{ fill: "#4267B2" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-instagram" />
              <span className="text-xs text-muted-foreground">Likes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Comments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-facebook" />
              <span className="text-xs text-muted-foreground">Shares</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Response Metrics</h3>
          <p className="text-sm text-muted-foreground mb-4">Your engagement performance by platform</p>
          <div className="space-y-4">
            {platformEngagement.map((item, index) => (
              <div key={item.platform} className="flex items-center gap-4">
                <span className="text-sm font-medium w-20">{item.platform}</span>
                <div className="flex-1">
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.rate / 7) * 100}%` }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="h-full platform-instagram rounded-full"
                    />
                  </div>
                </div>
                <span className="text-sm font-bold w-12 text-right">{item.rate}%</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <Reply className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-lg font-bold font-display">89%</p>
              <p className="text-xs text-muted-foreground">Reply Rate</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <MessageSquare className="w-5 h-5 mx-auto mb-1 text-primary" />
              <p className="text-lg font-bold font-display">2.4h</p>
              <p className="text-xs text-muted-foreground">Avg Response</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Interactions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass-card rounded-xl p-4 lg:p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display font-semibold text-lg">Recent Interactions</h3>
            <p className="text-sm text-muted-foreground">Latest comments, mentions, and shares</p>
          </div>
          <button className="text-sm text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-3">
          {recentInteractions.map((interaction, index) => (
            <motion.div
              key={interaction.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-instagram flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {interaction.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{interaction.user}</span>
                  <div className={cn("w-4 h-4 rounded flex items-center justify-center", interaction.colorClass)}>
                    <interaction.platformIcon className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-xs text-muted-foreground">{interaction.time}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">{interaction.message}</p>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Reply
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Engagement;
