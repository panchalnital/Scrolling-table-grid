# Scrolling-table-grid

Demo Links : https://github.com/panchalnital/Scrolling-table-grid

<div class="container">
<div class="row">
     <div class="col-xs-12 col-sm-10 col-lg-10">
        <div id="parentHolder"></div>
        <div id="cnt"></div> 
     </div>
    <!-- <div class="col-xs-2 col-sm-2 col-lg-2">
       <!-- <table >
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td><button id="btnUp" onclick="MoveUp()" type="button" value="Up" /> <span  class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></button></td>
              
            </tr>
            <tr>
              <td>  <button id="btnDown" onclick="MoveDown()" type="button" value="Down" ><span  class="glyphicon   glyphicon-triangle-bottom" aria-hidden="true"></span></button>
                        </td>
              
            </tr>
            
          </tbody>
      </table>
     </div>-->

  </div>
  <div class="row">
          <div class="col-xs-6 col-sm-6 col-lg-6"> </div>
          <div class="col-xs-6 col-sm-6 col-lg-6"> <i class="arrow-alt-down"></i>
                                    <button id="btnDown" onclick="saveData()" type="button" value="Down" ><span  class="glyphicon glyphicon glyphicon-triangle-right" aria-hidden="true"></span></button>
          <input type="hidden" id="arr_data" name="array_data" value="">
                                  </div>

  </div>
</div>

<script>
$(document).ready(function(){
    var bookDetails = [["Advertised","Currently","Not currently","Have never"]];
    bookDetails[0].push("");
    bookDetails.reverse();
  //var bookDetails = [["Have never", "Not currently","Currently","Advertised",""]];

  var bookDetails_col =["Business Insider/Insider Inc ", "Facebook", "Hulu","Meredith", "Oath", "Purch","Time Inc.", "Turner"];
  var cnt=1;
   $.each(bookDetails_col, function(i) {
      
     
   
    
      bookDetails.push([bookDetails_col[i],"<label><input type='radio' id='tblLeftTr"+cnt+"' name='optradio"+bookDetails_col[i]+"'> </label>","<label><input type='radio' id='tblLeftTr"+cnt+"' name='optradio"+bookDetails_col[i]+"'> </label>","<label><input type='radio' id='tblLeftTr"+cnt+"' name='optradio"+bookDetails_col[i]+"'> </label>","<label><input type='radio' id='tblLeftTr"+cnt+"' name='optradio"+bookDetails_col[i]+"'> </label>"]);
      cnt++;
    });

   dataload(bookDetails);
});

$(window).load(function(){

        $("#tblLeftTr1").find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });
         $("#tblLeftTr2").attr("data", "1");
         $("#tblLeftTr3").find("input:radio").each(function() {
                $(this).attr("disabled",true);

              });


        var buttonup = $("<span id='btnUp' onclick='MoveUp()' class='glyphicon glyphicon-triangle-top arrowButtonAligment' aria-hidden='true'></span>");
            buttonup.appendTo(".tablecellUP");

        var buttondown = $("<span id='btnDown' onclick='MoveDown()' class='glyphicon  glyphicon-triangle-bottom arrowButtonAligment' aria-hidden='true'></span>");
            buttondown.appendTo(".tablecellDown");

          $('#tblLeftTr2').contents('td:first').contents('span#btnUp').removeClass("glyphicon glyphicon-triangle-top");  
          $('#tblLeftTr2').contents('td:first').contents('span#btnDown').removeClass('glyphicon glyphicon-triangle-bottom');
           $('#tblLeftTr1').contents('td:first').contents('span#btnDown').removeClass('glyphicon glyphicon-triangle-bottom');
           $('#tblLeftTr3').contents('td:first').contents('span#btnUp').removeClass('glyphicon glyphicon-triangle-top');


          var bookDetails_col =["12","23","31"];
          $.each(bookDetails_col, function(i) {

                   $("#"+bookDetails_col[i]).find("input:radio").each(function() {
                        $(this).attr("checked",true);
                                //jQuery("#radio_1").attr('checked', true);

                      });

        });
           var RightTable=  document.getElementById("tblLeft").tBodies[0].children;
           var cnt=$('input:radio:checked').length;
           var crows=RightTable.length;
           var displaycnt="("+cnt+"/"+crows+")";
           $('#cnt').html(displaycnt);

})
</script>
</body>

