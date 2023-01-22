-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2023 a las 04:29:06
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id_alumno` int(6) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `nombre_tutor` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL,
  `phone_no` int(20) NOT NULL,
  `dni` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `role_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id_alumno`, `nombre`, `fecha_nacimiento`, `nombre_tutor`, `email`, `password`, `phone_no`, `dni`, `created_at`, `role_id`) VALUES
(8, 'Pol Busquet Burgues', '2020-04-16', 'Oriol Busquet', 'pa@gmail.com', '$2y$10$ixb8HeAja5SKQA5GesyELOH8ylhst1x78Ez7bbMf67XmZwG5sHVB6', 564456456, '4745454574', '2022-12-21 11:12:45', 1),
(9, 'Patrick Hernandez Coll', '2020-04-16', 'Henrique Hernandez Campo', 'oriol@gmail.com', '$2y$10$hbJY4JqWgii4WZY0y91jwuisz1QDTFay/RphCgCNCE15YQyLqqEFC', 654545565, '47393624E', '2022-12-21 11:36:20', 1),
(10, 'Pol Andreu Presas', '2020-05-20', 'Oriol Andreu Riu', 'polan@gmail.com', '$2y$10$4gg1y4ekiXgE0fm6LIJ62uHN1GiMJMsbCvK.Khi/n4efxkjE.9orm', 651145588, '46444424R', '2022-12-21 11:39:16', 1),
(11, 'Gerard Pique Garcia', '2020-02-21', 'Montse Garcia Pujol', 'mfernan@gmail.com', '$2y$10$2bPu3yZ5oc487t4WkFX.oer18q6Uwk80CaDeMcvDYsQY8dDGzW3W.', 654547754, '34567345I', '2022-12-21 11:41:54', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conexion`
--

CREATE TABLE `conexion` (
  `alumno_id` int(6) NOT NULL,
  `profesor_id` int(6) NOT NULL,
  `grupo_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id_grupo` int(6) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id_grupo`, `descripcion`) VALUES
(1, 'Apicultors');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id_order` int(6) NOT NULL,
  `valoracion_id` int(6) NOT NULL,
  `alumno_id` int(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id_profesor` int(6) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(120) NOT NULL,
  `role_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id_profesor`, `nombre`, `email`, `password`, `role_id`) VALUES
(3, 'Prof. Marta Garcia Sunyent', 'marta@gmail.com', '$2y$10$wd2M6X.0.bbQGIHN.ic99uN1P4C6OJ8ff6OPI8DVH5WBFw5TxQ1rK', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id_role` int(6) NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`id_role`, `descripcion`) VALUES
(1, 'User'),
(2, 'profesor'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion`
--

CREATE TABLE `valoracion` (
  `id_valoracion` int(10) NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `alumno_id` int(6) NOT NULL,
  `desayuno` text NOT NULL,
  `comida_primero` text NOT NULL,
  `comida_segundo` text NOT NULL,
  `comida_postre` text NOT NULL,
  `merienda` text NOT NULL,
  `dormir_inicio` time NOT NULL,
  `dormir_final` time NOT NULL,
  `deposiciones` tinyint(1) NOT NULL,
  `observaciones` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `valoracion`
--

INSERT INTO `valoracion` (`id_valoracion`, `fecha`, `created_at`, `alumno_id`, `desayuno`, `comida_primero`, `comida_segundo`, `comida_postre`, `merienda`, `dormir_inicio`, `dormir_final`, `deposiciones`, `observaciones`) VALUES
(35, '2023-01-16', '2023-01-16 12:34:24', 8, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(36, '2023-01-16', '2023-01-16 12:34:24', 9, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(37, '2023-01-16', '2023-01-16 12:34:24', 10, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(38, '2023-01-16', '2023-01-16 12:34:24', 11, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(39, '2023-01-17', '2023-01-17 12:10:40', 8, '3', '2', '3', '1', '1', '00:00:00', '00:00:00', 1, 'Falta roba recanvi'),
(40, '2023-01-17', '2023-01-17 12:10:40', 9, '1', '1', '1', '3', '1', '13:00:00', '14:00:00', 2, 'falta tovallola'),
(41, '2023-01-17', '2023-01-17 12:10:40', 10, '1', '1', '1', '2', '1', '13:30:00', '13:50:00', 2, 'falta crema pañal'),
(42, '2023-01-17', '2023-01-17 12:10:40', 11, '1', '1', '1', '3', '1', '13:00:00', '15:00:00', 4, 'falta pañales'),
(43, '2023-01-17', '2023-01-17 14:22:39', 8, '1', '1', '1', '1', '1', '11:00:00', '12:00:00', 0, 'se encuetra mal'),
(44, '2023-01-17', '2023-01-17 14:22:39', 9, '1', '3', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(45, '2023-01-17', '2023-01-17 14:22:39', 10, '1', '1', '2', '1', '1', '00:00:00', '00:00:00', 0, ''),
(46, '2023-01-17', '2023-01-17 14:22:39', 11, '3', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(47, '2023-01-17', '2023-01-17 17:15:04', 8, '1', '2', '3', '1', '1', '00:00:00', '00:00:00', 2, 'no esta fi'),
(48, '2023-01-17', '2023-01-17 17:15:04', 9, '2', '3', '3', '1', '1', '00:00:00', '00:00:00', 1, 'pañals'),
(49, '2023-01-17', '2023-01-17 17:15:04', 10, '2', '2', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(50, '2023-01-17', '2023-01-17 17:15:04', 11, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 4, ''),
(51, '2023-01-18', '2023-01-18 11:19:27', 8, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 3, ''),
(52, '2023-01-18', '2023-01-18 11:19:27', 9, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 1, ''),
(53, '2023-01-18', '2023-01-18 11:19:27', 10, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 4, ''),
(54, '2023-01-18', '2023-01-18 11:19:27', 11, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 3, ''),
(55, '2023-01-19', '2023-01-19 13:13:12', 8, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 1, 'Falta calcetines'),
(56, '2023-01-19', '2023-01-19 13:13:12', 9, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(57, '2023-01-19', '2023-01-19 13:13:12', 10, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(58, '2023-01-19', '2023-01-19 13:13:12', 11, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(59, '2023-01-21', '2023-01-21 22:30:08', 8, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(60, '2023-01-21', '2023-01-21 22:30:08', 9, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(61, '2023-01-21', '2023-01-21 22:30:08', 10, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(62, '2023-01-21', '2023-01-21 22:30:08', 11, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(63, '2023-01-21', '2023-01-22 00:18:17', 8, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(64, '2023-01-21', '2023-01-22 00:18:17', 9, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(65, '2023-01-21', '2023-01-22 00:18:17', 10, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(66, '2023-01-21', '2023-01-22 00:18:17', 11, '1', '1', '1', '1', '1', '00:00:00', '00:00:00', 0, ''),
(67, '2023-01-21', '2023-01-22 00:23:45', 8, '1', '1', '1', '1', '1', '13:00:00', '15:00:00', 2, 'Faltan calcetines'),
(68, '2023-01-21', '2023-01-22 00:23:45', 9, '1', '1', '1', '1', '1', '12:00:00', '14:00:00', 2, 'Faltan pañales'),
(69, '2023-01-21', '2023-01-22 00:23:45', 10, '1', '1', '1', '1', '1', '14:00:00', '15:00:00', 2, 'Faltan toallitas'),
(70, '2023-01-21', '2023-01-22 00:23:45', 11, '1', '1', '1', '1', '1', '14:00:00', '04:30:00', 3, 'falta babero');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id_alumno`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `grupo_id` (`role_id`);

--
-- Indices de la tabla `conexion`
--
ALTER TABLE `conexion`
  ADD KEY `alumno_id` (`alumno_id`,`profesor_id`),
  ADD KEY `profesor_id` (`profesor_id`),
  ADD KEY `grupo_id` (`grupo_id`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id_grupo`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `valoracion_id` (`valoracion_id`,`alumno_id`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id_profesor`),
  ADD KEY `IdRole` (`role_id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `role_id_2` (`role_id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indices de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD PRIMARY KEY (`id_valoracion`),
  ADD KEY `alumno_id` (`alumno_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id_alumno` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id_grupo` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id_profesor` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  MODIFY `id_valoracion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id_role`);

--
-- Filtros para la tabla `conexion`
--
ALTER TABLE `conexion`
  ADD CONSTRAINT `conexion_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumno` (`id_alumno`),
  ADD CONSTRAINT `conexion_ibfk_2` FOREIGN KEY (`profesor_id`) REFERENCES `profesor` (`id_profesor`),
  ADD CONSTRAINT `conexion_ibfk_3` FOREIGN KEY (`grupo_id`) REFERENCES `grupo` (`id_grupo`);

--
-- Filtros para la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD CONSTRAINT `profesor_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id_role`);

--
-- Filtros para la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD CONSTRAINT `valoracion_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumno` (`id_alumno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
