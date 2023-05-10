-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql-argondb.alwaysdata.net
-- Generation Time: May 04, 2023 at 01:51 AM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `argondb_dh`
--
CREATE DATABASE IF NOT EXISTS `argondb_dh` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `argondb_dh`;

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

CREATE TABLE `carrito` (
  `usuarioId` int(11) NOT NULL,
  `productoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gama`
--

CREATE TABLE `gama` (
  `id` int(11) NOT NULL,
  `gama` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `gama`
--

INSERT INTO `gama` (`id`, `gama`) VALUES
(1, 'alta'),
(2, 'media'),
(3, 'baja');

-- --------------------------------------------------------

--
-- Table structure for table `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `marca`
--

INSERT INTO `marca` (`id`, `marca`) VALUES
(1, 'Dell'),
(2, 'gigabyte'),
(3, 'ViewSonic'),
(4, 'Asus'),
(5, 'Intel'),
(6, 'Amd'),
(7, 'Corsair'),
(8, 'Logitech'),
(9, 'Adata'),
(10, 'Zotac'),
(11, 'Western Digital'),
(12, 'Samsung'),
(13, 'MSI'),
(14, 'PNY'),
(15, 'Redragon'),
(16, 'Noganet'),
(17, 'Deepcool'),
(18, 'GENERICO'),
(19, 'Overtech'),
(20, 'TForce'),
(21, 'IdCooling');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(50) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` int(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `marcaId` int(100) DEFAULT NULL,
  `gamaId` int(100) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `sockets` varchar(5) DEFAULT ' ',
  `slots` int(11) DEFAULT 0,
  `ram` varchar(4) DEFAULT ' '
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `marcaId`, `gamaId`, `imagen`, `sockets`, `slots`, `ram`) VALUES
(2147483659, 'Monitor', 85000, 'Samsung 24\" curvo 144hz', 12, 2, '/img/products/imagen1682994075321.jpg', '', 2, 'DDR3'),
(2147483660, 'procesador', 73900, 'Intel Core i5 10400f', 5, 2, '/img/products/i510400f.png', ' ', 0, ' '),
(2147483661, 'Monitor', 90, 'ASUS TUF v24vq 24\" 165hz', 4, 1, '/img/products/v24vq.jpg', ' ', 0, ' '),
(2147483671, 'GPU', 211000, 'ZOTAC RTX 3070 TWIN EDGE 8GB', 10, 2, '/img/products/3070zotactwinedge.jpg', '', 0, ''),
(2147483672, 'GPU', 110000, 'ASUS RTX 3060 DUAL 12GB', 4, 2, '/img/products/3060dual.png', '', 0, ''),
(2147483673, 'Mother', 54300, 'ASUS TUF B450M PLUS II', 4, 2, '/img/products/b450mplus2.jpg', 'AM4', 0, 'DDR4'),
(2147483674, 'RAM', 16000, 'ADATA D41 8GB 3200MHZ', 9, 2, '/img/products/d41.jpg', '', 0, 'DDR4'),
(2147483684, 'SSD', 8000, 'WD BLUE 240GB SATA', 11, 3, '/img/products/wdblue.jpeg', '', 0, ''),
(2147483685, 'HDD', 12000, 'WD BLUE 1TB SATA', 11, 3, '/img/products/wdblue1tb.jpg', '', 0, ''),
(2147483686, 'Mother', 24000, 'ASUS PRIME B460M PLUS', 4, 3, '/img/products/b460plus.jpeg', '1151V', 0, 'DDR4'),
(2147483687, 'Mother', 45000, 'GIGABYTE H610M S2H DDR4', 2, 3, '/img/products/h610.jpg', '1700', 4, 'DDR4'),
(2147483688, 'CPU', 130000, 'AMD RYZEN 5 5600X (6C/12T)', 6, 2, '/img/products/5600x.jpg', 'AM4', 0, ''),
(2147483689, 'GPU', 880000, 'MSI RTX 4090 SUPRIM LIQUID X 24GB GDDR6X', 13, 1, '/img/products/4090msiliquid.jpg', '', 0, ''),
(2147483690, 'GPU', 13000, 'ASUS GT 730 2GB', 4, 3, '/img/products/gt730.jpg', '', 0, ''),
(2147483691, 'GPU', 115000, 'PNY XLR8 RTX 3060 GAMING REVEL EPIC-X RGB  12GB', 14, 2, '/img/products/3060pny.jpg', '', 0, ''),
(2147483692, 'PSU', 20000, 'REDRAGON RGPS 600W 80 PLUS BRONCE', 15, 2, '/img/products/rgps600.jpg', '', 0, ''),
(2147483693, 'PSU', 35000, 'ADATA CORE REACTOR 800W 80 PLUS GOLD', 9, 2, '/img/products/corereactor.png', '', 0, ''),
(2147483694, 'PSU', 14000, 'NOGANET 550W ', 15, 3, '/img/products/noga500w.jpg', '', 0, ''),
(2147483695, 'PSU', 17000, 'CORSAIR VS550 500W 80 PLUS', 7, 3, '/img/products/vs550.jpg', '', 0, ''),
(2147483696, 'PC armada', 92000, 'PC de Escritorio Armada Completa Intel Celeron J4005I-C 8GB SSD 240GB', 18, 3, '/img/products/pcarmada.jpg', '', 0, ''),
(2147483697, 'PC armada', 115000, 'PC de Escritorio Armada Completa Intel Pentium G6405 8GB SSD 256GB', 18, 3, '/img/products/pcarmada2.jpg', '', 0, ''),
(2147483698, 'PC armada', 205000, 'PC Armada Completa AMD Ryzen 5 4600G 16GB SSD 500GB + Mouse de Regalo', 18, 3, '/img/products/pcarmada3.jpg', '', 0, ''),
(2147483699, 'PC armada', 901000, 'PC Gamer Armada Completa AMD Ryzen 7 7700X 32GB SSD NVME 512GB HDD 2TB RX 6750 XT + Mouse de Regalo', 18, 1, '/img/products/pcarmada4.jpg', '', 0, ''),
(2147483708, 'PC armada', 815000, 'PC Gamer Armada Completa AMD Ryzen 7 7700X 32GB SSD 960GB NVME 512GB RX 6700 XT + Mouse de Regalo', 18, 1, '/img/products/pcarmada5.jpg', '', 0, ''),
(2147483709, 'PC armada', 650000, 'PC Gamer Armada Completa Intel Core I7 10700KF 32GB SSD NVME 512 GB RTX 3060 TI + Mouse de Regalo', 18, 2, '/img/products/pcarmada6.jpg', '', 0, ''),
(2147483710, 'PC armada', 502000, 'PC Gamer Armada Completa Intel Core I5 12400 32GB SSD NVME 512 GB RX 6700 XT + Mouse de Regalo', 18, 2, '/img/products/pcarmada7.jpg', '', 0, ''),
(2147483711, 'PC armada', 325000, 'PC Gamer Armada Completa Intel i3 10105 8GB SSD 240GB RTX 3060 Ti 8GB GDDR6', 18, 2, '/img/products/pcarmada8.jpg', '', 0, ''),
(2147483712, 'PC armada', 209800, 'PC Gamer Armada Completa Intel Core I3 10100F 16GB SSD 480GB GT 1030 + Mouse de Regalo', 18, 3, '/img/products/pcarmada9.jpg', '', 0, ''),
(2147483713, 'PC armada', 217000, 'PC De Escritorio Armada Completa AMD Ryzen 7 4700S 16GB 480GB SSD RX 550', 18, 3, '/img/products/pcarmada10.jpg', '', 0, ''),
(2147483714, 'PC armada', 188000, 'PC de Escritorio Armada Completa Intel I5 10400 16GB SSD 500GB', 18, 3, '/img/products/pcarmada11.jpg', '', 0, ''),
(2147483715, 'PC armada', 161000, 'PC De Escritorio Armada Completa AMD KIT Ryzen 7 4700S 16GB 240GB SSD GT 210', 18, 3, '/img/products/pcarmada12.jpg', '', 0, ''),
(2147483716, 'PC armada', 315000, 'PC Gamer Armada Completa Intel Core I3 12100F 16GB SSD NVME 512GB GTX 1650 + Mouse de Regalo', 18, 3, '/img/products/pcarmada13.jpg', '', 0, ''),
(2147483717, 'Gabinete', 57800, 'Corsair 4000D', 7, 2, '/img/products/4000d.jpg', '', 0, ''),
(2147483718, 'Gabinete', 45000, 'Deepcool Matrexx 55 Mesh', 17, 2, '/img/products/matrexx55.jpg', '', 0, ''),
(2147483719, 'Gabinete', 8000, 'Overtech C/Fuente generica, sin fuente - $2000', 19, 3, '/img/products/overtech.jpg', '', 0, ''),
(2147483720, 'Gabinete', 83000, 'Corsair 5000D Airflow', 7, 1, '/img/products/5000d.jpg', '', 0, ''),
(2147483721, 'CPU', 200000, 'Intel Core i7 13700k', 5, 1, '/img/products/13700k.jpg', '1700', 0, ''),
(2147483722, 'CPU', 200000, 'Amd Ryzen 7 7700X', 6, 1, '/img/products/7700x.jpg', 'AM5', 0, ''),
(2147483723, 'Mother', 100000, 'ASUS TUF B650 PLUS', 4, 2, '/img/products/b650.jpg', 'AM5', 0, 'DDR5'),
(2147483724, 'RAM', 40000, 'T FORCE DDR5 16GB 5000mHz', 20, 2, '/img/products/ddr516t.jpg', '', 0, 'DDR5'),
(2147483725, 'CPUCOOLER', 125, 'STOCK AMD', 6, 3, '/img/products/STOCKAMD.jpg', '', 0, ''),
(2147483726, 'CPUCOOLER', 40, 'STOCK INTEL', 5, 3, '/img/products/STOCKINTEL.jpg', '', 0, ''),
(2147483727, 'CPUCOOLER', 40000, 'DEEPCOOL AK620', 17, 1, '/img/products/ak620.jpg', '', 0, ''),
(2147483728, 'CPUCOOLER', 8000, 'IDCOOLING 224XT', 21, 2, '/img/products/224xt.jpg', '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`id`, `rol`) VALUES
(1, 'admin'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `rolId` int(11) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `rolId`, `avatar`, `telefono`) VALUES
(1, 'Luciano', 'Voltattorni', 'luvolta99@gmail.com', '$2a$10$Z.SY7R1nfPF2/PliOXpgU.INBZraU8LJUDbATsHSXqUia9nu19OOq', 1, '/img/users/1682741405397_img.jpg', '3364634565'),
(2, 'Paola', 'Guzman', 'paoguzmanok@gmail.com', '$2a$10$njll5BiaB7BotZY8j1tj/Ok3WFkh4.vaxaJYceCx8Px8n/M1tOate', 1, '/img/users/1682743205092_img.jpg', '3364634565'),
(3, 'Martina', 'Schaller', 'martinaschaller12@gmail.com', '$2a$10$XmVdzqKolOAQ2FmvUiM89uAehZ8q7Lc7BoA40pcGMdZGYx3J4nsX6', 1, '/img/users/1682751626523_img.jpg', '3364634555'),
(4, 'Facundo', 'Yavicoli', 'facuyavicoli@hotmail.com', '$2a$10$p0vFmK6W4Lx2G5Ako0KedOwpYuM4oRCkbm5divGmidAIUAOgJr44m', 1, '/img/users/1682751689885_img.jpg', '3364634544'),
(5, 'Maria', 'Trovato', 'malecervetto@gmail.com', '$2a$10$TRz6zNVRDY9TmqjNBUWiE.jRQ0UZEQAz4gexE0RLG.22.yg.CJ.wq', 1, '/img/users/1682751764354_img.jpg', '3364634544'),
(6, 'Paola', 'Guzman', 'paolaguzmanok@gmail.com', '$2a$10$J/ROzq9Y.od5NM/03WSZeu3gBEjky7SKgUIODgOd79YlDfFDo7ble', 2, '/img/users/usuario-generico.jpg', '3364001076'),
(7, 'Lucianoaaaaaaaaaaaa', 'Voltattorni', 'luvolta999@gmail.com', '$2a$10$FEPcPudhso0SDpxhBoce5eTxnOcOcGTFNtSthkvdTIuKJUr/1UU/a', 2, '/img/users/usuario-generico.jpg', '3364634566');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gama`
--
ALTER TABLE `gama`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marcaId` (`marcaId`),
  ADD KEY `gamaId` (`gamaId`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rolId` (`rolId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gama`
--
ALTER TABLE `gama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483734;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`marcaId`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`gamaId`) REFERENCES `gama` (`id`);

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
