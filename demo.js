/*
Find the "button" we want to listen to, and say
that if it gets clicked then call the displayAboutMe function.
*/

document.getElementById("about-me").addEventListener("click", displayAboutMe);


function displayAboutMe()
{
 
  if(document.getElementById("about-me-text"))
  {
    //Element already exists -> remove it!
    document.getElementById("about-me-text").remove();
  }
  else
  {
     var paragraph = document.createElement("p");
  paragraph.setAttribute("id","about-me-text");
    var text = document.createTextNode("Hello! This is my page and I would like to introduce myself. My name is Daria Mikhailova, short name is Dasha and I am 19 years old. I was born and grew up in Crimea, Sevastopol in Russia. When I was 15 before I moved to Sweden I lived in Sochi in Russia for about one year. Now I have lived in Sweden for a bit more than three years and I really like it here. I am a person who is positive about every aspect of life. There are many things I like to do, to see and to experience. I like to cook, spend time with my friends and family and my dog, talk with people and learn new things. I am good at learning things fast and it is one of my most valuable skills.");   
  paragraph.appendChild(text);    
  document.getElementById("about-me-div").appendChild(paragraph); 
  }
  
}

/*
---------------------------------------------
*/
/*
Find the "button" we want to listen to, and say
that if it gets clicked then call the displayMySkills function.
*/
document.getElementById("education").addEventListener("click", displayEducation);


function displayEducation()
{
  
  /*
  if we find an element with the id "my-skills-text"
  then remove it because it means it already got displayed before!
  */
  if(document.getElementById("education-text"))
  {
    //Element already exists -> remove it!
    document.getElementById("education-text").remove();
  }
  else
  {
    /*
    Else -> the element doesn't exist, create it!
    */
    
  //Create a <p> element.
  var paragraph = document.createElement("p");
 
  //<p id="my-skills-text"> , (set the id to "my-skills-text")
  paragraph.setAttribute("id","education-text");
    
    //Create text we want to be inside the <p> tag
    var text = document.createTextNode("In Sevastopol I finished 9 years of elementary school and after that I moved to Sochi and did not study there because we were busy with making documents to be able to move to Sweden. In Helsingborg after a year living here I started speakintroduction in gymnasium and spent there one year and two month. After finishing language introduction I studied SFI and SAS at Komvux for a year and finally now I am studying programming because it is very interesting and i think that programming is a big part of our future.");   
    //Add the text to the <p> tag!
    paragraph.appendChild(text);  
    
    //Find the div and add the paragraph
    document.getElementById("education-div").appendChild(paragraph); 
  }
  
}

/*
-------------------------------------
*/
document.getElementById("contact").addEventListener("click", displayContact);


function displayContact()
{
 
  if(document.getElementById("contact-me-text"))
  {
    //Element already exists -> remove it!
    document.getElementById("contact-me-text").remove();
  }
  else
  {
     var paragraph = document.createElement("p");
  paragraph.setAttribute("id","contact-me-text");
    var text = document.createTextNode("You can contact me via e-mail: dashakersh1711@gmail.com or by phone: 0790460654");   
  paragraph.appendChild(text);    
  document.getElementById("contact-div").appendChild(paragraph); 
  }
  
}

document.getElementById("hobbies").addEventListener("click", displayHobbies);


function displayHobbies()
{
 
  if(document.getElementById("hobbies-text"))
  {
    //Element already exists -> remove it!
    document.getElementById("hobbies-text").remove();
  }
  else
  {
     var paragraph = document.createElement("p");
  paragraph.setAttribute("id","hobbies-text");
    var text = document.createTextNode("A few things I love: cooking, taking walks in the forest, watching movies or series,decorating and more other activities.");   
  paragraph.appendChild(text);    
  document.getElementById("hobbies-div").appendChild(paragraph); 
  }
  
}
 


document.getElementById("languages").addEventListener("click", displayLanguages);


function displayLanguages()
{
 
  if(document.getElementById("languages-text"))
  {
    //Element already exists -> remove it!
    document.getElementById("languages-text").remove();
  }
  else
  {
     var paragraph = document.createElement("p");
  paragraph.setAttribute("id","languages-text");
    var text = document.createTextNode("I speak four languages, it is Russian, Ukrainian, English and Swedish. When I was younger I learned Polish as well and I understand Serbian and Macedonian but I do not speak these languages so good.");   
  paragraph.appendChild(text);    
  document.getElementById("languages-div").appendChild(paragraph); 
  }
  
}