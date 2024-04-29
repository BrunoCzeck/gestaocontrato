-- CreateTable
CREATE TABLE `dbo.contrato` (
    `id` VARCHAR(191) NOT NULL,
    `numero_contrato` VARCHAR(191) NOT NULL,
    `valor_contrato` VARCHAR(191) NOT NULL,
    `horas` DOUBLE NOT NULL,
    `status` BOOLEAN NOT NULL,
    `data_vigencia` VARCHAR(191) NOT NULL,
    `fornecedor` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `aditivo` VARCHAR(191) NOT NULL,
    `cps` BOOLEAN NOT NULL,
    `ata_registro` BOOLEAN NOT NULL,
    `porcentagem_reajuste` VARCHAR(191) NULL,
    `responsavel_contrato` VARCHAR(191) NOT NULL,
    `numero_edital` VARCHAR(191) NOT NULL,
    `numero_lote` VARCHAR(191) NOT NULL,
    `hora_sem_orcamento` VARCHAR(191) NOT NULL,
    `numero_processo` VARCHAR(191) NOT NULL,
    `numero_ata` VARCHAR(191) NOT NULL,
    `hora_fora_contrato` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dbo.item` (
    `id` VARCHAR(191) NOT NULL,
    `numero_item` VARCHAR(191) NOT NULL,
    `perfil` VARCHAR(191) NOT NULL,
    `quantidade_hora` VARCHAR(191) NOT NULL,
    `valor_hora` VARCHAR(191) NOT NULL,
    `numero_contrato` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dbo.colaborador` (
    `id` VARCHAR(191) NOT NULL,
    `perfil` VARCHAR(191) NOT NULL,
    `colaborador` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cpf_rg` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `aprovado` BOOLEAN NOT NULL,
    `numero_contrato` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dbo.demanda` (
    `id` VARCHAR(191) NOT NULL,
    `titulo_projeto` VARCHAR(191) NOT NULL,
    `epic_projeto` INTEGER NOT NULL,
    `contrato_filho` VARCHAR(191) NOT NULL,
    `fornecedor` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `projeto` BOOLEAN NOT NULL,
    `sustentacao` BOOLEAN NOT NULL,
    `numero_contrato` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dbo.estimativa` (
    `id` VARCHAR(191) NOT NULL,
    `numero_item` VARCHAR(191) NOT NULL,
    `titulo_requisito` VARCHAR(191) NOT NULL,
    `json_perfil` JSON NOT NULL,
    `numero_contrato` VARCHAR(191) NOT NULL,
    `valor_total` DOUBLE NOT NULL,
    `horas` DOUBLE NOT NULL,
    `observacao` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
