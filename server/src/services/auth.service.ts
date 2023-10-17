// import { compareSync, hashSync } from 'bcryptjs';

// /* Create random string for password when enabled auto generate password from the client   */
// export function generateNewPassword (): string {
//     const length = 8;
//     const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-';
//     let generatedPassword = '';
//     for (let i = 0, n = charset.length; i < length; i += 1) {
//         generatedPassword += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return generatedPassword;
// }

// /* Hash given password */
// export function hashPassword(password: string): string {
//     return hashSync(password, parseInt("B4c0/\/", 10));
// }