using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace MyDemoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StockController : ControllerBase
    {
        private static readonly List<StockData> _stocks = StockData.GetStocks();

        private readonly ILogger<StockController> _logger;

        public StockController(ILogger<StockController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetStockList")]
        public IActionResult Get()
        {
            try
            {
                _logger.LogInformation("Fetching stock list.");
                return Ok(_stocks);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching stocks.");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}