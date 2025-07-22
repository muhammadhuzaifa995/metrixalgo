
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Sept 10", value: 100000 },
  { name: "Sept 11", value: 100000 },
  { name: "Sept 12", value: 100000 },
  { name: "Sept 13", value: 100000 },
  { name: "Sept 14", value: 100000 },
  { name: "Sept 15", value: 100000 },
  { name: "Sept 16", value: 100000 },
]

const Example = () => {
  return (
    <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
  );
};

export default Example;
