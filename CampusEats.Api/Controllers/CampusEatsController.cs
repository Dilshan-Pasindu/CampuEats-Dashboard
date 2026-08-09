using Microsoft.AspNetCore.Mvc;

namespace CampusEats.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampusEatsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new
            {
                message = "CampusEats API is running!"
            });
        }
    }
}

