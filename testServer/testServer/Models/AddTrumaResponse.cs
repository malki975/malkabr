using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace WebApiTest.Models
{
    [DataContract]
    public class AddTrumaResponse
    {

        [DataMember]
        public string TrumaID { get; set; }

        //סטטוס
        [DataMember]
        public string Status { get; set; }

    }
}