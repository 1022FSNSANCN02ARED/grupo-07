-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2023 a las 05:04:40
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `argondb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `usuarioId` int(11) NOT NULL,
  `productoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gama`
--

CREATE TABLE `gama` (
  `id` int(11) NOT NULL,
  `gamma` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `gama`
--

INSERT INTO `gama` (`id`, `gamma`) VALUES
(1, 'alta'),
(2, 'media'),
(3, 'baja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `marca` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `marca`
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
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(50) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` int(100) DEFAULT NULL,
  `descripción` varchar(500) DEFAULT NULL,
  `marcaId` int(100) DEFAULT NULL,
  `gamaId` int(100) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `sockets` varchar(5) DEFAULT NULL,
  `slots` int(11) DEFAULT NULL,
  `ram` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripción`, `marcaId`, `gamaId`, `imagen`, `sockets`, `slots`, `ram`) VALUES
(2147483659, 'Monitor', 85000, 'Samsung 24\" curvo 75hz', 12, 2, '/img/products/imagen1680847412019.jpg', '', 0, ''),
(2147483660, 'procesador', 80000, NULL, NULL, NULL, '/img/products/imagen1680847920047.jpg', NULL, NULL, NULL),
(2147483661, 'Monitor', 90, NULL, NULL, NULL, '/img/products/imagen1680906966321.jpg', NULL, NULL, NULL),
(2147483671, 'GPU', 211000, 'ZOTAC RTX 3070 TWIN EDGE 8GB', 10, 2, '', '', 0, ''),
(2147483672, 'GPU', 110000, 'ASUS RTX 3060 DUAL 12GB', 4, 2, '', '', 0, ''),
(2147483673, 'Mother', 54300, 'ASUS TUF B450M PLUS II', 4, 2, '', 'AM4', 0, 'DDR4'),
(2147483674, 'RAM', 16000, 'ADATA D41 8GB 3200MHZ', 9, 2, '', '', 0, 'DDR4'),
(2147483684, 'SSD', 8000, 'WD BLUE 240GB SATA', 11, 3, '', '', 0, ''),
(2147483685, 'HDD', 12000, 'WD BLUE 1TB SATA', 11, 3, '', '', 0, ''),
(2147483686, 'Mother', 24000, 'ASUS PRIME B250M-A', 4, 3, '', '1151V', 0, 'DDR4'),
(2147483687, 'Mother', 45000, 'GIGABYTE H610M S2H DDR4', 2, 3, '', '1700', 4, 'DDR4'),
(2147483688, 'CPU', 130000, 'AMD RYZEN 5 5600X (6C/12T)', 6, 2, '', 'AM4', 0, ''),
(2147483689, 'GPU', 880000, 'MSI RTX 4090 SUPRIM LIQUID X 24GB GDDR6X', 13, 1, '', '', 0, ''),
(2147483690, 'GPU', 13000, 'ASUS GT 730 2GB', 4, 3, '', '', 0, ''),
(2147483691, 'GPU', 115000, 'PNY XLR8 RTX 3060 GAMING REVEL EPIC-X RGB  12GB', 14, 2, '', '', 0, ''),
(2147483692, 'PSU', 20000, 'REDRAGON RGPS 600W 80 PLUS BRONCE', 15, 2, '', '', 0, ''),
(2147483693, 'PSU', 35000, 'ADATA CORE REACTOR 800W 80 PLUS GOLD', 9, 2, '', '', 0, ''),
(2147483694, 'PSU', 14000, 'NOGANET 500W ', 15, 3, '', '', 0, ''),
(2147483695, 'PSU', 17000, 'CORSAIR VS550 500W 80 PLUS', 7, 3, '', '', 0, ''),
(2147483696, 'PCARMADA', 92000, 'PC de Escritorio Armada Completa Intel Celeron J4005I-C 8GB SSD 240GB', 18, 3, '', '', 0, ''),
(2147483697, 'PCARMADA', 115000, 'PC de Escritorio Armada Completa Intel Pentium G6405 8GB SSD 256GB', 18, 3, '', '', 0, ''),
(2147483698, 'PCARMADA', 205000, 'PC Armada Completa AMD Ryzen 5 4600G 16GB SSD 500GB + Mouse de Regalo', 18, 3, '', '', 0, ''),
(2147483699, 'PCARMADA', 901000, 'PC Gamer Armada Completa AMD Ryzen 7 7700X 32GB SSD NVME 512GB HDD 2TB RX 6750 XT + Mouse de Regalo', 18, 1, '', '', 0, ''),
(2147483708, 'PCARMADA', 815000, 'PC Gamer Armada Completa AMD Ryzen 7 7700X 32GB SSD 960GB NVME 512GB RX 6700 XT + Mouse de Regalo', 18, 1, '', '', 0, ''),
(2147483709, 'PCARMADA', 650000, 'PC Gamer Armada Completa Intel Core I7 10700KF 32GB SSD NVME 512 GB RTX 3060 TI + Mouse de Regalo', 18, 2, '', '', 0, ''),
(2147483710, 'PCARMADA', 502000, 'PC Gamer Armada Completa Intel Core I5 12400 32GB SSD NVME 512 GB RX 6700 XT + Mouse de Regalo', 18, 2, '', '', 0, ''),
(2147483711, 'PCARMADA', 325000, 'PC Gamer Armada Completa Intel i3 10105 8GB SSD 240GB RTX 3060 Ti 8GB GDDR6', 18, 2, '', '', 0, ''),
(2147483712, 'PCARMADA', 209800, 'PC Gamer Armada Completa Intel Core I3 10100F 16GB SSD 480GB GT 1030 + Mouse de Regalo', 18, 3, '', '', 0, ''),
(2147483713, 'PCARMADA', 217000, 'PC De Escritorio Armada Completa AMD Ryzen 7 4700S 16GB 480GB SSD RX 550', 18, 3, '', '', 0, ''),
(2147483714, 'PCARMADA', 188000, 'PC de Escritorio Armada Completa Intel I5 10400 16GB SSD 500GB', 18, 3, '', '', 0, ''),
(2147483715, 'PCARMADA', 161000, 'PC De Escritorio Armada Completa AMD KIT Ryzen 7 4700S 16GB 240GB SSD GT 210', 18, 3, '', '', 0, ''),
(2147483716, 'PCARMADA', 315000, 'PC Gamer Armada Completa Intel Core I3 12100F 16GB SSD NVME 512GB GTX 1650 + Mouse de Regalo', 18, 3, '', '', 0, ''),
(2147483717, 'Gabinete', 57800, 'Corsair 4000D', 7, 2, '', '', 0, ''),
(2147483718, 'Gabinete', 45000, 'Deepcool Matrexx 55 Mesh', 17, 2, '', '', 0, ''),
(2147483719, 'Gabinete', 8000, 'Overtech C/Fuente generica, sin fuente - $2000', 19, 3, '', '', 0, ''),
(2147483720, 'Gabinete', 83000, 'Corsair 5000D Airflow', 7, 1, '', '', 0, ''),
(2147483721, 'CPU', 200000, 'Intel Core i7 13700k', 5, 1, '', '1700', 0, ''),
(2147483722, 'CPU', 200000, 'Amd Ryzen 7 7700X', 6, 1, '', 'AM5', 0, ''),
(2147483723, 'Mother', 100000, 'ASUS TUF B650 PLUS', 4, 2, '', 'AM5', 0, 'DDR5'),
(2147483724, 'RAM', 40000, 'T FORCE DDR5 16GB 5000mHz', 20, 2, '', '', 0, 'DDR5'),
(2147483725, 'CPUCOOLER', 0, 'STOCK AMD', 6, 3, '', '', 0, ''),
(2147483726, 'CPUCOOLER', 0, 'STOCK INTEL', 5, 3, '', '', 0, ''),
(2147483727, 'CPUCOOLER', 40000, 'DEEPCOOL AK620', 17, 1, '', '', 0, ''),
(2147483728, 'CPUCOOLER', 8000, 'IDCOOLING 224XT', 21, 2, '', '', 0, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol`) VALUES
(1, '[admin]'),
(2, 'cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `rolId` int(11) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `rolId`, `avatar`) VALUES
(8290, 'Luciano', 'Voltattorni', 'luvolta99@gmail.com', '$2a$10$jnRcNs9MBOu37KdtsNWcVO2/BQLbB7gl80pVV.xIp4O', 1, '/img/users/1680845792164_img.jpg'),
(8291, 'Martina', 'Schaller', 'martinaschaller12@gmail.com', '$2a$10$XuJq1PzFZ81uY.ukCYqcrukL55GPZ7TpkdzgEB2hPzm', 1, '/img/users/1680845927865_img.jpg'),
(8292, 'Facundo', 'Yavicoli', 'facuyavicoli@hotmail.com', '$2a$10$/hs.UHmISeop2ABWrHd80u3v35DYEmZYOwNnagrondS', 1, '/img/users/1680846033121_img.jpg'),
(8293, 'Maria', 'Trovato', 'malecervetto@gmail.com', '$2a$10$rsjPtMLSLHREmyt4YsHs2OdLovJPP3lY6c59er0lna7', 1, '/img/users/1680846129174_img.jpg'),
(8294, 'Paola', 'Guzman', 'paoguzmanok@gmail.com', '$2a$10$HfMzraboJaNZx/HvKFoEw.yHGoUKk5hEMRc3pYrFFDD', 1, '/img/users/1680847135247_img.jpg'),
(8311, 'Paola', 'Guzman', 'paogu20@hotmail.com', '$2a$10$0EMZNFQXBIlB6YK4TNy4Uezy4lXynLW96/nyBCdcKqI', 2, '/img/users/1681321242030_img.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gama`
--
ALTER TABLE `gama`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marcaId` (`marcaId`),
  ADD KEY `gamaId` (`gamaId`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rolId` (`rolId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gama`
--
ALTER TABLE `gama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483729;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8312;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`marcaId`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`gamaId`) REFERENCES `gama` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
