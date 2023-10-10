namespace Projetoconsole1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int opcao;

            Console.WriteLine("Digite a opção desejada:");
            Console.WriteLine("1 - Desbloqueio de cartão");
            Console.WriteLine("2 - Bloqueio de cartão");
            Console.WriteLine("3 - Falar com atendente");
            Console.WriteLine("4 - Sair do sistema");

            opcao = int.Parse(Console.ReadLine());

            switch (opcao)
            {
                case 1:
                    Console.WriteLine("Cartão desbloqueado com sucesso!");
                    break;
                case 2:
                    Console.WriteLine("Cartão bloqueado com sucesso!");
                    break;
                case 3:
                    Console.WriteLine("Olá, em que posso ajudar?");
                    break;
                case 4:
                    Console.WriteLine("Volte sempre!");
                    break;
                default:
                    Console.WriteLine("Opção inválida!");
                    break;
            }

            Console.ReadLine(); // Para manter a janela do console aberta até que o usuário pressione Enter.
        }
    }
}