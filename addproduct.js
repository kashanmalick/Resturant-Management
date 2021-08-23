firebase.database().ref('All Users').on('value',function(data){
    // console.log(data.val())
    var uid= data.val()
    for(key in uid){
        var cat = uid[key]
        // console.log(cat)
        for(key1 in cat){
            console.log(cat[key1])
        }
    }
    
})