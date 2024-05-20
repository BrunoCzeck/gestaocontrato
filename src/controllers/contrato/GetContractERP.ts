import { Request, Response } from 'express';

// Array de contratos fixos
const contratosCompras = {
    "contratosCompras": [
        {
            "contratoCompras": {
                "codigoContrato": "2-007024",
                "observacoesContrato": "701",
                "objetoContrato": "CPS 387-2023 PROC 25318-2022 EDITAL 2.0912-2022 - ESFERA (ATA 090-2022)",
                "dataEfetivacaoContrato": "2024-01-04T12:00:00",
                "dataExpiracaoContrato": "2025-01-04T12:00:00",
                "valorAberto": 399,
                "numeroCnpjCpfResponsavel": "812367700001-30",
                "codigoFornecedor": "SS_2214569",
                "nomeFornecedor": "ESFERA INFORMATICA LTDA - EPP",
                "codigoGestorContratoErp": "01875286918",
                "nomeGestorContratoErp": "RICARDO ANTONIO GRUPPELLI",
                "numeroLicitacao": "",
                "objetoLicitacao": "",
                "contratosComprasItens": [
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037077",
                            "descricaoItem": "SERVICO DE ATENDIMENTO TECNICO ESPECIALIZADO DE GERENTE PROJETOS",
                            "descricaoProduto": "SERVICO DE; TIPO SERVICO: ATENDIMENTO TECNICO; ATIVIDADE SERVICO: ESPECIALIZADO DE GERENTE PROJETOS; LOCAL/DESTINO SERVICO: N/A; DURACAO SERVICO: N/A",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 100,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 41,
                            "valorTotalProduto": 4100,
                            "quantidadeProduto": 41,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037055",
                            "descricaoItem": "SERVICO DE ATENDIMENTO TECNICO ESPECIALIZADO EM BANCO DADOS",
                            "descricaoProduto": "SERVICO DE; TIPO SERVICO: ATENDIMENTO TECNICO; ATIVIDADE SERVICO: ESPECIALIZADO EM BANCO DADOS; LOCAL/DESTINO SERVICO: N/A; DURACAO SERVICO: N/A",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 80,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 17,
                            "valorTotalProduto": 1360,
                            "quantidadeProduto": 17,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037056",
                            "descricaoItem": "SERVICO TECNICO DE ANALISTA DE INFRAESTRUTURA COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "descricaoProduto": "SERVICO TECNICO DE ANALISTA DE INFRAESTRUTURA COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 101.5,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 39,
                            "valorTotalProduto": 3958.5,
                            "quantidadeProduto": 39,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037068",
                            "descricaoItem": "SERVICO TECNICO DE ANALISTA FUNCIONAL E TECNICO COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "descricaoProduto": "SERVICO TECNICO DE ANALISTA FUNCIONAL E TECNICO COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 90,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 11,
                            "valorTotalProduto": 990,
                            "quantidadeProduto": 11,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037063",
                            "descricaoItem": "SERVICO TECNICO DE ANALISTA DE TESTES COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "descricaoProduto": "SERVICO TECNICO DE ANALISTA DE TESTES COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 60,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 61,
                            "valorTotalProduto": 3660,
                            "quantidadeProduto": 61,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037059",
                            "descricaoItem": "SERVICO TECNICO DE ANALISTA DE QUALIDADE COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "descricaoProduto": "SERVICO TECNICO DE ANALISTA DE QUALIDADE COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 60,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 56,
                            "valorTotalProduto": 3360,
                            "quantidadeProduto": 56,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037071",
                            "descricaoItem": "SERVICO TECNICO DE ARQUITETO DE SISTEMAS COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "descricaoProduto": "SERVICO TECNICO DE ARQUITETO DE SISTEMAS COM ESPECIALIDADE EM SOLUCOES PHP ",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 90,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 12,
                            "valorTotalProduto": 1080,
                            "quantidadeProduto": 12,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "contratoComprasItem": {
                            "codigoItem": "037076",
                            "descricaoItem": "SERVICO TECNICO DE DESENVOLVEDOR DE SISTEMAS EM LINGUAGEM PHP ",
                            "descricaoProduto": "SERVICO TECNICO DE DESENVOLVEDOR DE SISTEMAS EM LINGUAGEM PHP ",
                            "tipoItem": 2,
                            "descricaoTipoItem": "Serviço",
                            "precoUnitario": 85.1,
                            "codigoCategoria": "3. SERVICOS DE CONSULTORIA/ASSESSORIA DE TI",
                            "codigoDepartamento": "",
                            "descricaoDepartamento": "",
                            "centroResponsabilidade": {
                                "codigoCentroResponsabilidade": "",
                                "descricaoCentroResponsabilidade": ""
                            },
                            "unidadeProduto": "UN",
                            "descricaoUnidadeMedida": "",
                            "valorAbertoProduto": 0,
                            "quantidadeAbertoProduto": 162,
                            "valorTotalProduto": 13786.2,
                            "quantidadeProduto": 162,
                            "abrangencias": [
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "1",
                                        "codigoUnidadeFilial": "1001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "2",
                                        "codigoUnidadeFilial": "2001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "3",
                                        "codigoUnidadeFilial": "3001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                },
                                {
                                    "abrangencia": {
                                        "codigoEntidade": "4",
                                        "codigoUnidadeFilial": "4001",
                                        "codigoUnidadeDepartamental": ""
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ],
    "monitoramento": {
        "localTransactionId": "d510aca5-7c81-4463-bf7c-042801725f16-1",
        "localTransactionDate": "2024-04-12T18:09:04"
    }
};

export default {
    async ContractAllERP(req: Request, res: Response) {
        try {
            // Simplesmente retorne o array de contratos fixos
            return res.status(200).json({
                contratosCompras
            });
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({
                error: true,
                message: 'Error getting the contracts'
            });
        }
    }
};