import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", instagram: 4200, facebook: 2400, youtube: 1800, twitter: 3200 },
  { name: "Tue", instagram: 3800, facebook: 2200, youtube: 2100, twitter: 2800 },
  { name: "Wed", instagram: 5100, facebook: 2800, youtube: 2400, twitter: 3600 },
  { name: "Thu", instagram: 4600, facebook: 3100, youtube: 1900, twitter: 4100 },
  { name: "Fri", instagram: 5800, facebook: 3400, youtube: 2800, twitter: 4800 },
  { name: "Sat", instagram: 6200, facebook: 3800, youtube: 3200, twitter: 5200 },
  { name: "Sun", instagram: 5400, facebook: 3200, youtube: 2600, twitter: 4400 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-border">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground capitalize">{entry.dataKey}:</span>
            <span className="font-medium">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const EngagementChart = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-lg">Engagement Overview</h3>
          <p className="text-sm text-muted-foreground">Weekly engagement across platforms</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-instagram" />
            <span className="text-xs text-muted-foreground">Instagram</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-facebook" />
            <span className="text-xs text-muted-foreground">Facebook</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-youtube" />
            <span className="text-xs text-muted-foreground">YouTube</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-foreground" />
            <span className="text-xs text-muted-foreground">X</span>
          </div>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E1306C" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4267B2" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4267B2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorYoutube" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTwitter" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" />
            <XAxis dataKey="name" stroke="hsl(215 20% 65%)" fontSize={12} />
            <YAxis stroke="hsl(215 20% 65%)" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="instagram"
              stroke="#E1306C"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorInstagram)"
            />
            <Area
              type="monotone"
              dataKey="facebook"
              stroke="#4267B2"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorFacebook)"
            />
            <Area
              type="monotone"
              dataKey="youtube"
              stroke="#FF0000"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorYoutube)"
            />
            <Area
              type="monotone"
              dataKey="twitter"
              stroke="#FFFFFF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTwitter)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default EngagementChart;
