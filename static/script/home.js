const element = document.getElementById("devdiv");
function myFunction() {
   devinterval = setInterval(function() {
        if (element.innerHTML === "Developer...!") {
            element.innerHTML = '';
            clearInterval(devinterval);
            console.log('if');
            freelancer();

        } else {
            if(element.innerHTML == "Developer...")
            {
            element.innerHTML += "!";
            }
            else if(element.innerHTML == "Developer..")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Developer.")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Developer")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Develope")
            {
            element.innerHTML += "r";
            }
            else if(element.innerHTML == "Develop")
            {
            element.innerHTML += "e";
            }
            else if(element.innerHTML == "Develo")
            {
            element.innerHTML += "p";
            }
            else if(element.innerHTML == "Devel")
            {
                element.innerHTML += "o";
            }
            else if(element.innerHTML == "Deve")
            {
                element.innerHTML += "l";
            }
            else if(element.innerHTML == "Dev")
            {
                element.innerHTML += "e";
            }
            else if(element.innerHTML == "De")
            {
                element.innerHTML += "v";
            }
            else if(element.innerHTML == "D")
            {
                element.innerHTML += "e";
            }
            else{
                element.innerHTML += "D";
            }
        }
    }, 300);
  }
  function freelancer(){
    devinterval = setInterval(function() {
        if (element.innerHTML === "Freelancer...!") {
            element.innerHTML = '';
            clearInterval(devinterval);
            Student();

        } 
            else {
                if(element.innerHTML == "Freelancer...")
            {
            element.innerHTML += "!";
            }
            else if(element.innerHTML == "Freelancer..")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Freelancer.")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Freelancer")
            {
            element.innerHTML += ".";
            }
               else if(element.innerHTML == "Freelance")
                {
                element.innerHTML += "r";
                }
                else if(element.innerHTML == "Freelanc")
                {
                element.innerHTML += "e";
                }
                else if(element.innerHTML == "Freelan")
                {
                element.innerHTML += "c";
                }
                else if(element.innerHTML == "Freela")
                {
                element.innerHTML += "n";
                }
                else if(element.innerHTML == "Freel")
                {
                    element.innerHTML += "a";
                }
                else if(element.innerHTML == "Free")
                {
                    element.innerHTML += "l";
                }
                else if(element.innerHTML == "Fre")
                {
                    element.innerHTML += "e";
                }
                else if(element.innerHTML == "Fr")
                {
                    element.innerHTML += "e";
                }
                else if(element.innerHTML == "F")
                {
                    element.innerHTML += "r";
                }
                else{
                    element.innerHTML += "F";
                }
            }

    }, 300);
  }
  function Student(){
    devinterval = setInterval(function() {
        if (element.innerHTML === "Student...!") {
            element.innerHTML = '';
            clearInterval(devinterval);
            myFunction();
        } else {
            if(element.innerHTML == "Student...")
            {
            element.innerHTML += "!";
            }
            else if(element.innerHTML == "Student..")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Student.")
            {
            element.innerHTML += ".";
            }
            else if(element.innerHTML == "Student")
            {
            element.innerHTML += ".";
            }
               else if(element.innerHTML == "Studen")
                {
                element.innerHTML += "t";
                }
                else if(element.innerHTML == "Stude")
                {
                    element.innerHTML += "n";
                }
                else if(element.innerHTML == "Stud")
                {
                    element.innerHTML += "e";
                }
                else if(element.innerHTML == "Stu")
                {
                    element.innerHTML += "d";
                }
                else if(element.innerHTML == "St")
                {
                    element.innerHTML += "u";
                }
                else if(element.innerHTML == "S")
                {
                    element.innerHTML += "t";
                }
                else{
                    element.innerHTML += "S";
                }
            }
        
    }, 300);
  }