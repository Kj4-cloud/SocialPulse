import { motion } from "framer-motion";
import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { Users, MapPin, Globe, Clock, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const ageData = [
  { name: "13-17", value: 8, color: "#FF6B6B" },
  { name: "18-24", value: 28, color: "#E1306C" },
  { name: "25-34", value: 35, color: "#833AB4" },
  { name: "35-44", value: 18, color: "#4267B2" },
  { name: "45-54", value: 8, color: "#00D4FF" },
  { name: "55+", value: 3, color: "#00FF88" },
];

const genderData = [
  { name: "Female", value: 54, color: "#E1306C" },
  { name: "Male", value: 42, color: "#4267B2" },
  { name: "Other", value: 4, color: "#833AB4" },
];

const locationData = [
  { country: "United States", followers: 420000, percentage: 35 },
  { country: "United Kingdom", followers: 180000, percentage: 15 },
  { country: "India", followers: 144000, percentage: 12 },
  { country: "Brazil", followers: 120000, percentage: 10 },
  { country: "Germany", followers: 96000, percentage: 8 },
  { country: "Others", followers: 240000, percentage: 20 },
];

const activeHours = [
  { hour: "6AM", instagram: 15, facebook: 12, youtube: 8, twitter: 10 },
  { hour: "9AM", instagram: 45, facebook: 38, youtube: 22, twitter: 35 },
  { hour: "12PM", instagram: 62, facebook: 55, youtube: 45, twitter: 52 },
  { hour: "3PM", instagram: 78, facebook: 65, youtube: 58, twitter: 68 },
  { hour: "6PM", instagram: 95, facebook: 82, youtube: 75, twitter: 88 },
  { hour: "9PM", instagram: 88, facebook: 72, youtube: 85, twitter: 78 },
  { hour: "12AM", instagram: 35, facebook: 28, youtube: 42, twitter: 32 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-2 border border-border">
        <p className="text-sm font-medium">{payload[0].name}: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const StatCard = ({ icon: Icon, title, value, subtitle }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ y: -4 }}
    className="glass-card rounded-xl p-4 lg:p-5"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="text-sm text-muted-foreground">{title}</span>
    </div>
    <p className="text-2xl font-display font-bold">{value}</p>
    <p className="text-xs text-muted-foreground">{subtitle}</p>
  </motion.div>
);

const Audience = () => {
  return (
    <Layout>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 lg:mb-8"
      >
        <h2 className="text-xl lg:text-2xl font-display font-bold mb-1">Audience Insights</h2>
        <p className="text-muted-foreground text-sm lg:text-base">Understand your audience demographics</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        <StatCard icon={Users} title="Total Audience" value="2.4M" subtitle="Across all platforms" />
        <StatCard icon={TrendingUp} title="Growth Rate" value="+12.5%" subtitle="Last 30 days" />
        <StatCard icon={Globe} title="Countries" value="142" subtitle="Worldwide reach" />
        <StatCard icon={Clock} title="Peak Hour" value="6 PM" subtitle="Most active time" />
      </div>

      {/* Demographics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Age Distribution</h3>
          <p className="text-sm text-muted-foreground mb-4">Audience breakdown by age group</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {ageData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-muted-foreground">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <h3 className="font-display font-semibold text-lg mb-1">Gender Distribution</h3>
          <p className="text-sm text-muted-foreground mb-4">Audience breakdown by gender</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {genderData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-muted-foreground">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Location & Active Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-lg">Top Locations</h3>
          </div>
          <div className="space-y-3">
            {locationData.map((loc, index) => (
              <div key={loc.country} className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-6">{index + 1}.</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{loc.country}</span>
                    <span className="text-xs text-muted-foreground">{(loc.followers / 1000).toFixed(0)}K ({loc.percentage}%)</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${loc.percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="h-full platform-instagram rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-4 lg:p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-lg">Active Hours</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activeHours}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
                <XAxis dataKey="hour" stroke="hsl(215 20% 65%)" fontSize={11} />
                <YAxis stroke="hsl(215 20% 65%)" fontSize={11} />
                <Tooltip content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="glass-card rounded-lg p-3 border border-border">
                        <p className="font-semibold mb-2">{label}</p>
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-muted-foreground capitalize">{entry.dataKey}:</span>
                            <span className="font-medium">{entry.value}%</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="instagram" fill="#E1306C" radius={[2, 2, 0, 0]} />
                <Bar dataKey="facebook" fill="#4267B2" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Audience;
