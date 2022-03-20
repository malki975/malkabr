using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using WebApiTest.Models;


namespace WebApiTest.Application
{
    public class ApiService
    {
        string regex = "/ ^[A - Za - z0 - 9] +$/";
        public AddTrumaResponse AddTruma(AddTrumaRequest truma)
        {
            if(truma.Sum > 10000)
            {
                using (SmtpClient client = new SmtpClient("<smtp-server-address>", 25))
                {
                    // Configure the client  
                    client.EnableSsl = true;
                    client.Credentials = new NetworkCredential("<username>", "<word>");
                    // client.UseDefaultCredentials = true;  

                    // A client has been created, now you need to create a MailMessage object  
                    MailMessage message = new MailMessage(
                                             "123@gmail.com", // From field  
                                             "malkbron@gmail.com", // Recipient field  
                                             "bravoo,Thanks!", // Subject of the email message  
                                             "סכום התרומה בשח גדול מ-10000" // Email message body  
                                          );

                    // Send the message  
                    client.Send(message);                    
                    Console.WriteLine("Email has been sent.");
                }
            }

            //add db functions in DBRepository...
            //send to DBRepository "truma" object to add to the DB...

            return new AddTrumaResponse() { TrumaID = "123", Status = "success" };

        }
    }
}