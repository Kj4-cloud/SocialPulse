import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const posts = [
  {
    id: 1,
    platform: "Instagram",
    icon: Instagram,
    colorClass: "platform-instagram",
    title: "Behind the scenes of our new product launch",
    likes: "24.5K",
    comments: "1.2K",
    shares: "856",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    platform: "YouTube",
    icon: Youtube,
    colorClass: "platform-youtube",
    title: "Complete Tutorial: Advanced Analytics",
    likes: "45.2K",
    comments: "3.8K",
    shares: "2.1K",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    platform: "X",
    icon: Twitter,
    colorClass: "platform-twitter",
    title: "Exciting news coming next week! Stay tuned...",
    likes: "12.8K",
    comments: "892",
    shares: "4.5K",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    platform: "Facebook",
    icon: Facebook,
    colorClass: "platform-facebook",
    title: "Community spotlight: Meet our amazing users",
    likes: "8.9K",
    comments: "567",
    shares: "1.2K",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
  },
];

const TopPosts = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-semibold text-lg">Top Performing Posts</h3>
          <p className="text-sm text-muted-foreground">Your best content this week</p>
        </div>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <div className={cn("w-5 h-5 rounded flex items-center justify-center", post.colorClass)}>
                  <post.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs text-muted-foreground">{post.platform}</span>
              </div>
              <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                {post.title}
              </p>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span className="text-xs">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">{post.shares}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TopPosts;
