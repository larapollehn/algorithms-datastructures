/**
 * right Shift only
 */
export class CaesarEncryption {
    private readonly key: number;

    constructor(key: number) {
        this.key = key;
    }

    encrypt(data : string) : string{
        let encryptedChar = [];
        for (let i = 0; i < data.length; i++){
            encryptedChar.push(String.fromCharCode(data.charCodeAt(i)+this.key))
        }
        return encryptedChar.join('');
    }

    decrypt(data : string) : string{
        let decryptedChar = [];
        for (let i = 0; i < data.length; i++){
            decryptedChar.push(String.fromCharCode(data.charCodeAt(i)-this.key))
        }
        return decryptedChar.join('');
    }
}