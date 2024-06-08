// map.js

document.getElementById('submitBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const postalCode = document.getElementById('postalCode').value;
    const address = `${city},${province},${postalCode}`;

    const encodedAddress = encodeURIComponent(address);
    const iframeSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCte0ZairAQAhxVahzUWEtSjqm2K5XbZ9w&q=${encodedAddress}`;

    document.getElementById('mapIframe').src = iframeSrc;
});

