using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        public int Id {get; set;}
        public string Local {get; set;}
        public string DataEvento {get; set;}

        [Required(ErrorMessage = "O campo {0} é obrigatório.")]
        [MinLength(3, ErrorMessage = "{0} deve ter no mínimo 4 caracteres.")]

        public string Tema {get; set;}

        [Display( Name = "Quantidade de pessoas")]
        [Range(1, 12000, ErrorMessage = "{0} não pode ser menor que 1 e maior que 120.000")]
        public int QtdPessoas {get; set;}       

        [RegularExpression(@".*
        ")]
        public string ImagemURL {get; set;}

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [Phone(ErrorMessage = "O campo {0} está com número errado")]
        public string Telefone {get; set;}

        [Required(ErrorMessage = "O campo é obrigatório.")]
        [Display( Name = "e-mail")]
        [EmailAddress(ErrorMessage = "É necessário ser um {0} válido")]
        public string Email {get; set;}

         public IEnumerable<LoteDto> Lotes {get; set;}
        public IEnumerable<RedeSocialDto> RedesSociais {get; set;}
        public IEnumerable<PalestranteDto> Palestrantes {get; set;}

    }
}