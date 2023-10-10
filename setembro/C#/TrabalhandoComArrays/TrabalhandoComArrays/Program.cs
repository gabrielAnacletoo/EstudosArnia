using System; // Certifique-se de incluir o namespace System para usar a classe Console.

namespace TrabalhandoComArrays
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Correção: Corrigindo a declaração e inicialização do array.
            string[] linguagens = new string[4];

            linguagens[0] = "PHP";
            linguagens[1] = "Javascript";
            linguagens[2] = "Java";
            linguagens[3] = "C#";

            Console.WriteLine("Array de linguagens: " + linguagens[0]); // Correção: Console com "C" maiúsculo.
        }
    }
}
