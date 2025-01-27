const crypto = window.crypto || window.msCrypto;

function generateHMAC(service, salt, length) {
    const encoder = new TextEncoder();
    const data = encoder.encode(service);
    const key = encoder.encode(salt);

    return crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign'])
        .then(cryptoKey => crypto.subtle.sign('HMAC', cryptoKey, data))
        .then(signature => {
            const hashArray = Array.from(new Uint8Array(signature));
            return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        })
        .then(hash => {
            return hash.slice(0, length);
        });
}

function generatePassword(service, salt, memorablePhrase, length) {
    return generateHMAC(service, salt, length)
        .then(hash => {
            // Добавляем запоминаемую фразу в конец хэша
            const finalPassword = hash + memorablePhrase;
            return finalPassword;
        });
}

document.getElementById('password-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const service = document.getElementById('service').value;
    const salt = document.getElementById('salt').value;
    const memorablePhrase = document.getElementById('phrase').value;
    const hashLength = parseInt(document.getElementById('hash-length').value, 10);

    if (service && salt) {
        generatePassword(service, salt, memorablePhrase, hashLength)
            .then(password => {
                document.getElementById('generated-password').value = password;
            })
            .catch(error => {
                console.error("Error generating password:", error);
            });
    } else {
        alert("Please fill out all required fields.");
    }
});

document.getElementById('hash-length').addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('hash-length-value').textContent = value;
});
