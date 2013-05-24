using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ImageFlipView.Controllers
{
    public class ImagesController : ApiController
    {
        public IList<string> Get()
        {
            return new List<string>{
            "/Images/1.jpg",
            "/Images/2.jpg",
            "/Images/3.jpg",
            "/Images/4.jpg",
            "/Images/5.jpg",
            "/Images/7.jpg",
            "/Images/8.jpg",
            "/Images/9.jpg",
            "/Images/10.jpg",
            "/Images/11.jpg"};
        }
    }
}
