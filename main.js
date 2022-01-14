var images = ["WhatsApp Image 2022-01-14 at 18.14.13 (1).jpeg","WhatsApp Image 2022-01-14 at 18.14.13 (1).jpeg", "WhatsApp Image 2022-01-14 at 18.14.13.jpeg" , "WhatsApp Image 2022-01-14 at 18.14.13 (2).jpeg", "WhatsApp Image 2022-01-14 at 18.14.13 (3).jpeg" ];
var names = ["Fmaily Book","Aarav Jain", "Rinku Jain", "Kushagra Jain", "Deepak Jain" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
