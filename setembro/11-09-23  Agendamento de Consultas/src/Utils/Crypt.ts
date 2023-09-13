import bcrypt from 'bcrypt'

class Crypt {
    static encrypt(text: string): string {
      return bcrypt.hashSync(text, 8)
    }
  
    static compare(text: string, hash: string): boolean {
      return bcrypt.compareSync(text, hash)
    }
  }
  
  export { Crypt }