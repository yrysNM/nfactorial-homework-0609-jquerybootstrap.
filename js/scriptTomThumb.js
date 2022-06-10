$(document).ready(function() {
    const imgWidth = $("#imgWidth"), 
            imgHeight = $("#imgHeight"),
            numColors = $("#numColors"),
            btnSubmit = $("#btn"),
            blockInfo = $("#blockInfo"),
            spanInfo = blockInfo.find("span");

    

    btnSubmit.on("click keypress", function(e) {
        e.preventDefault(); 
        if(e.which == 13) {
            if(imgWidth.val() && imgHeight.val() && numColors.val()) {
                blockInfo.addClass('active');
                let fileSizeSum = ((imgWidth.val() * imgHeight.val() * numColors.val()) / 1024 * 8) | 0;
    
                spanInfo[0].innerText = fileSizeSum + "kb";
    
                if(fileSizeSum > 4024) {
                    spanInfo[1].innerHTML = "isn't ok &#128078;";
                }else {
                    spanInfo[1].innerHTML = "is ok &#128077;";
                }
            }
        }
        if(imgWidth.val() && imgHeight.val() && numColors.val()) {
            blockInfo.addClass('active');
            let fileSizeSum = ((imgWidth.val() * imgHeight.val() * numColors.val()) / 1024 * 8) | 0;

            spanInfo[0].innerHTML = fileSizeSum + "kb";
            console.log(spanInfo[0]);
            if(fileSizeSum > 4024) {
                spanInfo[1].innerHTML = "isn't ok &#128078;";
            }else {
                spanInfo[1].innerHTML = "is ok &#128077;";
            }
        }
    });

    
});