// See https://aka.ms/new-console-template for more information
while (true)
        {
            
            Console.WriteLine("Escolha uma operação:");
            Console.WriteLine("1 - Adição");
            Console.WriteLine("2 - Subtração");
            Console.WriteLine("3 - Multiplicação");
            Console.WriteLine("4 - Divisão");
            Console.WriteLine("0 - Sair");

 // irá salvar em opcao o valor que foi digitado, realine pegao valor digitado na linha
            int opcao = Convert.ToInt32(Console.ReadLine());
// se opcao for zero ele termina o programa
            if (opcao == 0)
                break;

            Console.Write("Digite o primeiro número: ");
            double num1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Digite o segundo número: ");
            double num2 = Convert.ToDouble(Console.ReadLine());

            double resultado = 0;

            switch (opcao)
            {
                case 1:
                    resultado = num1 + num2;
                    break;
                case 2:
                    resultado = num1 - num2;
                    break;
                case 3:
                    resultado = num1 * num2;
                    break;
                case 4:
                    if (num2 != 0)
                        resultado = num1 / num2;
                    else
                        Console.WriteLine("Erro: divisão por zero não permitida.");
                    break;
                default:
                    Console.WriteLine("Opção inválida!");
                    continue;
            }

            Console.WriteLine("Resultado: " + resultado);
            Console.WriteLine();
        }
        Console.WriteLine("Calculadora finalizada.");
    