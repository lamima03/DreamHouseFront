export function fullNameValidate(fullName: string) {
    // Vérifie si le texte correspond à l'expression régulière
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(fullName);
  }