// Функция для генерации безопасного пароля
async function generateSecurePassword(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const service = document.getElementById('service').value.trim();
    const salt = document.getElementById('salt').value.trim();
    const memorablePart = document.getElementById('memorablePart').value.trim();
    const hashLength = parseInt(document.getElementById('hashLength').value);

    // Генерируем уникальную соль для каждого сервиса
    const uniqueSalt = service + salt; // Используем название сервиса + соль

    // Создаем комбинированную строку для хэширования
    const combinedString = memorablePart + uniqueSalt;

    // Хэшируем строку с помощью SHA-256
    const hashBuffer = await hashString(combinedString);

    // Преобразуем хэш в строку
    const hashHex = bufferToHex(hashBuffer);

    // Отрезаем хэш до нужной длины
    const truncatedHash = hashHex.substring(0, hashLength);

    // Отображаем сгенерированный пароль
    document.getElementById('generatedPassword').textContent = truncatedHash;
}

// Функция для хэширования строки с помощью SHA-256
async function hashString(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return hashBuffer;
}

// Функция для преобразования массива байтов в строку в формате Hex
function bufferToHex(buffer) {
    const byteArray = new Uint8Array(buffer);
    let hexString = '';
    byteArray.forEach(byte => {
        hexString += ('00' + byte.toString(16)).slice(-2); // Преобразуем байт в строку hex
    });
    return hexString;
}

// Обработчик формы
document.getElementById('passwordForm').addEventListener('submit', generateSecurePassword);

// Обновление значения ползунка
document.getElementById('hashLength').addEventListener('input', function() {
    document.getElementById('hashLengthValue').textContent = this.value;
});
