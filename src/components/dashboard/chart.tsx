"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getMonthlyUserData } from "@/lib/data";

export default function UserChart () {
  const [data, setData] = useState<{ month: string; users: number }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const monthlyData = await getMonthlyUserData();
      const formattedData = monthlyData.map((item) => ({
        month: item.month,
        users: Number(item.users),
      }));
      setData(formattedData);
    }
    fetchData();
  }, []);

  return (
    <div className="col-span-12 flex-col gap-2 justify-center items-center w-full h-[200px] md:h-[450px] bg-[#212529] rounded-lg border border-white/30 py-2 md:py-5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip wrapperStyle={{ color: "#000" }} />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#67aaed"
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};