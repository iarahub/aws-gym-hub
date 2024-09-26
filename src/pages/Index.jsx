import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import IaraBot from '../components/IaraBot';

const Index = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      localStorage.setItem('username', username);
      onLogin();
      navigate('/dashboard');
    } else {
      toast.error("Por favor, insira um nome de usuário.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl flex space-x-8">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">iaraHub IA</CardTitle>
            <CardDescription>Faça login para acessar o dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Nome de Usuário</Label>
                  <Input id="username" placeholder="Digite seu nome" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button onClick={handleLogin} className="w-full bg-primary hover:bg-secondary text-white mb-4">Entrar</Button>
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-2">Conheça nossos módulos:</p>
              <ul className="list-disc pl-5">
                <li>Academy AWS</li>
                <li>Onboarding</li>
                <li>Tracker Iuclick</li>
              </ul>
            </div>
          </CardFooter>
        </Card>
        <div className="w-[600px]">
          <IaraBot />
        </div>
      </div>
    </div>
  );
};

export default Index;
