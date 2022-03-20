using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiTest.Models;
using WebApiTest.Application;
using System.Web.Http;

using System.Net;
using System.Net.Http;

using System.Configuration;



namespace WebApiTest.Controllers
{
    public class TrumotController : ApiController
    {
        ApiService service = new ApiService();

        [Route("AddTruma")]
        [HttpPost]
        public AddTrumaResponse AddTruma(AddTrumaRequest truma)
        {
            return service.AddTruma(truma);
        }
    }
}