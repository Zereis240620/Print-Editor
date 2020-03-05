
$(function () {


    $('#buttonCriar').click(function () {
        var text = $('#text').val();
        var Cor = document.getElementById("ddlViewBy");
        var CorSelect = Cor.options[Cor.selectedIndex].value;
        
        var FonteSize = $('#sizeFonte').val();

        var Fonte = document.getElementById("Fontes");
        var FonteSelect = Fonte.options[Fonte.selectedIndex].value;
        
        if(FonteSelect === 'Acme'){
            FonteSelect = 'Acme';
        }
        else if  (FonteSelect === 'Akronim') {
            FonteSelect = 'Akronim';
        }

        else if  (FonteSelect === 'AlfaSlabOne') {
            FonteSelect = 'AlfaSlabOne';
        }

        else if  (FonteSelect === 'AmaticSCReg') {
            FonteSelect = 'AmaticSCReg';
        }

        else if  (FonteSelect === 'AmaticSCBold') {
            FonteSelect = 'AmaticSCBold';
        }

        else if  (FonteSelect === 'ArchivoNarrowBold') {
            FonteSelect = 'ArchivoNarrowBold';
        }

        else if  (FonteSelect === 'ArchivoNarrowBoldItalic') {
            FonteSelect = 'ArchivoNarrowBoldItalic';
        }

        else if  (FonteSelect === 'ArchivoNarrowItalic') {
            FonteSelect = 'ArchivoNarrowItalic';
        }

        else if  (FonteSelect === 'ArchivoNarrowItalic') {
            FonteSelect = 'ArchivoNarrowItalic';
        }

        else if  (FonteSelect === 'ArchivoNarrowMedium') {
            FonteSelect = 'ArchivoNarrowMedium';
        }

        else if  (FonteSelect === 'ArchivoNarrowMediumItalic') {
            FonteSelect = 'ArchivoNarrowMediumItalic';
        }

        else if  (FonteSelect === 'ArchivoNarrowRegular') {
            FonteSelect = 'ArchivoNarrowRegular';
        }

        else if  (FonteSelect === 'ArchivoNarrowSemiBold') {
            FonteSelect = 'ArchivoNarrowSemiBold';
        }

        else if  (FonteSelect === 'ArchivoNarrowSemiBoldItalic') {
            FonteSelect = 'ArchivoNarrowSemiBoldItalic';   
        }

        else if  (FonteSelect === 'AsapBold') {
            FonteSelect = 'AsapBold';   
        }

        else if  (FonteSelect === 'AsapBoldItalic') {
            FonteSelect = 'AsapBoldItalic';      
        }

        else if  (FonteSelect === 'AsapItalic') {
            FonteSelect = 'AsapItalic';      
        }

        else if  (FonteSelect === 'AsapMedium') {
            FonteSelect = 'AsapMedium';      
        }

        else if  (FonteSelect === 'AsapMediumItalic') {
            FonteSelect = 'AsapMediumItalic';         
        }

        else if  (FonteSelect === 'AsapRegular') {
            FonteSelect = 'AsapRegular';            
        }

        else if  (FonteSelect === 'AsapSemiBold') {
            FonteSelect = 'AsapSemiBold';            
        }

        else if  (FonteSelect === 'AsapSemiBoldItalic') {
            FonteSelect = 'AsapSemiBoldItalic';            
        }

        else if  (FonteSelect === 'BreeSerelse ifRegular') {
            FonteSelect = 'BreeSerelse ifRegular';            
        }

        else if  (FonteSelect === 'CairoBlack') {
          FonteSelect = 'CairoBlack';               
      }

      else if  (FonteSelect === 'CairoBold') {
        FonteSelect = 'CairoBold';               
    }

    else if  (FonteSelect === 'CairoExtraLight') {
        FonteSelect = 'CairoExtraLight';                  
    }

    else if  (FonteSelect === 'CairoLight') {
     FonteSelect = 'CairoLight';                  
 }

 else if  (FonteSelect === 'CairoRegular') {
     FonteSelect = 'CairoRegular';                  
 }

 else if  (FonteSelect === 'CairoSemiBold') {
    FonteSelect = 'CairoSemiBold';                     
}

else if  (FonteSelect === 'CaveatBold') {
    FonteSelect = 'CaveatBold';                     
}

else if  (FonteSelect === 'CaveatRegular') {
    FonteSelect = 'CaveatRegular';                     
}


else if  (FonteSelect === 'Cookie') {
    FonteSelect = 'Cookie';                     
}

else if  (FonteSelect === 'Courgette') {
    FonteSelect = 'Courgette';                        
}

else if  (FonteSelect === 'DancingScript') {
    FonteSelect = 'DancingScript';                        
}

else if  (FonteSelect === 'DancingScriptBold') {
    FonteSelect = 'DancingScriptBold';                           
}

else if  (FonteSelect === 'DancingScriptMedium') {
    FonteSelect = 'DancingScriptMedium';                           
}

else if  (FonteSelect === 'DancingScriptRegular') {
    FonteSelect = 'DancingScriptRegular';                           
}

else if  (FonteSelect === 'DancingScriptSemiBold') {
    FonteSelect = 'DancingScriptSemiBold';                           
}

else if  (FonteSelect === 'FrancoisOneRegular') {
    FonteSelect = 'FrancoisOneRegular';      
}

else if  (FonteSelect === 'GloriahallelujahRegular') {
    FonteSelect = 'GloriahallelujahRegular';      
}

else if  (FonteSelect === 'KalamBold') {
    FonteSelect = 'KalamBold';      
}

else if  (FonteSelect === 'KalamLight') {
    FonteSelect = 'KalamLight';      
}

else if  (FonteSelect === 'KalamRegular') {
    FonteSelect = 'KalamRegular';      
}

else if  (FonteSelect === 'KoulenRegular') {
    FonteSelect = 'KoulenRegular';      
}

else if  (FonteSelect === 'LuckiestGuyRegular') {
    FonteSelect = 'LuckiestGuyRegular';      
}

else if  (FonteSelect === 'MarckScriptRegular') {
   FonteSelect = 'MarckScriptRegular';      
}

else if  (FonteSelect === 'MeriendaBold') {
    FonteSelect = 'MeriendaBold';      
}

else if  (FonteSelect === 'MeriendaRegular') {
    FonteSelect = 'MeriendaRegular';      
}

else if  (FonteSelect === 'MerriweatherSansBold') {
    FonteSelect = 'MerriweatherSansBold';      
}

else if  (FonteSelect === 'MerriweatherSansBoldItalic') {
    FonteSelect = 'MerriweatherSansBoldItalic';      
}

else if  (FonteSelect === 'MerriweatherSansExtraBold') {
    FonteSelect = 'MerriweatherSansExtraBold';         
}

else if  (FonteSelect === 'MerriweatherSansExtraBoldItalic') {
    FonteSelect = 'MerriweatherSansExtraBoldItalic';         
}

else if  (FonteSelect === 'MerriweatherSansItalic') {
    FonteSelect = 'MerriweatherSansItalic';         
}

else if  (FonteSelect === 'MerriweatherSansLight') {
    FonteSelect = 'MerriweatherSansLight';         
}

else if  (FonteSelect === 'MerriweatherSansLightItalic') {
    FonteSelect = 'MerriweatherSansLightItalic';         
}

else if  (FonteSelect === 'MerriweatherSansRegular') {
    FonteSelect = 'MerriweatherSansRegular';         
}

else if  (FonteSelect === 'MonotonRegular') {
    FonteSelect = 'MonotonRegular';         
}

else if  (FonteSelect === 'Pacelse ificoRegular') {
    FonteSelect = 'Pacelse ificoRegular';         
}

else if  (FonteSelect === 'ParisienneRegular') {
 FonteSelect = 'ParisienneRegular';            
}

else if  (FonteSelect === 'PermanentMarkerRegular') {
    FonteSelect = 'PermanentMarkerRegular';            
}

else if  (FonteSelect === 'PressStart2PRegular') {
    FonteSelect = 'PressStart2PRegular';            
}

else if  (FonteSelect === 'RighteousRegular') {
    FonteSelect = 'RighteousRegular';            
}

else if  (FonteSelect === 'SatisfyRegular') {
    FonteSelect = 'SatisfyRegular';            
}

else if  (FonteSelect === 'SignikaBold') {
    FonteSelect = 'SignikaBold';            
}

else if  (FonteSelect === 'SignikaLight') {
    FonteSelect = 'SignikaLight';            
}

else if  (FonteSelect === 'SignikaRegular') {
    FonteSelect = 'SignikaRegular';            
}

else if  (FonteSelect === 'SignikaSemiBold') {
    FonteSelect = 'SignikaSemiBold';            
}

else if  (FonteSelect === 'UltraRegular') {
    FonteSelect = 'UltraRegular';            
}

else if  (FonteSelect === 'ZCOOLQingKeHuangYouRegular') {
    FonteSelect = 'ZCOOLQingKeHuangYouRegular';            
}


//Cores da fonte

if (CorSelect === 'Branco') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #ffffff; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'Preto') {

    
    $('#camisa').append('<p id="CreateTextDinamic"  class="CreateTextDinamic" style="color: #000000; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+'  ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'Rosa') {

    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #e91e63;font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'Azul') {

    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #1565c0;font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p><button id="removeText" class="removeText">X</button>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'Marrom') {

    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #8d6e63;font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+'  ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'Vermelho') {

    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #f44336; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'indigo') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #3f51b5 ; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();    
}
else if (CorSelect === 'deep-purple') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #673ab7 ; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();    
}
else if (CorSelect === 'blue') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #2196f3 ; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();    
}
else if (CorSelect === 'purple') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #2196f3 ; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();    
}
else if (CorSelect === 'pink') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #e91e63; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();   
}
else if (CorSelect === 'teal') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #009688; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}
else if (CorSelect === 'cyan') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #00bcd4; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}
else if (CorSelect === 'light-blue') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #03a9f4; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}
else if (CorSelect === 'green') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #03a9f4; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}
else if (CorSelect === 'lime') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #cddc39; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}

else if(CorSelect === 'light-green'){
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #8bc34a; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}
else if (CorSelect === 'orange') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #ff9800; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();  
}
else if (CorSelect === 'amber') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #ffc107; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
    
}
else if (CorSelect === 'yellow') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #ffeb3b; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'grey') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #9e9e9e; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'brown') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #795548; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'deep-orange') {
    $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #ff5722; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
    $('.CreateTextDinamic').draggable();
    $.notify("Text Criado","success");
    $('.CreateTextDinamic').rotatable();
}
else if (CorSelect === 'blue-grey') {
 $('#camisa').append('<p id="CreateTextDinamic" class="CreateTextDinamic" style="color: #607d8b; font-family: '+FonteSelect+'; font-size: '+FonteSize+'px'+' ">' + text + '</p>')
 $('.CreateTextDinamic').draggable();
 $.notify("Text Criado","success");
 $('.CreateTextDinamic').rotatable();
}

})

$('.menu').click(function () {
    $('#optionEdit').toggle('slow');
    $('#text').val('');
});

$('#importImg').click(function() {
    $('#imgInp').click();
});

$('#criarTexto').click(function(){
    $('#DinamicText').toggle('slow');
});

$('.close-button').click(function (){
  $('#text').val('');
  $('#DinamicText').toggle('slow')
});
var x;

interact('.CreateTextDinamic')
.resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        $(".CreateTextDinamic").css("font-size", event.rect.width+'px');
        x =  event.rect.width;
    }
},
modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
    }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: x , height: x }
    })
      ],

      inertia: true
  })
.draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
    interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
    })
    ]
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#bannerImage').append('<img class="imgImport" src="'+e.target.result+'">');
      $('.imgImport').draggable();
  }
  
  reader.readAsDataURL(input.files[0]);
}
}

$("#imgInp").change(function() {
  readURL(this);
});

interact('.imgImport')
.resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        $(".imgImport").css("width", event.rect.width+'px');
        $(".imgImport").css("height", event.rect.height+'px');
        x =  event.rect.width;
    }
},
modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
    }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: x , height: x }
    })
      ],

      inertia: true
  })
.draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
    interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
    })
    ]
});

$('#saveImg').click(function(){

  html2canvas(document.querySelector("#camisa"),{useCORS: true,allowTaint: true,scale: 0.98,dpi: 500,width: 1400, height: 900}).then(canvas => {

     document.body.appendChild(canvas);

 });

});
$('#element').foundation('reveal', isRevealed);


});