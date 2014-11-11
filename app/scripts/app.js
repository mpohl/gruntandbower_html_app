'use strict';
var jQuery = jQuery.noConflict();
var loader;

jQuery(window).load(function () {

   // ready callback
   function ready(event,data) {
      var kompoSliderId = data.id;
      console.log('kompoSlider ('+kompoSliderId+') ready');
   }
   // complete callback
   function loaded(event,data) {
      var kompoSliderId = data.id;
      console.log('kompoSlider ('+kompoSliderId+') loading complete');
   }
   function sliderMoving(event,data){
      var kompoSliderId = data.id;
      jQuery('.infoClick').hide();
      jQuery('.infoHover').hide();
      console.log('kompoSlider ('+kompoSliderId+') is moving');
   }
   function sliderStops(event,data){
      var kompoSliderId = data.id;
      console.log('kompoSlider ('+kompoSliderId+') stopped moving');
   }
   /**
    * slider item mouseenter
    * @method mouseenter
    * @param event {object} jquery event
    * @param data {object} id= component id
    */
   function mouseenter(event,data){
      var kompoSliderId = jQuery(event.delegateTarget).attr('id');
      console.log('kompoSlider ('+kompoSliderId+') item mouseenter id:',data.id);
      jQuery('.infoHover span').html(kompoSliderId+', ID:'+data.id);
      jQuery('.infoHover').show();
   }

   /**
    * slider item mouseenter
    * @method mouseenter
    * @param event {object} jquery event
    * @param data {object} id= component id
    */
   function mouseleave(event,data){
      var kompoSliderId = jQuery(event.delegateTarget).attr('id');
      console.log('kompoSlider ('+kompoSliderId+') item mouseleave id:',data.id);
      jQuery('.infoHover').hide();
   }

   /**
    * slider item clicked
    * @method clickitem
    * @param event
    * @param data
    */
   function clickitem(event,data) {
      var kompoSliderId = jQuery(event.delegateTarget).attr('id');
      jQuery('.infoClick span').html(kompoSliderId+', ID:'+data.id);
      jQuery('.infoClick').show();
      console.log('kompoSlider ('+kompoSliderId+') item clicked id:',data.id);
   }

   // init preloader
   var options = {
      onready: ready,
      oncomplete: loaded,
      onmove: sliderMoving,
      onstopmove: sliderStops,
      onclick: clickitem,
      onmouseenter:mouseenter,
      onmouseleave:mouseleave
   };


   var optionsRight = {};
   jQuery.extend(optionsRight,options);
   optionsRight.align='right';
   optionsRight.components=[
      { 'id':'0af18477b4be768a6075d2a697ff5eb0', // oxid
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_40087_pic2_2_z2.jpg' // imagethumb
      },
      { 'id':'06563cf0507d54585a5b721b2b797',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_40080_pic2_2_z2.jpg'
      },
      { 'id':'04e6108a848bad5b5466c4953fcb1',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_41038_pic2_2_z2.jpg'
      },
      { 'id':'1ff0423be5742ae7e71f4301ed9cc',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_41040_pic2_2_z2.jpg'
      }
   ];

   var optionsLeft = {};
   jQuery.extend(optionsLeft,options);
   optionsLeft.align='left';
   optionsLeft.components=[
      { 'id':'0af18477b4be768a6075d2a697ff5eb0', // oxid
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_40087_pic2_2_z2.jpg' // imagethumb
      },
      { 'id':'06563cf0507d54585a5b721b2b797',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_40080_pic2_2_z2.jpg'
      },
      { 'id':'04e6108a848bad5b5466c4953fcb1',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_41038_pic2_2_z2.jpg'
      },
      { 'id':'1ff0423be5742ae7e71f4301ed9cc',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_41040_pic2_2_z2.jpg'
      }
   ];


   var optionsCenter = {};
   jQuery.extend(optionsCenter,options);
   optionsCenter.align='center';
   optionsCenter.components=[
      { 'id':'0af18477b4be768a6075d2a697ff5eb0', // oxid
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_40087_pic2_2_z2.jpg' // imagethumb
      },
      { 'id':'06563cf0507d54585a5b721b2b797',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_40080_pic2_2_z2.jpg'
      },
      { 'id':'04e6108a848bad5b5466c4953fcb1',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_41038_pic2_2_z2.jpg'
      },
      { 'id':'1ff0423be5742ae7e71f4301ed9cc',
         'src':'http://www.my-vale-shop.de/out/pictures/z2/sol_41040_pic2_2_z2.jpg'
      }
   ];

   var optionsBigCenter = {};
   jQuery.extend(optionsBigCenter,options);
   optionsBigCenter.align='center';

   var optionsBigRight= {};
   jQuery.extend(optionsBigRight,options);
   optionsBigRight.align='right';

   jQuery('#compo1').kompoSlider(optionsLeft);
   jQuery('#compo2').kompoSlider(optionsCenter);
   jQuery('#compo3').kompoSlider(optionsRight);

   jQuery('#compo4').kompoSlider(options);
   jQuery('#compo5').kompoSlider(optionsBigCenter);
   jQuery('#compo6').kompoSlider(optionsBigRight);

});
