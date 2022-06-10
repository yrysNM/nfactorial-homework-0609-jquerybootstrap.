$(document).ready(function() {
    
    const blockForm = $(".block__form"),
            personName = blockForm.find("#personName"),
            character = blockForm.find("#character"), 
            adverb  = blockForm.find("#adverb"),
            adjective= blockForm.find("#adjective"),
            btnSubmit = blockForm.find("button"),
            blockInfo = $("#blockInfo"),
            spanInfo = $("span");
    
    let obj = {
        personName: "", 
        character: "",
        adverb: "", 
        adjective: "",
    }; 

    btnSubmit.on("click keypress", function(e) {
        e.preventDefault();
        if(e.which == 13) {
            if(personName.val() && character.val() && adverb.val() && 
                  adjective.val()) {
                
                obj.personName = personName.val();
                obj.character = character.val(); 
                obj.adverb = adverb.val(); 
                obj.adjective = adjective.val(); 
                blockInfo.addClass('active');

                for(let i = 0; i < spanInfo.length; i++) {
     
                    switch (spanInfo[i].getAttribute("class")) {
    
                        case "personeName":
                            spanInfo[i].innerHTML = obj.personName;
                            break;
                        case "character": 
                            spanInfo[i].innerHTML = obj.character;
                            break; 
                        case "adverb": 
                            spanInfo[i].innerHTML = obj.adverb;
                            break; 
                        case "adjective": 
                            spanInfo[i].innerHTML = obj.adjective; 
                            break;
                        
                    }
    
                }
            }
        }
        
        if(personName.val() && character.val() && adverb.val() && 
                adjective.val()) {
                    
            obj.personName = personName.val();
            obj.character = character.val(); 
            obj.adverb = adverb.val(); 
            obj.adjective = adjective.val(); 
            blockInfo.addClass('active');
                    
            // console.log(spanInfo);

            for(let i = 0; i < spanInfo.length; i++) {
     
                switch (spanInfo[i].getAttribute("class")) {

                    case "personeName":
                        spanInfo[i].innerHTML = obj.personName;
                        break;
                    case "character": 
                        spanInfo[i].innerHTML = obj.character;
                        break; 
                    case "adverb": 
                        spanInfo[i].innerHTML = obj.adverb;
                        break; 
                    case "adjective": 
                        spanInfo[i].innerHTML = obj.adjective; 
                        break;
                    
                }

            }
        }
    });
    
});