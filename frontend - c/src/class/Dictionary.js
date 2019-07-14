export default class Dictionary {

  constructor() {
    return {
      custom: {
        ano: {
          required: () => "O Campo Ano não deve ser vazio",
          date_format: () => "Digite um ano válido Ex: 2019"
        },
        fazenda: {
          required: () => "O Campo Fazenda não deve ser vazio"
        },
        municipio: {
          required: () => "O Campo Municipio não deve ser vazio"
        },
        touroPesoMedio: {
          required: () => "O Campo Peso Médio kg/cab não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        touroCabecaInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        touroCabecaFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        touroValor: {
          required: () => "O Campo Valor R$/cab não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        vacaMatrizPesoMedio: {
          required: () => "O Campo Peso Médio kg/cab não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        vacaMatrizCabecaInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        vacaMatrizCabecaFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        vacaMatrizValor: {
          required: () => "O Campo Valor R$/cab não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas36PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas36PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas36Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas36CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas36CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },

        machos1224PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },

        machos2436PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },

        machos36PesoInicial: {
          required: () => "O Campo Peso(kg)Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36PesoFinal: {
          required: () => "O Campo Peso(kg)Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36Valor: {
          required: () => "O Campo Valor R$/Kg Vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36CabecasInicial: {
          required: () => "O Campo Cabeças-Inicial não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36CabecasFinal: {
          required: () => "O Campo Cabeças-Final não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        rebanhoMedioAnualEstimadoCabeca: {
          required: () => "O Campo Cabeças não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        rebanhoMedioAnualEstimadoUA: {
          required: () => "O Campo UA não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas36PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36PesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        touroPesoMedioKGVivo1: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },

        femeas36cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },

        femeas2436cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36cabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        tourocabeca1: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },


        femeas36ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas012ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos012ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36ValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        touroValorUnitarioRSCabeca: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },


        femeas36PesoMedioKGVivo: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436PesoMedioKGVivo: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224PesoMedioKGVivo: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224PesoMedioKGVivo: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436PesoMedioKGVivo: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36PesoMedioKGVivo: {
          required: () => "O Campo Peso Medio kg vivo não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },

        femeas36cabeca: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436cabeca: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224cabeca: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224cabeca: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436cabeca: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36cabeca: {
          required: () => "O Campo Peso Medio cab. não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },


        femeas36PesoMedioCarcaca: {
          required: () => "O Campo Peso Medio Carcaça não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436PesoMedioCarcaca: {
          required: () => "O Campo Peso Medio Carcaça não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224PesoMedioCarcaca: {
          required: () => "O Campo Peso Medio Carcaça não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224PesoMedioCarcaca: {
          required: () => "O Campo Peso Medio Carcaça não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436PesoMedioCarcaca: {
          required: () => "O Campo Peso Medio Carcaça não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36PesoMedioCarcaca: {
          required: () => "O Campo Peso Medio Carcaça não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },



        femeas36ValorUnitarioRS: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas2436ValorUnitarioRS: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        femeas1224ValorUnitarioRS: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos1224ValorUnitarioRS: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos2436ValorUnitarioRS: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        machos36ValorUnitarioRS: {
          required: () => "O Campo Valor (R$/cab) não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        retiradaDoProdutorMes: {
          required: () => "O Campo R$/Mês não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        retiradaDoProdutorDedicacaoBovinocultura: {
          required: () => "O Campo Dedicação à Bovinocultura % não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        retiradaFamiliaMes: {
          required: () => "O Campo R$/Mês não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        retiradaFamiliaDedicacaoBovinocultura: {
          required: () => "O Campo Dedicação à Bovinocultura % não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        vendaProdutosBovinoculturaCorteValorTotal: {
          required: () => "O Campo R$ não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        receitaAluguelPastoValorTotal: {
          required: () => "O Campo R$ não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        },
        precoArrobaBoiGordo: {
          required: () => "O Campo R$/@ não deve ser vazio",
          max: () => "O Campo não deve ter mais que 8 números"
        }








      }
    }

  }
}