using System;
using System.Globalization;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class BoekingController : ControllerBase
{
    public static List<Dag> dagen = new List<Dag>();

    private int maxPeople = 10;

    public BoekingController()
    {
        if (dagen.Count() > 0) return;

        //reset list
        dagen = new List<Dag>();

        //add days
        for (int i = 1; i <= 14; i++)
        {
            if (i == 4)
            {
                dagen.Add(new Dag() { dayNumber = i, amount = maxPeople });
            }
            else
            {
                dagen.Add(new Dag() { dayNumber = i });
            }
        }
    }

    [HttpGet]
    [Route("boekingen")]
    public IEnumerable<Dag> Get()
    {
        return dagen;
    }

    [HttpPost]
    [Route("boek")]
    public Response Post([FromBody] RequestData value)
    {
        //validate if there is enough places left
        Dag day = dagen[value.dayNumber - 1];
        if (day.amount + value.amount > maxPeople)
        {
            return new Response() { code = 400, message = "Helaas, Er zijn geen plekken beschikbaar op deze datum" };
        }

        //validate email
        if (!IsValidEmail(value.email))
        {
            return new Response() { code = 400, message = "Ongeldige E-mailadres" };
        }

        //check amount
        if (value.amount <=0)
        {
            return new Response() { code = 400, message = "Ongeldige Aantal Mensen" };
        }


        dagen[value.dayNumber - 1].amount += value.amount;

        return new Response() { code = 200, message = "Succesvol Geboekt" };
    }

    public static bool IsValidEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
            return false;

        try
        {
            // Normalize the domain
            email = Regex.Replace(email, @"(@)(.+)$", DomainMapper,
                                  RegexOptions.None, TimeSpan.FromMilliseconds(200));

            // Examines the domain part of the email and normalizes it.
            string DomainMapper(Match match)
            {
                // Use IdnMapping class to convert Unicode domain names.
                var idn = new IdnMapping();

                // Pull out and process domain name (throws ArgumentException on invalid)
                string domainName = idn.GetAscii(match.Groups[2].Value);

                return match.Groups[1].Value + domainName;
            }
        }
        catch (RegexMatchTimeoutException e)
        {
            return false;
        }
        catch (ArgumentException e)
        {
            return false;
        }

        try
        {
            return Regex.IsMatch(email,
                @"^[^@\s]+@[^@\s]+\.[^@\s]+$",
                RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250));
        }
        catch (RegexMatchTimeoutException)
        {
            return false;
        }
    }
}

public class Dag
{
    public int dayNumber { get; set; }
    public int amount { get; set; }
}

public class RequestData
{

    public string email { get; set; }
    public int dayNumber { get; set; }
    public int amount { get; set; }
}

public class Response
{
    public int code { get; set; }
    public string message { get; set; }
}