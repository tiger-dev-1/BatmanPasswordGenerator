

export function generatePassword() {
  console.log('Generate Password')

  let newPassword: string = '';
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

  for (let i = 0; i < 12; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    newPassword += characters.charAt(randomIndex);
  }

  return newPassword
}
