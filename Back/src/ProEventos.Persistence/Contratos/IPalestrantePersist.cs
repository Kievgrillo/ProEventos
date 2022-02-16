using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
        Task<Palestrante[]> GetAllPalestrantesByNomeAsynyc(string nome, bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsynyc(bool includeEventos);
        Task<Palestrante> GetPalestranteByIdAsynyc(int palestrantesId, bool includeEventos);
    }
}