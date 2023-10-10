using Apidotnet7.Entities;
using Apidotnet7.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Apidotnet7.Controllers
{
    [Route("api/dev-events")]
    [ApiController]
    public class DevEventsController : ControllerBase
    {
        private readonly DevEventDBContext _context;
        public DevEventsController(DevEventDBContext context)
        {
            _context = context;            
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var devEvents = _context.DevEvents.Where(d => !d.IsDeleted).ToList();
            
            return Ok(devEvents); 
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var devEvent = _context.DevEvents.SingleOrDefault(d => d.Id == id);
            if(devEvent == null)
            {
                return NotFound();
            }
            return Ok(devEvent);
        }


        [HttpPost]
        public IActionResult Post(DevEvent devEvent)
        {
            _context.DevEvents.Add(devEvent);

            return CreatedAtAction(nameof(GetById), new {id = devEvent.Id }, devEvent);
        }


        [HttpPut("{id}")]
        public IActionResult Update(Guid id, DevEvent input)
        {
            var devEvent = _context.DevEvents.SingleOrDefault(d => d.Id == id);
            if (devEvent == null)
            {
                return NoContent();
            }
            devEvent.Update(input.Title, input.Description, input.StartDate, input.EndDate);

            return Ok(devEvent);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var devEvent = _context.DevEvents.SingleOrDefault(d => d.Id == id);
            if (devEvent == null)
            {
                return NoContent();
            }

            devEvent.Delete();

            return NoContent();

        }


    }
}
