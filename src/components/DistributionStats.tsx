import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DistributionStats = () => {
  const stats = [
    {
      title: "Всего выдано золота",
      value: "45,230",
      icon: "Coins",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      change: "+12.5%",
      changeType: "positive",
    },
    {
      title: "Раздач сегодня",
      value: "23",
      icon: "Send",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+5",
      changeType: "positive",
    },
    {
      title: "Активных игроков",
      value: "1,247",
      icon: "Users",
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+8.3%",
      changeType: "positive",
    },
    {
      title: "Средняя раздача",
      value: "850",
      icon: "TrendingUp",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: "-2.1%",
      changeType: "negative",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">за месяц</span>
                </div>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-full`}>
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className={stat.color}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DistributionStats;
