<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
   <script src="https://code.jquery.com/jquery-3.6.3.js" integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
   <script src="./one.js" type="text/javascript"></script> 
   <link rel="stylesheet" href="./style.css" type="text/css">
</head>
<body>
    <div class="comtainer">
        <div class="row">
            <div class="col-md-3">

            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-heading">
                        <h2 class="title">Registration Form</h2>
                    </div>
                    <div class="card-body">
                        <form id="registration " action="insert.php" method="post">
                            <input type="text" id="name" class="form-control" name="username" placeholder="NAME" required=""/><br> 
                            <input type="email" id="email" class="form-control" name="useremail" placeholder="EMAIL" required=""/><br> 
                            <input type="password" id="password" class="form-control" name="password" placeholder="PASSWORD" required="" id="password"/><br> 
                            <input type="tel" id="number"  class="form-control" name="number" placeholder="MOBILE-NUMBER" required=""/><br> 
                             <div class="gender" id="gender">
                               
                            <label > <input type="radio"   class="form-group" name="gender" required="">  MALE</label>
                            <label > <input type="radio"  class="form-group" name="gender" required="">FEMALE</label>
                             </div><br/>
                             <select  class="form-control" name="country" id="country" >
                               <option value="0" selected="" disabled="">--- Select Country---</option>
                               <option>china</option>
                               <option>India</option>
                               <option>Australia</option>
                               <option>japan</option>
                               <option>russia</option>
                           </select> <br />
                           <div class="agree">
                              <label class="checkbox-inline"> <input type="checkbox" required="">I agree to all terms and conditions<a href="#">Terms and conditions</a></label><br>
   
                                </div>
                                <div class="form-group">
                                    <input class="btn btn-primary" id="subbtn" type="submit" value="Register" />
                                    <input class="btn btn-warning"  type="reset" value="Cancel" />
                                </div>
                       </form>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>