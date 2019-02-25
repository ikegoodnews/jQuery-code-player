/* <!-- <div id="circle"></div>
        
        <div class="square"></div>
        
        <div class="square"></div>
        
        <p>This is some text.</p>
        
        <iframe src="http://www.cnn.com" frameborder="0"></iframe>
        
        <p id="text">This is some text.</p>
        <button id="fadeOut">Fade Out Text</button>
        <button id="fadeIn">Fade In Text</button>
        
        <p id="text">This is some text.</p>
        <button id="toggle">Toggle</button>
        <p></p>
        
        
        
        
        
        <div id="wrapper">
        
        <div id="successMessage">You did it! Congratulations.</div>
        
        <div id="errorMessage"></div>
        
           <div class="form-element">
           
                <label for="email">Email</label>
                <input type="text" name="email" id="email" placeholder="eg yourname@gmail.com">
                
            </div>
            
            <div class="form-element">
               
                <label for="phone">Telephone</label>
                <input type="text" name="phone" id="phone" placeholder="eg 0123456789">
            
            </div>
            
            <div class="form-element">
               
                <label for="password">Password</label>
                <input type="password" name="password" id="password" >
            
            </div>
            
            <div class="form-element">
               
                <label for="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" >
            
            </div>
            
            <div class="form-element">
               
                <input type="submit" id="submitButton" value="Sign Up" >
            
            </div>

        </div> --> */





/* function isEmail(email) {
                
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                
                return regex.test(email);
                
            }
            
            $("#submitButton").click(function() {
               
                var errorMessage = "";
                var fieldsMissing = "";
                
                if ($("#email").val() == "") {
                    
                    fieldsMissing += "<br />Email";
                    
                }
                
                if ($("#phone").val() == "") {
                    
                    fieldsMissing += "<br />Telephone";
                    
                }
                
                if ($("#password").val() == "") {
                    
                    fieldsMissing += "<br />Password";
                    
                }
                
                if ($("#passwordConfirm").val() == "") {
                    
                    fieldsMissing += "<br />Confirm Password";
                    
                }
                
                if (fieldsMissing != "") {
                    
                    errorMessage += "<p>The following fields are missing: </p>" + fieldsMissing;
                    
                }
                
                if (isEmail($("#email").val()) == false) {
                    
                    errorMessage += "<p>Your email address is not valid</p>";
                    
                }
                
                if ($.isNumeric($("#phone").val()) == false) {
                    
                    errorMessage += "<p>Your phone number is not numeric</p>";
                    
                }
                
                if ($("#password").val() != $("#passwordConfirm").val()) {
                    
                    errorMessage += "<p>Your passwords don't match</p>";
                    
                }
                
                if (errorMessage != "") {
                    
                    $("#errorMessage").html(errorMessage);
                    
                } else {
                    
                    $("#successMessage").show();
                    $("#errorMessage").hide();
                    
                }
                
            });
            
            
            
            
            
            
            var regex = /is/i; /* use "i" for non-case sensitive match and use "g" for global as a count the number of times the variable appears.  Here "is" is in the string below .
            
            var string = "Regex is great!";
            
            var result = string.match(regex);
            
            alert(result);
            
            
            $.ajax("info.txt")
                .done(function(data) {
                
                $("p").html(data);
                
            })
                .fail(function() {
                
                alert("Could not get data");
                
            });
            
            $.ajax("info.txt")
                .done(function(data) {
                
                alert(data);
                
            })
                .fail(function() {
                
                alert("Could not get data");
                
            });
            
            
            $.get("info.txt", function(data) {
               
                alert(data);
                
            });
            
            $("#circle").click(function() {
                
                $(this).animate({
                    width:"400px",
                    height:"400px",
                    marginLeft:"100px",
                    marginTop:"100px"
                }, 2000, function() {
                    
                    $(this).css("background-color","red");
                    
                });
                
            });
            
            $("#toggle").click(function() {
                
                $("#text").toggle("slow");
                
            })
            
            $("#text").css("display","none");
            
            $("#fadeIn").click(function() {
                
                $("#text").fadeIn("slow");
                
            })
            
            $("#fadeOut").click(function() {
                
                $("p").fadeOut();
                
            })
            
            $("div").click(function() {
                
                $(this).fadeOut("slow", function() {
                   
                    alert("fadeOut has finished");
                    
                });
                
                // $(this).hide();
                
            });
            
            $("div").click(function() {
                
                if ($(this).attr("id") == "circle") {
                    
                    alert("You clicked on a circle");
                    
                } else {
                    
                    alert("You clicked on a square");
                    
                }
                                
            });
            
            $("div").click(function() {
               
                $(this).css("display","none");
                
            });
            
            $("#circle").click(function() {
               
                alert($("body").css("width"));
                
            });
            
            $("#circle").click(function() {
               
                alert("circle was clicked!");
                
            });
            
            $("#circle").hover(function() {
               
                // alert($("p").html());
                
                $("iframe").attr("src","http://google.com");
                
            });            
            
            
            if (typeof jQuery == "undefined") {
                
                alert("jQuery is not installed!");
                
            } else {
                
                alert("jQuery is installed correctly!");
                
            } */