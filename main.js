    
    function food(){
        const f = document.getElementById('food').value 
        switch(f){
            case 'all' : 
            document.getElementById('all').style.display = 'grid'
            document.getElementById('sushi').style.display = 'none'
            document.getElementById('ramen').style.display = 'none'
            document.getElementById('Tteokboki').style.display = 'none'
            break;
            case 'Sushi' : 
            document.getElementById('all').style.display = 'none'
            document.getElementById('sushi').style.display = 'grid'
            document.getElementById('ramen').style.display = 'none'
            document.getElementById('Tteokboki').style.display = 'none'
            break;
            case 'Ramen' : 
            document.getElementById('all').style.display = 'none'
            document.getElementById('sushi').style.display = 'none'
            document.getElementById('ramen').style.display = 'grid'
            document.getElementById('Tteokboki').style.display = 'none'
            break;
            case 'Tteokboki' : 
            document.getElementById('all').style.display = 'none'
            document.getElementById('sushi').style.display = 'none'
            document.getElementById('ramen').style.display = 'none'
            document.getElementById('Tteokboki').style.display = 'grid'
            break;
        }
    }
        let prix = [100,120,110,150,90,70,80,130,60]
        let name = ['inaruzushi','Spicy Tune','Philadelphia roll','Sapporo Ramen','Hakotada ramen','Kitaka ramen','Tteokboki cheese','Rabokki','Ordinary Tteokboki']
        let totalPrice = 0
        let prixButtons = document.querySelectorAll('.price');
        prixButtons.forEach(function(button) {
        button.addEventListener('click', function(e){
            e.preventDefault();
            let id = button.getAttribute('id');
            let pr = prix[id]
        let n = name[id] 
        const AboutMe = `<div id="${id}">${n}  <span style="float:right" class="close2" >${pr} &times</span> </div>` 
        let p = document.createElement('p')
        p.classList.add('test');
        p.innerHTML = AboutMe
        let parent = document.getElementById('p')
        parent.appendChild(p)
            totalPrice += prix[id]
      })
    })
    function calcul(){
        let Total = `Total : ${totalPrice}  DH` 
        document.getElementById('price').innerHTML = Total 
    }
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
      let parent = document.getElementById('banner');
      let p = document.getElementById('p');
      parent.removeChild(p);
    }
   
    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    } 
    
    function popup() {
      document.getElementById('banner').style.display = 'block'
    }
    span.onclick = function() {
     document.getElementById('banner').style.display = 'none'
    }
    