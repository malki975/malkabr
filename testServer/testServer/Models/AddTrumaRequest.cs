using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace WebApiTest.Models
{
    [DataContract]
    public class AddTrumaRequest
    {

        //שם הישות המדינית הזרה
        [DataMember]
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        //סכום התרומה בשח
        [DataMember]
        [Required(ErrorMessage = "Sum is required")]
        public float Sum { get; set; }

        //סוג הישות המדינית הזרה
        [DataMember]
        [Required(ErrorMessage = "Type is required")]
        public string Type { get; set; }

        //ייעוד התרומה
        [DataMember]
        [Required(ErrorMessage = "Purpose is required")]
        public string Purpose { get; set; }

        //התנאים לתרומה
        [DataMember]
        public string Terms { get; set; }

        //סוג המטבע
        [DataMember]
        [Required(ErrorMessage = "CurrencyType is required")]
        public string CurrencyType { get; set; }

        //שער ההמרה 
        [DataMember]
        [Required(ErrorMessage = "ExchangeRate is required")]
        public float ExchangeRate { get; set; }


    }
}