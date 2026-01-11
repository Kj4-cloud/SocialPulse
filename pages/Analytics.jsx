import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { TrendingUp, TrendingDown, Eye, Users, Heart, Share2, ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const monthlyData = [
  { month: "Jan", followers: 180000, engagement: 4.2, reach: 520000 },
  { month: "Feb", followers: 195000, engagement: 4.5, reach: 580000 },
  { month: "Mar", followers: 220000, engagement: 4.8, reach: 650000 },
  { month: "Apr", followers: 245000, engagement: 5.1, reach: 720000 },
  { month: "May", followers: 280000, engagement: 5.4, reach: 850000 },
  { month: "Jun", followers: 320000, engagement: 5.2, reach: 920000 },
];

const platformComparison = [
  { name: "Instagram", followers: 1200000, engagement: 5.2, growth: 15.2 },
  { name: "Facebook", followers: 890000, engagement: 3.8, growth: 8.4 },
  { name: "YouTube", followers: 245000, engagement: 6.1, growth: 22.1 },
  { name: "X", followers: 156000, engagement: 4.2, growth: 5.8 },
];

const contentPerformance = [
  { type: "Reels", views: 2400000, engagement: 6.8, shares: 45000 },
  { type: "Posts", views: 1800000, engagement: 4.2, shares: 28000 },
  { type: "Stories", views: 1200000, engagement: 3.1, shares: 12000 },
  { type: "Videos", views: 890000, engagement: 7.2, shares: 52000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-border">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground capitalize">{entry.name}:</span>
            <span className="font-medium">{typeof entry.value === 'number' && entry.value > 1000 ? (entry.value / 1000).toFixed(1) + 'K' : entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const MetricCard = ({ title, value, change, icon: Icon, positive = true }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ y: -4 }}
    className="glass-card rounded-xl p-4 lg:p-5"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className={cn(
        "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
        positive ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
      )}>
        {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {change}
      </div>
    </div>
    <p className="text-2xl font-display font-bold">{value}</p>
    <p className="text-sm text-muted-foreground">{title}</p>
  </motion.div>
);

const Analytics = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 lg:mb-8"
      >
        <h2 className="text-xl lg:text-2xl font-display font-bold mb-1">Analytics</h2>
        <p className="text-muted-foreground text-sm lg:text-base">Deep dive into your performance metrics</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        <MetricCard title="Total Reach" value="8.2M" change="+18.5%" icon={Eye} />
        <MetricCard title="Impressions" value="24.5M" change="+12.3%" icon={ArrowUpRight} />
        <MetricCard title="Avg. Engagement" value="5.2%" change="+0.8%" icon={Heart} />
        <MetricCard title="Share Rate" value="2.4%" change="-0.3%" icon={Share2} positive={false} />
      </div>

      {/* Growth Chart */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-xl p-4 lg:p-5 mb-6"
      >
        <h3 className="font-display font-semibold text-lg mb-1">Growth Trends</h3>
        <p className="text-sm text-muted-foreground mb-4">Monthly performance across all platforms</p>
        <div className="h-64 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#833AB4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#833AB4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E1306C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
              <XAxis dataKey="month" stroke="hsl(215 20% 65%)" fontSize={12} />
              <YAxis stroke="hsl(215 20% 65%)" fontSize={12} tickFormatter={(v) => (v / 1000) + 'K'} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area type="monotone" dataKey="followers" name="Followers" stroke="#833AB4" strokeWidth={2} fillOpacity={1} fill="url(#colorFollowers)" />
              <Area type="monotone" dataKey="reach" name="Reach" stroke="#E1306C" strokeWidth={2} fillOpacity={1} fill="url(#colorReach)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Platform Comparison & Content Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Platform Comparison</h3>
          <p className="text-sm text-muted-foreground mb-4">Engagement rates by platform</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformComparison} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
                <XAxis type="number" stroke="hsl(215 20% 65%)" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="hsl(215 20% 65%)" fontSize={12} width={80} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="engagement" name="Engagement %" fill="#833AB4" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Content Performance</h3>
          <p className="text-sm text-muted-foreground mb-4">Views by content type</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contentPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
                <XAxis dataKey="type" stroke="hsl(215 20% 65%)" fontSize={12} />
                <YAxis stroke="hsl(215 20% 65%)" fontSize={12} tickFormatter={(v) => (v / 1000000).toFixed(1) + 'M'} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="views" name="Views" fill="#E1306C" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Analytics;
