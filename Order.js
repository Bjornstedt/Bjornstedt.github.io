//Skolarbete VT22

//Totalt pris med valda album, används i changeContent-funktionen
var total = 0;

//Uppdaterar högerspalten på sidan med valda album och pris
function changeContent(boxElement, divToChange, innerDiv) {

    var i = boxElement.value.indexOf("|");
    var cleaned = boxElement.value.substring(0,i);
    var price = parseInt(boxElement.value.substring(i+1, boxElement.value.length));
    s = document.getElementById(divToChange).innerHTML;

    if(boxElement.checked) {
       
        s += "<div class="+innerDiv+">" + cleaned + "</div>"
        document.getElementById(divToChange).innerHTML = s;
        total += price;
    }

    else {
        
        toReplace = "<div class=\""+innerDiv+"\">" + cleaned + "</div>";
        s = s.replace(toReplace, "");
        document.getElementById(divToChange).innerHTML = s;
        if (total == 0) {

        }
        else {
            total -= price;
        }
    }

//Skriver ut pris
    document.getElementById("sum").innerHTML = "Pris: " + total + " SEK";
}

//Visas om album ej finns i lager
function showAlert(element) {
    document.getElementById("checkbox").checked = false;
    alert("Ej i lager, kan inte beställas");
    

}

//Används för validitetskontroll
function spellCheck() {

    firstName = document.formularet.firstName.value;
    lastName = document.formularet.lastName.value;
    adress = document.formularet.adress.value;
    mail = document.formularet.mail.value;

	firstNameCheck = /^[A-Z][a-z]*-?[A-Z, a-z]*$/;
    lastNameCheck = /^[A-Z][a-z]*-?\s?[A-Z, a-z]*$/;
    adressCheck = /^[A-Z][a-z]*\s?-?[A-Z,a-z]*\s?\d{2,4}$/;
    mailCheck = /^\w\w*@{1}[A-Z, a-z,]+/;

    /*Namnet och efternamnet ska börja med en stor bokstav, följt av en eller flera små. En  
    del namn innehåller ”-” och sådana namn ska naturligtvis också vara tillåtna. 
    Observera dock att ”-” varken kan stå i början eller i slutet av ett namn/efternamn */

    /* Adressen ska börja med ett gatunamn som kan bestå av ett eller flera ord och avslutas 
    med gatunummer (2-4 tecken) */
        
    /* E-postadressen måste innehålla exakt ett "@" och ett "." Strängen före "@" kan 
    innehålla bokstäver, siffror, ”-”, och ”_”. Strängen efter "@" kan endast innehålla 
    bokstäver. */

		if(firstNameCheck.test(firstName)){
			
		 if(lastNameCheck.test(lastName)){
			
		     if(adressCheck.test(adress)){
			    
		         if(mailCheck.test(mail)){

			        document.formularet.submit();

		            } else { 
		                alert("Din epost är inte ok");
                    } 
                } else {
                    alert("Din address är inte ok");
                }
            } else { 
            alert("Ditt efternamn är inte ok");
            }
        } else {
        alert("Ditt namn är inte ok");
        }
}
