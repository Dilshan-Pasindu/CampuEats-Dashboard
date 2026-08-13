using CampusEats.Api.Dtos;
using CampusEats.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace CampusEats.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class MenuController : ControllerBase
{
    private readonly IMenuService _svc;

    public MenuController(IMenuService svc)
        => _svc = svc;

    [HttpGet]
    public ActionResult<IEnumerable<MenuItemDto>> GetAll()
        => Ok(_svc.GetAll());

    [HttpGet("{id}")]
    public ActionResult<MenuItemDto> GetById(int id)
    {
        var item = _svc.GetById(id);
        return item is null ? NotFound() : Ok(item);
    }

    [HttpPost]
    [Authorize(Roles = "Admin")] // create: Admins only
    public ActionResult<MenuItemDto> Create(
        [FromBody] CreateMenuItemDto dto)
    {
        var created = _svc.Create(dto);

        return CreatedAtAction(
            nameof(GetById),
            new { id = created.Id },
            created);
    }
    
    [HttpPut("{id}")] // PUT /api/menu/1
    [Authorize(Roles = "Admin")] // update: Admins only
    public IActionResult Update(int id,
    [FromBody] CreateMenuItemDto dto)
    {
    var ok = _svc.Update(id, dto);
    return ok ? NoContent() : NotFound(); // 204/404
    }
    [HttpDelete("{id}")] // DELETE /api/menu/1
    [Authorize(Roles = "Admin")] // delete: Admins only
    public IActionResult Delete(int id)
    {
    var ok = _svc.Delete(id);
    return ok ? NoContent() : NotFound(); // 204/404
    }

}
