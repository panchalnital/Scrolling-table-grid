    function MoveUp()
    {
        //var RightTable = document.getElementById("tblLeft").tBodies.length;;
      var RightTable=  document.getElementById("tblLeft").tBodies[0].children;
        var i=0;

          var cnt=$('input:radio:checked').length;
           var crows=RightTable.length;
           var displaycnt="("+cnt+"/"+crows+")";
           $('#cnt').html(displaycnt);
        
        for(i=0; i<RightTable.length; i++)
        {
            if(RightTable[i].getAttribute('data') == "1")   //is selected ?
            {
                var CurrentRow,PreviousRow,NNRow,PPRow;
                CurrentRow=RightTable[i];
                PreviousRow=RightTable[i-1];
                NextRow=RightTable[i+1];
                NNRow= RightTable[i+2];
                PPRow=RightTable[i-2];
               
               if(i==RightTable.length-2)
               {
                  NNRow= RightTable[i+1];
               }


                SendUp(CurrentRow,PreviousRow,NextRow,NNRow,PPRow,i,RightTable.length);
                break;
            }
        }
    }
    
   function SendUp(CurrentRow,PreviousRow,NextRow,NNRow,PPRow,i,tbllength)
    {
       // CurrentRow.style.display='';

       if(i==1)
       {
            PreviousRow.setAttribute("data", "1");
            $('#'+PreviousRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
            $('#'+PreviousRow.id).contents('td:first').contents('span#btnDown').removeClass('glyphicon glyphicon-triangle-bottom');

          //PreviousRow.style.backgroundColor = "white";
          $("#"+PreviousRow.id).removeClass("activeColor");
         // $("#"+PreviousRow.id).addClass("disactiveColor");
          $("#"+PreviousRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
          $("#"+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
          $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");

          NNRow.style.display='none';
           CurrentRow.removeAttribute("data");
           // CurrentRow.style.backgroundColor = "#42e5f4";
            $("#"+CurrentRow.id).removeClass("disactiveColor");
            $("#"+CurrentRow.id).addClass("activeColor");
            $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");
            $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
            $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
            $("#"+NextRow.id).addClass("activeColor");

       }
       else if(i==tbllength-1)
       {
          CurrentRow.removeAttribute("data");
           $('#'+CurrentRow.id).contents('td:first').contents('span#btnDown').addClass('glyphicon glyphicon-triangle-bottom');
         // CurrentRow.style.backgroundColor="#42e5f4"; 
           $("#"+CurrentRow.id).removeClass("disactiveColor");
            $("#"+CurrentRow.id).addClass("activeColor");
          $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              }); 
          PreviousRow.setAttribute("data", "1");
           $("#"+PreviousRow.id).removeClass("activeColor");
           $("#"+PreviousRow.id).addClass("disactiveColor");
            $("#"+PreviousRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
          $("#"+PreviousRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
        //  PreviousRow.style.backgroundColor="white";
          $("#"+PreviousRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
          $("#"+PPRow.id).addClass("activeColor");
       }
       else if(i==0)
       {
          NextRow.setAttribute("data", "1");
            $('#'+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
            $('#'+CurrentRow.id).contents('td:first').contents('span#btnDown').removeClass('glyphicon glyphicon-triangle-bottom');

          //PreviousRow.style.backgroundColor = "white";
          $("#"+NextRow.id).addClass("activeColor");
           $("#"+NextRow.id).removeClass("activeColor");
          $("#"+CurrentRow.id).addClass("disactiveColor");
          $("#"+NextRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
            $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
          $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");
         // $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");

        //  NNRow.style.display='none';
           CurrentRow.removeAttribute("data");
           // CurrentRow.style.backgroundColor = "#42e5f4";
           $("#"+CurrentRow.id).removeClass("disactiveColor");
              $("#"+CurrentRow.id).addClass("activeColor");
           // $("#"+CurrentRow.id).removeClass("disactiveColor");
          //  $("#"+CurrentRow.id).addClass("activeColor");
          //  $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");
          //  $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
          //  $("#"+CurrentRow.id).find("input:radio").each(function() {
          //      $(this).attr("disabled",true);

          //    });
         //   $("#"+NextRow.id).addClass("activeColor");

       }
       else
       {
           PPRow.style.display='';
            $("#"+PPRow.id).addClass("activeColor");
             $("#"+PPRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");

            $("#"+PPRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
           NNRow.style.display='none';
           NextRow.style.display='none';
            CurrentRow.removeAttribute("data");
             $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
               $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");
         //  CurrentRow.style.backgroundColor="#42e5f4";

             $("#"+CurrentRow.id).removeClass("disactiveColor");
           $("#"+CurrentRow.id).addClass("activeColor");
           $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
           PreviousRow.setAttribute("data", "1");
            $("#"+PreviousRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
          $("#"+PreviousRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
          // PreviousRow.style.backgroundColor="white";
           $("#"+PreviousRow.id).removeClass("activeColor");
           $("#"+PreviousRow.id).addClass("disactiveColor");
           $("#"+PreviousRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
       }
       // PreviousRow.parentNode.insertBefore(CurrentRow,PreviousRow);
    }
    function SendDown(CurrentRow,PreviousRow,NextRow,NNRow,PPRow,i,tbllength)
    {

        if(i==0)
        {
            CurrentRow.removeAttribute("data");
            $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");
           // CurrentRow.style.backgroundColor="#42e5f4";
           $("#"+CurrentRow.id).removeClass("disactiveColor");
            $("#"+CurrentRow.id).addClass("activeColor");
            $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
             CurrentRow.cells.disabled = true;
            NextRow.setAttribute("data", "1");
             $("#"+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
           // NextRow.style.backgroundColor="white";
           $("#"+NextRow.id).removeClass("activeColor");
           $("#"+NextRow.id).addClass("disactiveColor");
             // $("#"+NextRow.id).find('#tblLeftTr1').prop("disabled",true);    
              $("#"+NextRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
             NNRow.style.display='';
             $("#"+NextRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
             $("#"+NNRow.id).addClass("activeColor");
        }
        else if(i==1)
        {
            // PPRow.style.display='none';
           NNRow.style.display='';
            $("#"+NNRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
                 $("#"+NextRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");
           $("#"+NNRow.id).removeClass("disactiveColor");
           $("#"+NNRow.id).addClass("activeColor");
             $("#"+NNRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");
           PreviousRow.style.display='none';
             
           //NextRow.style.display='none';
           CurrentRow.removeAttribute("data");
              $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");
         //  CurrentRow.style.backgroundColor="#42e5f4";
         $("#"+CurrentRow.id).removeClass("disactiveColor");
          $("#"+CurrentRow.id).addClass("activeColor");
           $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
           CurrentRow.disabled=true; 
           NextRow.setAttribute("data", "1");
         

             $("#"+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
                 $("#"+NextRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
          //  NextRow.style.backgroundColor="white";
          $("#"+NextRow.id).removeClass("activeColor");
           $("#"+NextRow.id).addClass("disactiveColor");
            $("#"+NextRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
            //CurrentRow.disabled=false; 
        }
        else if(tbllength-1==i)
        {
             PPRow.style.display='none';
              $("#"+PreviousRow.id).removeClass("disactiveColor");
              $("#"+PreviousRow.id).addClass("activeColor");
             NextRow.setAttribute("data", "1");
              $("#"+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
          $("#"+NextRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");

          //   NextRow.style.backgroundColor="white";

          $("#"+NextRow.id).removeClass("activeColor");
           $("#"+NextRow.id).addClass("disactiveColor");
              $("#"+NextRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
              CurrentRow.removeAttribute("data");
              $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");
            //  CurrentRow.style.backgroundColor="#42e5f4";
            $("#"+CurrentRow.id).removeClass("disactiveColor");
             $("#"+CurrentRow.id).addClass("activeColor");
                 $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
        }
        else if(i==tbllength)
        {
           // PPRow.style.display='none';
              $("#"+PreviousRow.id).addClass("disactiveColor");
              $("#"+PreviousRow.id).removeClass("activeColor"); 
              $("#"+PreviousRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
              $("#"+PreviousRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
             PreviousRow.setAttribute("data", "1");
              $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
              $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').addClass("glyphicon glyphicon-triangle-bottom");

              CurrentRow.removeAttribute("data");
          
            $("#"+CurrentRow.id).removeClass("disactiveColor");
             $("#"+CurrentRow.id).addClass("activeColor");
                 $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
                  
        }
        else
        {
       // CurrentRow.style.display='';
           PPRow.style.display='none';
           NNRow.style.display='';
            $("#"+NNRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
                  $("#"+NextRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
                 $("#"+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");

            $("#"+NNRow.id).removeClass("disactiveColor");
           $("#"+NNRow.id).addClass("activeColor");
           $("#"+NNRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
           PreviousRow.style.display='none';
           //NextRow.style.display='none';
           CurrentRow.removeAttribute("data");
           $("#"+CurrentRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
        $("#"+CurrentRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");

          // CurrentRow.style.backgroundColor="#42e5f4";
           $("#"+CurrentRow.id).removeClass("disactiveColor");
          $("#"+CurrentRow.id).addClass("activeColor");
           $("#"+NextRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
               $("#"+NextRow.id).contents('td:first').contents('span#btnUp').addClass("glyphicon glyphicon-triangle-top");
           $("#"+CurrentRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
           NextRow.setAttribute("data", "1");
            $("#"+NextRow.id).contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");
          $("#"+NextRow.id).contents('td:first').contents('span#btnDown').removeClass("glyphicon glyphicon-triangle-bottom");
          //   NextRow.style.backgroundColor='White';
          $("#"+NextRow.id).removeClass("activeColor");
           $("#"+NextRow.id).addClass("disactiveColor");
           $("#"+NextRow.id).find("input:radio").each(function() {
                $(this).attr("disabled",false);

              });
       }

       // PreviousRow.parentNode.insertBefore(CurrentRow,PreviousRow);
    }

    //function to select a row from Right Table to move down
    function MoveDown()
    {
        var RightTable = document.getElementById("tblLeft").tBodies[0].children;
        var i=0;
        var RowToMove=0;
        var PreviousRow;
        var CurrentRow;
        var cnt=0
           var cnt=$('input:radio:checked').length;
           var crows=RightTable.length;
           var displaycnt="("+cnt+"/"+crows+")";
           $('#cnt').html(displaycnt);

          
        for(i=0; i<RightTable.length; i++)
        {
            if(RightTable[i].getAttribute('data') == "1")
            {
                
                     var CurrentRow,PreviousRow,NNRow,PPRow;
                        CurrentRow=RightTable[i];
                        PreviousRow=RightTable[i-1];
                        NextRow=RightTable[i+1];
                        NNRow= RightTable[i+2];
                        PPRow=RightTable[i-2];
                 
                    
                    SendDown(CurrentRow,PreviousRow,NextRow,NNRow,PPRow,i,RightTable.length-1);
                  
                 break;
                  
               // }
            }
        }   



    }    

    function saveData(){
          var list= [];
      
         
         $(".tdClass").each(function() {
          var selValue =   $(this).attr('id');
            if($(this).find("input:radio:checked").length>0){
                
                 list.push(selValue);
                 
              }else{
                 
              }
         });

    
           $("#arr_data").val(list);

 $(".trClass").each(function() {
          var selValue =   $(this).attr('id');
            if($(this).find("input:radio:checked").length>0){
                 //var che = selValue;
                 //list.push(selValue);
                 var trid= $(this).closest("tr").attr('id');
                  $('#'+trid).contents('td').css({'border': '1px solid #ddd', 'border-left': 'none', 'border-right': 'none'});
                  $('#'+trid).contents('td:first').css('border-left', 'none');
                  $('#'+trid).contents('td:last').css('border-right', 'none');
                   //alert(che);
              }else{
                var trid= $(this).closest("tr").attr('id');
                  $('#'+trid).contents('td').css({'border': '2px solid red', 'border-left': 'none', 'border-right': 'none'});
                  $('#'+trid).contents('td:first').css('border-left', '1px solid red');
                  $('#'+trid).contents('td:last').css('border-right', '1px solid red');
              }
         });


    }

function dataload(bookDetails){

  var parentDiv = $("#parentHolder");
    parentDiv.html("");
    var aTable = $("<table>", {
        "id": "tblLeft",
        "class":"table table-bordered"
    }).appendTo(parentDiv);
    var rowCount = bookDetails.length;
    var colmCount = bookDetails[0].length;

    // For loop for adding header .i.e th to our table
    for (var k = 0; k < 1; k++) {
        var fragTrow = $("<thead><tr>", {
            "class": "trClass"
        }).appendTo(aTable);
        for (var j = 0; j < colmCount; j++) {
            $("<th>", {
                "class": "thClass"
            }).prependTo(fragTrow).html(bookDetails[k][j]);
        }
    }

    //For loop for adding data .i.e td with data to our dynamic generated table
    for (var i = 1; i < rowCount; i < i++) {
        if(i<4){

                if(i==2){

                       var fragTrow = $("<tr>", {
                       // "data":"1",
                            "class":"disactiveColor",
                             "id":"tblLeftTr".concat(i)
                             
                        }).appendTo(aTable);
                        for (var j = 0; j < colmCount; j++) {


                                if(j==0){
                                  $("<td>",{
                                      "class": "tdClass tablecellUP tablecellDown fistrow ",
                                      "id":"".concat(i).concat(j),
                                  }).appendTo(fragTrow).html(bookDetails[i][j]);
                                }else{
                                  $("<td>",{
                                      "class": "tdClass",
                                      "id":"".concat(i).concat(j),
                                  }).appendTo(fragTrow).html(bookDetails[i][j]);
                                }
                        }


                }else{

                  var fragTrow = $("<tr >", {
                      "class": "trClass activeColor",
                       "id":"tblLeftTr".concat(i),
                       

                  }).appendTo(aTable);
                  for (var j = 0; j < colmCount; j++) {

                    if(j==0){
                      $("<td>",{
                          "class": "tdClass tablecellUP tablecellDown fistrow ",
                          "id":"".concat(i).concat(j),
                      }).appendTo(fragTrow).html(bookDetails[i][j]);
                    }else{
                      $("<td>",{
                          "class": "tdClass",
                          "id":"".concat(i).concat(j),
                      }).appendTo(fragTrow).html(bookDetails[i][j]);
                    }
                  }
                }
          }
            
          else{

              var fragTrow = $("<tr >", {
                  "class": "trClass activeColor",
                   "id":"tblLeftTr".concat(i),
                   "style":"display: none;"

              }).appendTo(aTable);
              for (var j = 0; j < colmCount; j++) {

                if(j==0){
                  $("<td>",{
                      "class": "tdClass tablecellUP tablecellDown fistrow",
                      "id":"".concat(i).concat(j),
                  }).appendTo(fragTrow).html(bookDetails[i][j]);
                }else{
                  $("<td>",{
                      "class": "tdClass",
                      "id":"".concat(i).concat(j),
                  }).appendTo(fragTrow).html(bookDetails[i][j]);
                }
                  
              }
          }
      
    }

  }