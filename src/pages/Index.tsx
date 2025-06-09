import React from "react";
import GoldDistributionPanel from "@/components/GoldDistributionPanel";
import DistributionStats from "@/components/DistributionStats";
import TransactionHistory from "@/components/TransactionHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Админ-панель Standoff 2
              </h1>
              <p className="text-gray-600">
                Управление раздачей золота и мониторинг игроков
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Администратор</p>
              <p className="text-lg font-semibold text-gray-800">👨‍💼 Максим</p>
            </div>
          </div>
        </div>

        <DistributionStats />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <GoldDistributionPanel />
          </div>
          <div>
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
