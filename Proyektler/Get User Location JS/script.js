if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lan = position.coords.longitude;
        console.log(lat,lan)
    })
}
else {
    console.log('Browser is not supported Geolocation')
}