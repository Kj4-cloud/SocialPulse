import { motion } from "framer-motion";
import { Users, Eye, TrendingUp, Heart, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Layout from "@/components/layout/Layout";
import StatsCard from "@/components/dashboard/StatsCard";
import PlatformCard from "@/components/dashboard/PlatformCard";
import EngagementChart from "@/components/dashboard/EngagementChart";
import TopPosts from "@/components/dashboard/TopPosts";
import AudienceChart from "@/components/dashboard/AudienceChart";
import RecentActivity from "@/components/dashboard/RecentActivity";

const stats = [
  { title: "Total Followers", value: "2.4M", change: "+12.5%", changeType: "positive", icon: Users },
  { title: "Total Reach", value: "8.2M", change: "+8.3%", changeType: "positive", icon: Eye },
  { title: "Engagement Rate", value: "4.8%", change: "+2.1%", changeType: "positive", icon: TrendingUp },
  { title: "Total Likes", value: "156K", change: "-1.2%", changeType: "negative", icon: Heart },
];

const platforms = [
  { platform: "Instagram", followers: "1.2M", engagement: "5.2%", posts: "342", growth: "+15.2%", icon: Instagram, colorClass: "platform-instagram" },
  { platform: "Facebook", followers: "890K", engagement: "3.8%", posts: "128", growth: "+8.4%", icon: Facebook, colorClass: "platform-facebook" },
  { platform: "YouTube", followers: "245K", engagement: "6.1%", posts: "86", growth: "+22.1%", icon: Youtube, colorClass: "platform-youtube" },
  { platform: "X (Twitter)", followers: "156K", engagement: "4.2%", posts: "512", growth: "+5.8%", icon: Twitter, colorClass: "platform-twitter" },
];

const Index = () => {
  return (
    <Layout>
      {/* Welcome Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 lg:mb-8"
      >
        <h2 className="text-xl lg:text-2xl font-display font-bold mb-1">
          Welcome back, <span className="gradient-text">Karan</span>
        </h2>
        <p className="text-muted-foreground text-sm lg:text-base">
          Here's what's happening with your social media today
        </p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* Platform Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 lg:mb-8"
      >
        <h3 className="font-display font-semibold text-lg mb-4">Platform Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.platform} {...platform} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
        <div className="lg:col-span-2">
          <EngagementChart />
        </div>
        <AudienceChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <TopPosts />
        <RecentActivity />
      </div>
    </Layout>
  );
};

export default Index;
