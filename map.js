// map.js

document.getElementById('submitBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const postalCode = document.getElementById('postalCode').value;
    const address = `${city},${province},${postalCode}`;

    const encodedAddress = encodeURIComponent(address);
    const iframeSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAVAFhvRyAL8XJgFD8yf9lF3RgPx4ErRXE&q=${encodedAddress}`;

    document.getElementById('mapIframe').src = iframeSrc;
});

