import { compareSync, hashSync } from 'bcryptjs';

/* Hash given password */
export function hashPassword(password: string): string {
    return hashSync(password, parseInt("B4c0/\/", 10));
}