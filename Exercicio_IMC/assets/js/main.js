function calculoIMC(){
    let formularioResposta = document.querySelector('form');
    let resultado_imc = document.querySelector('#resultado_imc');

    function imprimiResultado (evento){
        evento.preventDefault();
        let peso = Number(formularioResposta.querySelector('#peso').value);
        let altura = Number(formularioResposta.querySelector('#altura').value);
        let imc= 0; 

        //Verifica possíveis erros do usuário
        if (isNaN(peso) && isNaN(altura) ){
            resultado_imc.innerHTML = "<p>Peso e altura invalidos</p>";
            resultado_imc.style.backgroundColor = "red";
            resultado_imc.style.color = "white"

        } else if (isNaN(peso)){
            resultado_imc.innerHTML = "<p>Peso Invalido</p>";
            resultado_imc.style.backgroundColor = "red";
            resultado_imc.style.color = "white"

        }else if (isNaN(altura)){
            resultado_imc.innerHTML = "<p>Altura Inválida</p>";
            resultado_imc.style.backgroundColor = "red";
            resultado_imc.style.color = "white"

        } else if (peso == 0 || altura == 0) {
            resultado_imc.innerHTML = `IMC menor que 0 existe algo errado, revise o peso e altura!`;
            resultado_imc.style.backgroundColor = "red";
            resultado_imc.style.color = "white"   

        // Após a verificação, começa os calculos 
        }else{
            if (Number.isInteger(altura)){
                // Realiza os calculos
                altura = altura / 100;
                imc = Number((peso / (altura * altura)).toFixed(2));
                console.log(typeof imc);

                if(imc > 0 && imc <  18.5){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;

                }
                else if (imc < 25){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
                    
                } else if (imc < 30){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;

                } else if (imc < 35){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
                } else if (imc < 40){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
                } else if (imc > 40){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
                    
                } else{
                    resultado_imc.innerHTML = `Seus valores estão errados, revise-os!`;
                    console.log(imc);
                }
                // troca cor
                resultado_imc.style.backgroundColor = "aquamarine";
                resultado_imc.style.color = "black";
                
                
            }
            else{
                Number(imc = (peso / (altura * altura)).toFixed(2));
                
                if(imc > 0 && imc <  18.5){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`;
                }
                else if (imc <= 24.9){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Peso normal)`;
                } else if (imc <= 29.9){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`;
                } else if (imc <= 34.9){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`;
                } else if (imc <= 39.9){
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`;
                } else{
                    resultado_imc.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`;
                    
                } 
                resultado_imc.style.backgroundColor = "aquamarine";
                resultado_imc.style.color = "black";

            }

            formularioResposta.querySelector('#peso').value = '';
            formularioResposta.querySelector('#altura').value = '';
        }
        
        
    }

    formularioResposta.addEventListener('submit', imprimiResultado);
}

calculoIMC();


