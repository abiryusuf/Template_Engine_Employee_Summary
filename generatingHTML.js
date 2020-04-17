function generatingHTML(answers){
    console.log(answers)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title> Template Engine Employee Summary</title>
        <!-- styleshett -->
        <!-- <link rel="stylesheet" href="styles.css" type="text/css">
         <!-- Bootstrap CSS -->
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
      
      <title> Template Engine Employee Summary</title>
      <style>
       .card-header {
        background-color: rgb(198, 214, 250)
        }
    
        .card{
            box-shadow: 5px 10px lightgray ;
        }
      </style>
    
    </head>
    <body>
        <div class="container-fluid">
            <div class="card text-center">
                <div class="card-header card border-drak mb-4">
                    <h4>My Team</h4>
                </div>
                <div class="card-body">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 18rem;">
                                <div class="card-header">
                                  <h5>${answers.Manager}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-mug-hot"></i>  Manager</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>Ron</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>Ron@gmail.com</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Office: </strong>Manhttan</li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 18rem;">
                                <div class="card-header">
                                  <h5>${answers.developerName1}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-glasses"></i> Developer</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>Robert</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>Robert@gmail.com</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong></li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 18rem;">
                                <div class="card-header">
                                  <h5>${answers.developerName2}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-glasses"></i> Developer</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>Herrison</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>H@gmail.com</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Office: </strong></li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 18rem;">
                                <div class="card-header">
                                  <h5>${developerName3}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-glasses"></i> Developer</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>Sun</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>sun@gmail.com</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong></li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 20rem;">
                                <div class="card-header">
                                  <h5>${developerName4}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-glasses"></i>  Developer</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>Simon</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>S@gmail.com</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong></li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-4">
                        <div class="card border-dark mb-4" style="width: 18rem;">
                            <div class="card-header">
                                <h5>${answers.internName}</h5>
                                <h5><i class="fas fa-user-graduate"></i>Intern</h5>
                            </div>
                            <div class="card-body text-dark">
                                <div class="card" style="width: 14rem;">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item" style="text-align:left"><strong>ID: </strong></li>
                                        <li class="list-group-item" style="text-align:left"><strong>Email: </strong>abir</li>
                                        <li class="list-group-item" style="text-align:left"><strong>Lindkedin:</strong>abiryusuf</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    </div>
                </div>
            </div>
        </div>
    </body>
 </html>`
}

module.exports=generatingHTML