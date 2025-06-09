import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Player {
  id: string;
  nickname: string;
  currentGold: number;
  lastSeen: string;
}

const GoldDistributionPanel = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [goldAmount, setGoldAmount] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDistributing, setIsDistributing] = useState(false);

  // Mock player data
  const mockPlayers: Player[] = [
    {
      id: "1",
      nickname: "ProGamer2024",
      currentGold: 1250,
      lastSeen: "5 минут назад",
    },
    {
      id: "2",
      nickname: "SnipeKing",
      currentGold: 890,
      lastSeen: "1 час назад",
    },
    {
      id: "3",
      nickname: "RushMaster",
      currentGold: 2100,
      lastSeen: "15 минут назад",
    },
  ];

  const filteredPlayers = mockPlayers.filter(
    (player) =>
      player.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.id.includes(searchQuery),
  );

  const handleDistributeGold = async () => {
    if (!selectedPlayer || !goldAmount) return;

    setIsDistributing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsDistributing(false);
    setGoldAmount("");
    setSelectedPlayer(null);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-yellow-800">
            <Icon name="Coins" size={28} className="text-yellow-600" />
            Раздача золота Standoff 2
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Player Search */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Поиск игрока
              </h3>
              <div className="relative">
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Введите ник или ID игрока..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2">
                {filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    onClick={() => setSelectedPlayer(player)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedPlayer?.id === player.id
                        ? "bg-yellow-100 border-yellow-400"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">
                          {player.nickname}
                        </p>
                        <p className="text-sm text-gray-500">ID: {player.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-yellow-600">
                          {player.currentGold} 🪙
                        </p>
                        <p className="text-xs text-gray-400">
                          {player.lastSeen}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Distribution */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Выдача золота
              </h3>

              {selectedPlayer && (
                <Card className="bg-white border-yellow-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="User" size={20} className="text-blue-500" />
                      <div>
                        <p className="font-medium">{selectedPlayer.nickname}</p>
                        <p className="text-sm text-gray-500">
                          Текущий баланс: {selectedPlayer.currentGold} 🪙
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Input
                        type="number"
                        placeholder="Количество золота"
                        value={goldAmount}
                        onChange={(e) => setGoldAmount(e.target.value)}
                        min="1"
                        max="10000"
                      />

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setGoldAmount("100")}
                        >
                          +100
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setGoldAmount("500")}
                        >
                          +500
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setGoldAmount("1000")}
                        >
                          +1000
                        </Button>
                      </div>

                      <Button
                        onClick={handleDistributeGold}
                        disabled={!goldAmount || isDistributing}
                        className="w-full bg-yellow-600 hover:bg-yellow-700"
                      >
                        {isDistributing ? (
                          <>
                            <Icon
                              name="Loader2"
                              size={18}
                              className="animate-spin mr-2"
                            />
                            Выдача...
                          </>
                        ) : (
                          <>
                            <Icon name="Send" size={18} className="mr-2" />
                            Выдать {goldAmount} золота
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!selectedPlayer && (
                <div className="text-center py-8 text-gray-500">
                  <Icon
                    name="UserSearch"
                    size={48}
                    className="mx-auto mb-2 opacity-50"
                  />
                  <p>Выберите игрока для раздачи золота</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldDistributionPanel;
