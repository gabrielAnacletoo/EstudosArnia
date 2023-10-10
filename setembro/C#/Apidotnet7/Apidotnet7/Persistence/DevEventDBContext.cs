using Apidotnet7.Entities;

namespace Apidotnet7.Persistence
{
    public class DevEventDBContext
    {
        public List<DevEvent> DevEvents { get; set; }

        public DevEventDBContext() { 
        DevEvents = new List<DevEvent>();
        }
    }
}
