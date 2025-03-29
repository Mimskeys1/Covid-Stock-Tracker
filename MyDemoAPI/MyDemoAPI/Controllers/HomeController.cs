using Microsoft.AspNetCore.Mvc;

namespace MyDemoAPI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
