using System;
using System.Collections.Generic;

namespace MyDemoAPI
{
    public class StockData
    {
        private static readonly Random _r = new Random();

        public int Id { get; set; }
        public string Ticker { get; set; } = "";
        public decimal Price { get; set; }
        public float ChangePercent { get; set; }

        public StockData(int id, string ticker, decimal price, float changePercent)
        {
            Id = id;
            Ticker = ticker;
            Price = price;
            ChangePercent = changePercent;
        }

        private static decimal _randomPrice() => Math.Round((decimal)(_r.NextDouble() * 1000 + 50), 2);
        private static float _randomChange() => (float)Math.Round(_r.NextDouble() * 10 - 5, 2);

        public static List<StockData> GetStocks() => new List<StockData>
        {
            new StockData(1, "AAPL", _randomPrice(), _randomChange()),
            new StockData(2, "MSFT", _randomPrice(), _randomChange()),
            new StockData(3, "GOOGL", _randomPrice(), _randomChange()),
            new StockData(4, "AMZN", _randomPrice(), _randomChange()),
            new StockData(5, "TSLA", _randomPrice(), _randomChange()),
            new StockData(6, "NVDA", _randomPrice(), _randomChange()),
            new StockData(7, "META", _randomPrice(), _randomChange()),
            new StockData(8, "SPY", _randomPrice(), _randomChange())
        };
    }
}
