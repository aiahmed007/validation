// Get the UI elements

let form = document.querySelector('#check');
let option = document.querySelector('#option');
let text = document.querySelector('text');


// UI Class

class UI{

   
    static clearCart(){
        while(cartList.firstChild){
            cartList.firstChild.remove();
        }
    }

 
    static showAlert(message,className){
        if(document.querySelector('.alert'))
        {
            document.querySelector('.alert').remove();
        }
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.main');
        let form = document.querySelector('#check');
        container.insertBefore(div,form);

         setTimeout(() => {
            if(document.querySelector('.alert'))
            {
                document.querySelector('.alert').remove();
            }
         }, 3000);
    }
    static showResult(message,className){
        if(document.querySelector('.alert1'))
        {
            document.querySelector('.alert1').remove();
        }
        let h3 = document.createElement('h3');
        h3.className = `alert1 ${className}`;
        h3.appendChild(document.createTextNode(message));
        let output = document.querySelector('#output');
        output.appendChild(h3);
         setTimeout(() => {
            if(document.querySelector('.alert1'))
            {
                document.querySelector('.alert1').remove();
            }
         }, 3000);
    }

}



// Add Event Listener

form.addEventListener('submit',validityCheck);


// Define Function

function validityCheck(e){
    let content = e.target.text.value;
    let choice = e.target.option.value;
    if(content===''){
        UI.showAlert('Please complete your input!', 'error');
    }else{
        switch(choice){
            case 'email':
                re = /^([a-z0-9]\.?)+[^\.]@([a-z0-9]\.?)+[^\.]$/ ;
                if(re.test(content)){
                    UI.showResult("Your Post Code input is valid","success")
                }
                else{
                    UI.showResult("Your Post Code input is invalid","error")
                }
                e.target.text.value='';
                break;
            case 'phone':
                re = /^(\+)?(88)?01[0-9]{9}$/;
                if(re.test(content)){
                    UI.showResult("Your Post Code input is valid","success")
                }
                else{
                    UI.showResult("Your Post Code input is invalid","error")
                }
                e.target.text.value='';
                break;
            case 'post':
                re=/^\d{4}$/;
                if(re.test(content)){
                    UI.showResult("Your Post Code input is valid","success")
                }
                else{
                    UI.showResult("Your Post Code input is invalid","error")
                }
                e.target.text.value='';
                break;
            default:
                UI.showResult("Invalid input","error")
                e.target.text.value='';
                break;
        }
    }

    e.preventDefault();
    
}

