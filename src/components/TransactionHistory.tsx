import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Transaction {
  id: string;
  playerNickname: string;
  amount: number;
  timestamp: string;
  status: "completed" | "pending" | "failed";
  adminNote?: string;
}

const TransactionHistory = () => {
  const transactions: Transaction[] = [
    {
      id: "TXN001",
      playerNickname: "ProGamer2024",
      amount: 1000,
      timestamp: "2024-01-15 14:30",
      status: "completed",
      adminNote: "Награда за турнир",
    },
    {
      id: "TXN002",
      playerNickname: "SnipeKing",
      amount: 500,
      timestamp: "2024-01-15 13:15",
      status: "completed",
      adminNote: "Компенсация за баг",
    },
    {
      id: "TXN003",
      playerNickname: "RushMaster",
      amount: 2000,
      timestamp: "2024-01-15 12:45",
      status: "pending",
      adminNote: "Проверка активности",
    },
    {
      id: "TXN004",
      playerNickname: "ElitePlayer",
      amount: 750,
      timestamp: "2024-01-15 11:20",
      status: "failed",
      adminNote: "Игрок не найден",
    },
    {
      id: "TXN005",
      playerNickname: "CyberNinja",
      amount: 1500,
      timestamp: "2024-01-15 10:10",
      status: "completed",
      adminNote: "Ежедневная награда",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Icon name="CheckCircle" size={16} className="text-green-500" />;
      case "pending":
        return <Icon name="Clock" size={16} className="text-yellow-500" />;
      case "failed":
        return <Icon name="XCircle" size={16} className="text-red-500" />;
      default:
        return <Icon name="Circle" size={16} className="text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Завершено";
      case "pending":
        return "В обработке";
      case "failed":
        return "Ошибка";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="History" size={24} />
          История раздач
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(transaction.status)}
                  <span className="text-sm text-gray-600">
                    {getStatusText(transaction.status)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {transaction.playerNickname}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction.timestamp}
                  </p>
                  {transaction.adminNote && (
                    <p className="text-xs text-gray-400 mt-1">
                      {transaction.adminNote}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-600">
                  +{transaction.amount} 🪙
                </p>
                <p className="text-xs text-gray-400">{transaction.id}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Показать больше транзакций →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
