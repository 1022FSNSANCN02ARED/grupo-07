-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-04-2023 a las 00:40:52
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

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
(2, 'gigabyte');

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
  `imagen` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripción`, `marcaId`, `gamaId`, `imagen`) VALUES
(2147483659, 'monitor', 85000, NULL, NULL, NULL, '/img/products/imagen1680847412019.jpg'),
(2147483660, 'procesador', 80000, NULL, NULL, NULL, '/img/products/imagen1680847920047.jpg'),
(2147483661, 'Monitor', 90, NULL, NULL, NULL, '/img/products/imagen1680906966321.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483671;

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
