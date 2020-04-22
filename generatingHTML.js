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
                    <h4>Team of Columbia</h4>
                </div>
                <div class="card-body">
                    <div class="row row-cols-1 row-cols-md-3">
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 18rem;">
                                <div class="card-header">
                                  <h5>${answers.managerName}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-mug-hot"></i>  Manager</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID:</strong>${answers.managerID}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>${answers.managerEmail}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Office: </strong>${answers.managerOffice}</li>
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
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>${answers.developerID1}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>${answers.developerEmail1}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong>${answers.developerGitHub1}</li>
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
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>${answers.developerID2}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>${answers.developerEmail_2}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong>${answers.developerGitHub_2}</li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 18rem;">
                                <div class="card-header">
                                  <h5>${answers.developerName3}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-glasses"></i> Developer</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>${answers.developerID_3}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>${answers.developerEmail_3}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong>${answers.developerGitHub_3}</li>
                                         </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-mb-4">
                            <div class="card border-dark mb-4" style="width: 20rem;">
                                <div class="card-header">
                                  <h5>${answers.developerName4}</h5>   
                                  <!-- new things I learn to make a logo from bootstrap -->
                                  <h5><i class="fas fa-glasses"></i>  Developer</h5>
                                </div>
                                <div class="card-body text-dark">
                                    <div class="card" style="width: 14rem;">
                                         <ul class="list-group list-group-flush">
                                             <li class="list-group-item" style="text-align:left;"><strong>ID: </strong>${answers.developerID_4}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>Email: </strong>${answers.developerEmail_4}</li>
                                             <li class="list-group-item" style="text-align:left;"><strong>GitHub: </strong>${answers.developerGitHub_4}</li>
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
                                        <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.internID}</li>
                                        <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.emailIntern}</li>
                                        <li class="list-group-item" style="text-align:left"><strong>Lindkedin:</strong>${answers.InternGitHub}</li>
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