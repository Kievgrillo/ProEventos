using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;
using ProEventos.Persistence.Contexto;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Persistence
{
    public class PalestrantePersist : IPalestrantePersist
    {
        private readonly ProEventosContext context;
        
        public async Task<Palestrante[]> GetAllPalestrantesByNomeAsynyc(string nome, bool includeEventos)
        {
             IQueryable<Palestrante> query = context.Palestrantes
                .Include(p => p.RedesSociais);

        if (includeEventos)
        {
            query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(pe => pe.Palestrante);
        }
            query = query.OrderBy(p => p.Id).Where(p => p.Nome.ToLower().Contains(nome.ToLower()));

            return await query.ToArrayAsync();
        }

        public async Task<Palestrante[]> GetAllPalestrantesAsynyc(bool includeEventos = false)
        {
            IQueryable<Palestrante> query = context.Palestrantes
                .Include(p => p.RedesSociais);

        if (includeEventos)
        {
            query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(pe => pe.Palestrante);
        }
            query = query.OrderBy(p => p.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Palestrante> GetPalestranteByIdAsynyc(int palestranteId, bool includeEventos)
        {
             IQueryable<Palestrante> query = context.Palestrantes
                .Include(p => p.RedesSociais);

        if (includeEventos)
        {
            query = query
                .Include(p => p.PalestrantesEventos)
                .ThenInclude(pe => pe.Palestrante);
        }
            query = query.OrderBy(p => p.Id)
                        .Where(p => p.Id == palestranteId);

            return await query.FirstOrDefaultAsync();
        }

    }
}