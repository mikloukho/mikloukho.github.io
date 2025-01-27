# Secure Password Generator with Custom Salt and Memorable Phrase

This project is a secure password generator that allows you to generate passwords using a combination of a hash (stored in a password manager) and a memorable phrase (that you remember). The idea is that part of the password is generated and stored securely in a password manager, while the other part is something you can easily remember. This approach increases security by making it harder for attackers to get the full password, even if they have access to your password manager.

## How It Works

1. **Hash Generation**:
   - A SHA-256 hash is generated from a combination of the **service name** (e.g., Gmail, Facebook) and a **salt** (a string you provide). This hash is stored in your password manager.

2. **Memorable Part**:
   - You add a **memorable part** to the password that only you know. This could be a word or a phrase that is easy for you to remember, but hard for others to guess.

3. **Password Generation**:
   - The generator combines the memorable part you provide with the hash stored in the password manager. The result is a unique, secure password for each service.
   - The length of the generated password can be adjusted according to your preferences.

By using this approach, even if your password manager is compromised, an attacker will only have access to the hashed part of the password. Since the memorable part is known only to you, this increases security.

## Features

- **SHA-256 hashing**: Uses the SHA-256 algorithm to create a hash from the service name and salt.
- **Custom salt**: The salt ensures that the hash is unique for each service.
- **Memorable part**: You can use a word or phrase that you remember to make the password easier to recall.
- **Adjustable hash length**: You can choose how long the generated password should be.
- **No third-party libraries**: The solution uses only built-in web APIs (Web Crypto API).

## Example

Let's say you want to create a secure password for your Gmail account:

1. **Service Name**: Gmail
2. **Salt**: A unique string you choose (e.g., `mySalt123`)
3. **Memorable Part**: A phrase or word that you remember (e.g., `BlueSky2025`)

The system will:

- Generate a SHA-256 hash using `Gmail + mySalt123`.
- Combine the hash with your memorable part (`BlueSky2025`).
- Output a password that combines the secure hash with your memorable part.

This ensures that the final password is unique for Gmail, but also contains part that only you know, making it much harder for anyone to guess.

## How to Use

1. Enter the **Service Name** (e.g., Gmail, Facebook).
2. Enter a **Salt** (this can be any string that adds complexity to the hash).
3. Optionally, add a **Memorable Part** (a word or phrase that only you know).
4. Adjust the **Hash Length** using the slider.
5. Click the **Generate Secure Password** button to generate your password.
6. The generated password will be displayed below.

## Technologies Used

- HTML
- CSS
- JavaScript (with the Web Crypto API)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/secure-password-generator.git
