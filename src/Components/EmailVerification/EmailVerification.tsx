import React, { useState, useRef, useEffect } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../Components/ui/CardVerification';

const Verification: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Limiter la taille des références au nombre de cases
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    // Passer automatiquement à l'input suivant si une valeur est entrée
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Retourner à l'input précédent sur backspace si l'input actuel est vide
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join('');
    console.log('Verification code submitted:', code);
    // Logique d'envoi du code au backend pour vérification
  };

  return (
    <div className='w-full h-screen flex justify-center items-center  '>
    <Card className="w-[350px]  z-50 shadow-black shadow-2xl border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Vérification de l'e-mail</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Veuillez entrer le code de vérification à 6 chiffres que vous avez reçu par e-mail.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            {verificationCode.map((digit, index) => (
              <Input
                key={index}
                type="number"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-lg border-solid border-[0.5px] border-black outline-footercolor [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            ))}
          </div >
          <Button type="submit" className="w-full bg-primary hover:bg-footercolor  border-none outline-none ">
            Vérifier
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground text-gray">
          Vous n'avez pas reçu de code ? <a href="#" className="text-blue">Renvoyer</a>
        </p>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Verification;
