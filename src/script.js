        function register() {
          let name = document.getElementById('name').value;
          if(name.length > 0){
            alert (`Cadastro  de ${name} realizado com sucesso!`)

          }else{
            alert(`seu nome não foi cadastrado!`)
          }


        }