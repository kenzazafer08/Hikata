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

        